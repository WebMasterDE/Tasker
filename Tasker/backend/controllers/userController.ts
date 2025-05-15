import { Request, Response, NextFunction } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { Model, where } from 'sequelize';


export const getAllUserbyId = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
    try {
        const user = await app.models.users.findOne({ where: { Id_user: req.params.id } })
        return res.json(user);
    } catch (error) {
        console.log(error)
    }
};

export const getAllUsers = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
    try {
        const users = await app.models.users.findAll({ attributes: ['Id_User', 'Name', 'Email', 'Authorization'] });
        return res.json(users)
    } catch (err) {
        console.log(err)
    }
}

export const signup = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
    try {
        // encrypt password
        const hashedpassw = await bcrypt.hash(req.body.Password, 12)


        const newUser = {
            Name: req.body.Name,
            Email: req.body.Email,
            Password: hashedpassw,
            Authorization: 3
        }
        app.models.users.findOne({ where: { Email: newUser.Email } }).then(resp => {
            if (resp) {
                return console.log("utente gia registrato")
            } else {
                return app.models.users.create(newUser).then(response => {
                    console.log('utente registrato con successo')
                }).catch(error => console.log(error))
            }
        })


    } catch (error) {
        console.log(error)
    }
}


// generate token
function generateToken(data) {
    var token = require('crypto').randomBytes(64).toString('hex');
    return jwt.sign(data, token, { expiresIn: '30m' });
}

export const login = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
    const checkuser = await app.models.users.findOne({ where: { Email: req.body.Email } })
    if (checkuser) {
        const isthesamepass = await bcrypt.compare(req.body.Password, checkuser.Password);
        if (isthesamepass) {

            const Token = generateToken({ Email: checkuser.Email })
            return res.json({ Token, email: checkuser.Email, id: checkuser.Id_user, name: checkuser.Name })
        } else {
            return res.status(401).json({ message: "la password non corrisponde" })
        }
    } else {
        console.log("utente non trovato")
        return res.status(401).json({ message: "utente non trovato" })
    }

}

export const getallHoursById = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
    try {
        let Hours = Object
        if (req.params.id == '10') {

            Hours = await app.models.hours.findAll({
                include: [
                    {
                        model: app.models.tasks,
                        as: 'Id_task_task'
                    },
                    {
                        model: app.models.subtask,
                        as: 'id_subtask_subtask'
                    },
                ],
            })
        } else {
            Hours = await app.models.hours.findAll({
                include: [
                    {
                        model: app.models.tasks,
                        as: 'Id_task_task'
                    },
                    {
                        model: app.models.subtask,
                        as: 'id_subtask_subtask'
                    }
                ],


                where: { Id_user: req.params.id }
            })
        }
        return res.json(Hours)
    } catch (error) {
        console.log(error)
    }
}

