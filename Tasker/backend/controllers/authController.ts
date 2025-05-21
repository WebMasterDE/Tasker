import { Request, Response, NextFunction } from 'express';
import * as models from "../models/init-models";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import config from '../config';



// export const signup = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
//     try {
//         // encrypt password
//         const hashedpassw = await bcrypt.hash(req.body.Password, 12)


//         const newUser = {
//             Name: req.body.Name,
//             Email: req.body.Email,
//             Password: hashedpassw,
//             Authorization: 3
//         }
//         models.users.findOne({ where: { Email: newUser.Email } }).then(resp => {
//             if (resp) {
//                 return console.log("utente gia registrato")
//             } else {
//                 return models.users.create(newUser).then(response => {
//                     console.log('utente registrato con successo')
//                 }).catch(error => console.log(error))
//             }
//         })


//     } catch (error) {
//         console.log(error)
//     }
// }


export const login = async (req: any, res: Response, next: NextFunction): Promise<void> => {

    const tokenData = {
        id: req.user.id,
        mail: req.user.mail,
        authLevel: req.user.authLevel
    };

    const token = jwt.sign(tokenData, config.jwtSecret, { expiresIn: '4h' });

    res.status(200).json({
        error: false,
        message: 'Login effettuato con successo',
        token: token,
    });

}






// export const getAuthorization = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
//     try {
//         const authorization = await models.users.findOne({
//             where: { Id_user: req.params.id },
//             attributes: ['Authorization']
//         })
//         return res.json(authorization)
//     } catch (err) {
//         console.log(err)
//     }
// }

// export const modifyPassword = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
//     try {
//         const existingUser = await models.users.findOne({ where: { Id_user: req.params.id } })
//         const hashedpassw = await bcrypt.hash(req.body.pass, 12)
//         existingUser.update({
//             Password: hashedpassw
//         })
//         if (res.status(201)) {
//             return console.log('password_modificata correattamente')
//         } else {
//             return console.log('errore nella modifica della password')
//         }
//     } catch (err) {
//         console.log(err)
//     }
// }