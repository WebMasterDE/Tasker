import express, { Router } from 'express';
import * as taskController from '../controllers/taskController';
import * as utils from '../utils';


let router: Router = express.Router();


router.route('/get/tasks').get(utils.authorize(3), taskController.getTasks);

router.route('/tasks/delete').post(utils.authorize(3), taskController.deleteTasks);

router.route('/tasks/create').post(utils.authorize(3), taskController.addTasks);


export default router;
