import express, { Router } from 'express';
import * as overtimeController from '../controllers/OvertimeController';
import * as utils from '../utils';

let router: Router = express.Router();


router.route('/get/:id/:month/:year/overtime').get(utils.authorize(3), overtimeController.getOvertimeByUserId);

router.route('/get/:idHour/overtime').get(utils.authorize(3), overtimeController.getOvertimeByHourId);

router.route('/insert/overtime').post(utils.authorize(3), overtimeController.InsertHour);

router.route('/post/update/overtime').post(utils.authorize(3), overtimeController.modifyHourOvertime);


export default router;
