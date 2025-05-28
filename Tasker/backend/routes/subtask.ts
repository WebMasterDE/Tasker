import express, { Router } from 'express';
import * as subtaskController from '../controllers/subtaskController';
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




export default router;
