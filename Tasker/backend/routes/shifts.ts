import express, { Router } from 'express';
import * as shiftsController from '../controllers/shiftsController';
import * as utils from '../utils';

let router: Router = express.Router();


router.route('/insert/shift').post(utils.authorize(3), shiftsController.insertShift);

router.route('/get/shift').get(utils.authorize(3), shiftsController.getAllShifts);

export default router;
