import express, { Router } from 'express';
import * as hoursController from '../controllers/hoursController';
import * as utils from '../utils';


let router: Router = express.Router();


/**
 * @swagger
 * /api/last_id_hour:
 *  get:
 *    summary: "get last inserted hour ID"
 *    description: "get last inserted hour ID"
 *    responses:
 *      '200':
 *        description: A successful response
 *      '401':
 *        description: Unauthorized
 *    security:
 *       - Bearer: []
 *    tags:
 *      - Hours
 */
router.route('/last_id_hour').get(utils.authorize(3), hoursController.getLastId);

/**
 * @swagger
 * /api/hours/user/{id_user}:
 *  get:
 *    summary: "get hours of an user by id"
 *    description: "get hours of an user by id"
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
 *      - Hours
 */
router.route('/hours/user/:id_user').get(utils.authorize(3), hoursController.getallHoursById);

/**
 * @swagger
 * /api/hours:
 *  get:
 *    summary: "get all hours"
 *    description: "get all hours"
 *    responses:
 *      '200':
 *        description: A successful response
 *      '401':
 *        description: Unauthorized
 *    security:
 *       - Bearer: []
 *    tags:
 *      - Hours
 */
router.route('/hours').get(utils.authorize(3), hoursController.getallHours);

/**
 * @swagger
 * /api/hour:
 *  post:
 *    summary: "add hour"
 *    description: "add hour"
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            required:
 *              - Id_task
 *            properties:
 *              Id_task:
 *                type: integer
 *                example: 71
 *              id_subtask:
 *                type: integer
 *                example: 4
 *              Commit:
 *                type: string
 *                example: "0xFFAA45FA7CBA99"
 *              Description:
 *                type: string
 *                example: "Modifiche alla logica dell'inserimento dei nuovi rip."
 *              Id_user:
 *                type: integer
 *                example: 8
 *              Operator:
 *                type: string
 *                example: "Gioele Zara"
 *              Hour:
 *                type: integer
 *                example: 8
 *              Date:
 *                type: string
 *                example: "2025-05-22"
 *    responses:
 *      '200':
 *        description: A successful response
 *      '401':
 *        description: Unauthorized
 *    security:
 *       - Bearer: []
 *    tags:
 *      - Hours
 */
router.route(
    '/hour'
).post(
    utils.authorize(2),
    hoursController.addHour
);

/**
 * @swagger
 * /api/hour/{id_hour}:
 *  delete:
 *    summary: "Delete hour by id"
 *    description: "Delete hour by id"
 *    parameters:
 *       - name: id_hour
 *         in: path
 *         required: true
 *         description: "Hour ID."
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
 *      - Hours
 *  put:
 *    summary: "Update hour by id"
 *    description: "Update hour by id"
 *    parameters:
 *       - name: id_hour
 *         in: path
 *         required: true
 *         description: "Hour ID."
 *         schema:
 *           type: integer
 *           example: 1
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            required:
 *              - Id_task
 *            properties:
 *              Id_task:
 *                type: integer
 *                example: 71
 *              id_subtask:
 *                type: integer
 *                example: 4
 *              Commit:
 *                type: string
 *                example: "0xFFAA45FA7CBA99"
 *              Description:
 *                type: string
 *                example: "Modifiche alla logica dell'inserimento dei nuovi rip."
 *              Id_user:
 *                type: integer
 *                example: 8
 *              Operator:
 *                type: string
 *                example: "Gioele Zara"
 *              Hour:
 *                type: integer
 *                example: 8
 *              Date:
 *                type: string
 *                example: "2025-05-22"
 *    responses:
 *      '200':
 *        description: A successful response
 *      '401':
 *        description: Unauthorized
 *    security:
 *       - Bearer: []
 *    tags:
 *      - Hours
 */
router.route(
    '/hour/:id_hour'
).delete(
    utils.authorize(2),
    hoursController.deleteHour
).put(
    utils.authorize(2),
    hoursController.updateHour
);


export default router;