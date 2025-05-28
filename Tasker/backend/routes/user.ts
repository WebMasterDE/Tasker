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


export default router;