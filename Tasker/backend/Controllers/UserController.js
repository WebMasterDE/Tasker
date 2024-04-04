const ModelUser = require('../Models/UserModel')
const HoursModel = require('../Models/HourModel')
const bcrypt = require('bcrypt')
const { logger } = require("sequelize/lib/utils/logger");
const jwt = require('jsonwebtoken')


exports.getAllUser = async (req, res) => {
    try {
        const user = await ModelUser.findOne({ where: { Id_user: req.params.id } })
        return res.json(user);
    } catch (error) {
        console.log(error)
    }

}

exports.signup = async (req, res) => {
    try {
        // encrypt password
        const hashedpassw = await bcrypt.hash(req.body.Password, 12)


        const newUser = {
            Name: req.body.Name,
            Email: req.body.Email,
            Password: hashedpassw
        }
        ModelUser.findOne({ where: { Email: newUser.Email } }).then(resp => {
            if (resp) {
                return console.log("utente gia registrato")
            } else {
                return ModelUser.create(newUser).then(response => {
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
    const checkuser = await ModelUser.findOne({ where: { Email: req.body.Email } })
    if (checkuser) {
        const isthesamepass = await bcrypt.compare(req.body.Password, checkuser.Password);
        if (isthesamepass) {

            const Token = generateToken({ Email: checkuser.Email })
            return res.json({ Token, email: checkuser.Email, id: checkuser.Id_user, })
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
        const Hours = await HoursModel.findAll({ where: { userIdUser: req.params.id } })
        return res.json(Hours)
    } catch (error) {
        console.log(error)
    }
}

exports.addHours = async (req, res) => {
    try {
        console.log(req.body)
        HoursModel.create({
            Operator: req.body.Operator,
            Description: req.body.Description,
            Hour: req.body.Hour,
            Date: req.body.Date,
            userIdUser: req.body.userIdUser
        })

        res.status(201).send("Ore inserite inserite correttamente!")
    } catch (err) {
        console.log(err)
    }
}
