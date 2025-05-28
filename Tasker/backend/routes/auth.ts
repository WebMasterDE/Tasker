import express, { Router } from 'express';
import * as authController from '../controllers/authController';
import * as utils from '../utils';
import passport = require('passport');


let router: Router = express.Router();


// router.route('/user/auth/signup').post(authController.signup);

/**
 * @swagger
 * /api/login:
 *  get:
 *    description: Use to request a user login
 *    responses:
 *      '200':
 *        description: A successful response
 *      '400':
 *        description: Bad request
 *    tags:
 *      - Auth
 */
router.route('/login').get(passport.authenticate('basic', { session: false }), authController.login);

// router.route('/authorization/:id/user').get(authController.getAuthorization);

// router.route('/change/password/user/:id').post(authController.modifyPassword);


export default router;