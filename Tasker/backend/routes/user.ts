import express, { Router } from 'express';
import * as userController from '../controllers/userController';
import * as utils from '../utils';


let router: Router = express.Router();

/**
 * @swagger
 * /api/user/{id_user}:
 *  get:
 *    summary: "get user by id"
 *    description: "get user by id"
 *    parameters:
 *       - name: id_user
 *         in: path
 *         required: true
 *         description: "User ID."
 *         schema:
 *           type: integer
 *           example: 1
 *    responses:
 *      '200':
 *        description: A successful response
 *      '401':
 *        description: Unauthorized
 *    security:
 *       - Bearer: []
 *    tags:
 *      - Users
 */
router.route('/user/:id_user').get(utils.authorize(3), userController.getUserbyId);

/**
 * @swagger
 * /api/users:
 *  get:
 *    summary: "get all users"
 *    description: "get all users"
 *    responses:
 *      '200':
 *        description: A successful response
 *      '401':
 *        description: Unauthorized
 *    security:
 *       - Bearer: []
 *    tags:
 *      - Users
 */
router.route('/users').get(utils.authorize(3), userController.getAllUsers);

/**
 * @swagger
 * /api/user:
 *  post:
 *    summary: "add an users (checks DIVEN)"
 *    description: "add an users (checks DIVEN)"
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            required:
 *              - mail
 *            properties:
 *              mail:
 *                type: string
 *                example: "m.rossi@divisionenergia.it"
 *              password:
 *                type: string
 *                format: password
 *              name:
 *                type: string
 *                example: "Mario Rossi"
 *              authLevel:
 *                type: integer
 *                description: "Authorization level of the user (1: Admin, 2: User, 3: Viewer)"
 *                example: 2
 *              id_operatore:
 *                type: integer
 *                description: "Id operatore in gestionale DIVEN"
 *    responses:
 *      '200':
 *        description: A successful response
 *      '401':
 *        description: Unauthorized
 *    security:
 *       - Bearer: []
 *    tags:
 *      - Users
 */
router.route('/user').post(utils.authorize(1), userController.addUser);



export default router;