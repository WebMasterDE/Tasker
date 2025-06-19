import express, { Router } from 'express';
import * as subtaskController from '../controllers/SubtaskController';
import * as utils from '../utils';


let router: Router = express.Router();

/**
 * @swagger
 * /api/subtasks/task/{id_task}:
 *  get:
 *    summary: "get subtasks of a task by id"
 *    description: "get subtasks of a task by id"
 *    parameters:
 *       - name: id_task
 *         in: path
 *         required: true
 *         description: "Task ID."
 *         schema:
 *           type: integer
 *           example: 71
 *    responses:
 *      '200':
 *        description: A successful response
 *      '401':
 *        description: Unauthorized
 *    security:
 *       - Bearer: []
 *    tags:
 *      - Subtasks
 */
router.route('/subtasks/task/:id_task').get(utils.authorize(3), subtaskController.getSubtasksByTaskId);

/**
 * @swagger
 * /api/subtask/{id_subtask}/task/{id_task}:
 *  post:
 *    summary: "assign subtask to a task"
 *    description: "assign subtask to a task"
 *    parameters:
 *       - name: id_subtask
 *         in: path
 *         required: true
 *         description: "Subtask ID."
 *         schema:
 *           type: integer
 *           example: 1
 *       - name: id_task
 *         in: path
 *         required: true
 *         description: "Task ID."
 *         schema:
 *           type: integer
 *           example: 71
 *    responses:
 *      '200':
 *        description: A successful response
 *      '401':
 *        description: Unauthorized
 *    security:
 *       - Bearer: []
 *    tags:
 *      - Subtasks
 *  delete:
 *    summary: "remove subtask from a task"
 *    description: "remove subtask from a task"
 *    parameters:
 *       - name: id_subtask
 *         in: path
 *         required: true
 *         description: "Subtask ID."
 *         schema:
 *           type: integer
 *           example: 1
 *       - name: id_task
 *         in: path
 *         required: true
 *         description: "Task ID."
 *         schema:
 *           type: integer
 *           example: 71
 *    responses:
 *      '200':
 *        description: A successful response
 *      '401':
 *        description: Unauthorized
 *    security:
 *       - Bearer: []
 *    tags:
 *      - Subtasks
 */
router.route(
    '/subtask/:id_subtask/task/:id_task'
).post(
    utils.authorize(1),
    subtaskController.addSubtaskToTask
).delete(
    utils.authorize(1),
    subtaskController.deleteSubtaskFromTask
);

/**
 * @swagger
 * /api/subtask:
 *  post:
 *    summary: "add new subtask"
 *    description: "add new subtask"
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            required:
 *              - descrizione
 *              - ore_preventivate
 *              - data_inizio
 *              - data_fine_prevista
 *            properties:
 *              descrizione:
 *                type: string
 *                example: "Descrizione"
 *              ore_preventivate:
 *                type: integer
 *                example: 0
 *              data_inizio:
 *                type: string
 *                example: "2025-05-22"
 *              data_fine_prevista:
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
 *      - Subtasks
 */
router.route('/subtask').post(utils.authorize(1), subtaskController.addSubtask);

/**
 * @swagger
 * /api/subtask/{id_subtask}:
 *  get:
 *    summary: "get subtask by id"
 *    description: "get subtask by id"
 *    parameters:
 *       - name: id_subtask
 *         in: path
 *         required: true
 *         description: "Subtask ID."
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
 *      - Subtasks
 *  put:
 *    summary: "update subtask by id"
 *    description: "update subtask by id"
 *    parameters:
 *       - name: id_subtask
 *         in: path
 *         required: true
 *         description: "Subtask ID."
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
 *              - descrizione
 *              - ore_preventivate
 *              - data_inizio
 *              - data_fine_prevista
 *            properties:
 *              descrizione:
 *                type: string
 *                example: "Descrizione"
 *              ore_preventivate:
 *                type: integer
 *                example: 0
 *              data_inizio:
 *                type: string
 *                example: "2025-05-22"
 *              data_fine_prevista:
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
 *      - Subtasks
 *  delete:
 *    summary: "delete subtask by id"
 *    description: "delete subtask by id"
 *    parameters:
 *       - name: id_subtask
 *         in: path
 *         required: true
 *         description: "Subtask ID."
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
 *      - Subtasks
 */
router.route(
    '/subtask/:id_subtask'
).get(
    utils.authorize(3),
    subtaskController.getSubtaskById
).put(
    utils.authorize(1),
    subtaskController.updateSubtask
).delete(
    utils.authorize(1),
    subtaskController.deleteSubtask
);


export default router;
