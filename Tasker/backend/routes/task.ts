import express, { Router } from 'express';
import * as taskController from '../controllers/taskController';
import * as utils from '../utils';


let router: Router = express.Router();

/**
 * @swagger
 * /api/tasks:
 *  get:
 *    summary: "get all tasks"
 *    description: "get all tasks"
 *    responses:
 *      '200':
 *        description: A successful response
 *      '401':
 *        description: Unauthorized
 *    security:
 *       - Bearer: []
 *    tags:
 *      - Tasks
 */
router.route('/tasks').get(utils.authorize(3), taskController.getAllTasks);

/**
 * @swagger
 * /api/task:
 *  post:
 *    summary: "get user by id"
 *    description: "get user by id"
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            required:
 *              - Task_name
 *            properties:
 *              Task_name:
 *                type: string
 *                example: "Name"
 *              id_commessa:
 *                type: integer
 *                example: 6100
 *              Task_description:
 *                type: string
 *                example: "Description"
 *              Task_creation:
 *                type: string
 *                example: "2025-05-22"
 *              color:
 *                type: string
 *                example: "#ABCDEF"
 *    responses:
 *      '200':
 *        description: A successful response
 *      '401':
 *        description: Unauthorized
 *    security:
 *       - Bearer: []
 *    tags:
 *      - Tasks
 */
router.route(
    '/task'
).post(
    utils.authorize(1),
    taskController.addTasks
);

/**
 * @swagger
 * /api/task/{id_task}:
 *  delete:
 *    summary: "delete task by id"
 *    description: "delete task by id"
 *    parameters:
 *       - name: id_task
 *         in: path
 *         required: true
 *         description: "Task ID."
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
 *      - Tasks
 */
router.route(
    '/task/:id_task'
).delete(
    utils.authorize(1),
    taskController.deleteTasks
);


export default router;
