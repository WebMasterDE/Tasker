const app = require('../app');
const bcrypt = require('bcrypt')
const { logger } = require("sequelize/lib/utils/logger");
const jwt = require('jsonwebtoken');
const { Model, where } = require('sequelize');


exports.getAllUserbyId = async (req, res) => {
    try {
        const user = await app.models.users.findOne({ where: { Id_user: req.params.id } })
        return res.json(user);
    } catch (error) {
        console.log(error)
    }

}

exports.getAllUsers = async (req, res) => {
    try {
        const users = await app.models.users.findAll({ attributes: ['Name', 'Email', 'Authorization'] });
        return res.json(users)
    } catch (err) {
        console.log(err)
    }
}

exports.signup = async (req, res) => {
    try {
        // encrypt password
        const hashedpassw = await bcrypt.hash(req.body.Password, 12)


        const newUser = {
            Name: req.body.Name,
            Email: req.body.Email,
            Password: hashedpassw,
            Autorizzazione: 3
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

exports.login = async (req, res) => {
    const checkuser = await app.models.users.findOne({ where: { Email: req.body.Email } })
    if (checkuser) {
        console.log(req.body.Password, checkuser.Password)
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

exports.getallHours = async (req, res) => {
    try {
        const Hours = await app.models.hours.findAll({
            where: { Id_user: req.params.id }, include: [
                {
                    model: app.models.tasks,
                    as: 'Id_task_task'
                }
            ]
        })
        return res.json(Hours)
    } catch (error) {
        console.log(error)
    }
}

exports.addHours = async (req, res) => {
    try {
        const hour = await app.models.hours.create({
            Operator: req.body.Operator,
            Description: req.body.Description,
            Hour: req.body.Hour,
            Date: req.body.Date,
            Commit: req.body.Commit,
            Id_user: req.body.Id_user,
            Id_task: req.body.Id_task

        })

        res.status(201).send("Ore inserite inserite correttamente!")
    } catch (err) {
        console.log(err)
    }
}
exports.deleteHours = async (req, res) => {
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

exports.getAuthorization = async (req, res) => {
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