export const getallHours = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
    try {
        const Hours = await app.models.hours.findAll({
            include: [
                {
                    model: app.models.tasks,
                    as: 'Id_task_task'
                }
            ],

        })

        return res.json(Hours)
    } catch (error) {
        console.log(error)
    }
}
//TODO
export const addHours = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
    try {
        let descrizioneParziale = "";
        let id_commessa = 0;

        if (req.body.id_subtask) {
            const task_subtask = await app.models.task_subtask.findOne({
                where: {
                    id_task: req.body.Id_task,
                    id_subtask: req.body.id_subtask,
                },
                include: [{
                    model: app.models.tasks,
                    as: "id_task_task",
                    required: true,
                }, {
                    model: app.models.subtask,
                    as: "id_subtask_subtask",
                    required: true,
                }],
            });

            if (task_subtask) {
                descrizioneParziale = "-" + task_subtask.id_task_task.Task_name + "\n" +
                    "-" + task_subtask.id_subtask_subtask.descrizione + "\n";
                id_commessa = task_subtask.id_task_task.id_commessa;
            } else {
                // gestisco il caso in cui id_subtask è stato passato ma non è presente in task_subtask, questo avviene quando la subtask non è assegnata alla task id_task
                const task = await app.models.tasks.findOne({
                    where: {
                        Id_task: req.body.Id_task,
                    }
                });

                descrizioneParziale = "-" + task.Task_name + "\n";
                id_commessa = task.id_commessa;
            }
        } else {
            const task = await app.models.tasks.findOne({
                where: {
                    Id_task: req.body.Id_task,
                }
            });

            descrizioneParziale = "-" + task.Task_name + "\n";
            id_commessa = task.id_commessa;
        }

        let descrizioneCompleta = descrizioneParziale +
            "-Codice commit: " + req.body.Commit + "\n" +
            "-Descrizione: " + req.body.Description;

        console.log(descrizioneCompleta);

        const user = await app.models.users.findOne({
            where: {
                Id_user: req.body.Id_user
            }
        });

        // let obj = {
        //     id_commessa: id_commessa,
        //     id_operatore: user.id_operatore,
        //     ore_lavoro: req.body.Hour,
        //     data_lavoro: req.body.Date,
        //     operatore_ins: user.id_operatore,
        //     note: descrizioneCompleta,
        // };

        // console.log(obj);

        // const timetable = await app.models.timetable.findAll({
        // });
        // console.log(timetable);

        const timetable = await app.models.timetable.create({
            id_commessa: id_commessa,
            id_operatore: user.id_operatore,
            ore_lavoro: req.body.Hour,
            data_lavoro: req.body.Date,
            operatore_ins: user.id_operatore,
            note: descrizioneCompleta,
        });

        const hour = await app.models.hours.create({
            Operator: req.body.Operator,
            Description: req.body.Description,
            Hour: req.body.Hour,
            Date: req.body.Date,
            Commit: req.body.Commit,
            Id_user: req.body.Id_user,
            id_subtask: req.body.id_subtask,
            Id_task: req.body.Id_task,
            id_timetable: timetable.id_timetable
        });

        res.status(201).send("Ore inserite correttamente!");
    } catch (err) {
        console.log(err)
    }
}

export const getLastId = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
    try {
        const lastId = await app.models.hours.findOne({
            attributes: ['Id_hour'],
            order: [['Id_hour', 'DESC']],
            limit: 1
        })
        return res.json(lastId.dataValues.Id_hour)
    } catch (err) {
        console.log(err);
    }

}
//TODO
export const deleteHours = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
    try {
        app.models.hours.destroy({ where: { Id_hour: req.body.Id_hour } })
        if (result === 1) {
            res.status(200).json({ message: 'Record deleted successfully' });
        } else {
            res.status(404).json({ message: 'Record not found' });
        }
    } catch (err) {
        console.log(err)
    }
}
//TODO
export const updateHour = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
    try {

        const updHours = app.models.hours.update({

            Description: req.body.Description,
            Date: req.body.Date,
            Commit: req.body.Commit,
            Hour: req.body.Hour,
            Id_task: req.body.Id_task,
            id_subtask: req.body.id_subtask

        }, { where: { Id_hour: req.params.idHour } })
        return updHours
    } catch (err) {
        console.log(err)
    }
}

export const getAuthorization = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
    try {
        const authorization = await app.models.users.findOne({
            where: { Id_user: req.params.id },
            attributes: ['Authorization']
        })
        return res.json(authorization)
    } catch (err) {
        console.log(err)
    }
}

export const modifyPassword = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
    try {
        const existingUser = await app.models.users.findOne({ where: { id_User: req.params.id } })
        const hashedpassw = await bcrypt.hash(req.body.pass, 12)
        existingUser.update({
            Password: hashedpassw
        })
        if (res.status(201)) {
            return console.log('password_modificata correattamente')
        } else {
            return console.log('errore nella modifica della password')
        }
    } catch (err) {
        console.log(err)
    }
}