import express, { Router } from 'express';
import * as userController from '../controllers/userController';

let route: Router = express.Router();


route.route('/:id/user').get(userController.getAllUserbyId);

route.route('/get/users').get(userController.getAllUsers);

route.route('/get/lastidHour').get(userController.getLastId);

route.route('/user/auth/signup').post(userController.signup);

route.route('/user/auth/login').post(userController.login);

route.route('/:id/hours').get(userController.getallHoursById);

route.route('/hours').get(userController.getallHours);

route.route('/create/hours').post(userController.addHours);

route.route('/delete/hours').post(userController.deleteHours);

route.route('/authorization/:id/user').get(userController.getAuthorization);

route.route('/change/password/user/:id').post(userController.modifyPassword);

route.route('/update/:idHour/hour').post(userController.updateHour);


export default route;