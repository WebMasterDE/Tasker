import express, { Router } from 'express';
import * as hoursController from '../controllers/hoursController';
import * as utils from '../utils';


let router: Router = express.Router();



router.route('/get/lastidHour').get(utils.authorize(3), hoursController.getLastId);

router.route('/:id/hours').get(utils.authorize(3), hoursController.getallHoursById);

router.route('/hours').get(utils.authorize(3), hoursController.getallHours);

router.route('/create/hours').post(utils.authorize(2), hoursController.addHours);

router.route('/delete/hours').post(utils.authorize(2), hoursController.deleteHours);

router.route('/update/:idHour/hour').post(utils.authorize(2), hoursController.updateHour);


export default router;