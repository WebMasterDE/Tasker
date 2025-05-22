import express, { Router } from 'express';
import * as subtaskController from '../controllers/subtaskController';
import * as utils from '../utils';


let router: Router = express.Router();

router.route('/subtasks/task/:id_task').get(utils.authorize(3), subtaskController.getSubtasksByTaskId);

export default router;
