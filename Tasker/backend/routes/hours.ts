import express, { Router } from 'express';
import * as hoursController from '../controllers/hoursController';
import * as utils from '../utils';


let router: Router = express.Router();



router.route('/get/lastidHour').get(hoursController.getLastId);

router.route('/:id/hours').get(hoursController.getallHoursById);

router.route('/hours').get(hoursController.getallHours);

router.route('/create/hours').post(hoursController.addHours);

router.route('/delete/hours').post(hoursController.deleteHours);

router.route('/update/:idHour/hour').post(hoursController.updateHour);


export default router;