import express, { Router } from 'express';
import * as archiveController from '../controllers/archiveController';
import * as utils from '../utils';

let router: Router = express.Router();

router.route('/archive/:id_task/:id_user').post(utils.authorize(1), archiveController.addTasksToArchive);

router.route('/archive/:id').get(utils.authorize(3), archiveController.getArchive);

export default router;