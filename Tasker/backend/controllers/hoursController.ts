import { Request, Response, NextFunction } from 'express';
import * as models from "../models/init-models";


export const getallHoursById = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
    try {
        let Hours;
        if (req.params.id == '10') {

            Hours = await models.hours.findAll({
                include: [
                    {
                        model: models.tasks,
                        as: 'Id_task_task'
                    },
                    {
                        model: models.subtask,
                        as: 'id_subtask_subtask'
                    },
                ],
            })
        } else {
            Hours = await models.hours.findAll({
                include: [
                    {
                        model: models.tasks,
                        as: 'Id_task_task'
                    },
                    {
                        model: models.subtask,
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
        const Hours = await models.hours.findAll({
            include: [
                {
                    model: models.tasks,
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
            const task_subtask = await models.task_subtask.findOne({
                where: {
                    id_task: req.body.Id_task,
                    id_subtask: req.body.id_subtask,
                },
                include: [{
                    model: models.tasks,
                    as: "id_task_task",
                    required: true,
                }, {
                    model: models.subtask,
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
                const task = await models.tasks.findOne({
                    where: {
                        Id_task: req.body.Id_task,
                    }
                });

                descrizioneParziale = "-" + task.Task_name + "\n";
                id_commessa = task.id_commessa;
            }
        } else {
            const task = await models.tasks.findOne({
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

        const user = await models.users.findOne({
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

        // const timetable = await models.timetable.findAll({
        // });
        // console.log(timetable);

        const timetable = await models.timetable.create({
            id_commessa: id_commessa,
            id_operatore: user.id_operatore,
            ore_lavoro: req.body.Hour,
            data_lavoro: req.body.Date,
            operatore_ins: user.id_operatore,
            note: descrizioneCompleta,
        });

        const hour = await models.hours.create({
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
        const lastId = await models.hours.findOne({
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
        models.hours.destroy({ where: { Id_hour: req.body.Id_hour } })
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

        const updHours = models.hours.update({

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