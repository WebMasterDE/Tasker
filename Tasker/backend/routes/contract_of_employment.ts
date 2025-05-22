import express, { Router } from 'express';
import * as contract_of_employmentController from '../controllers/contract_of_employmentController';
import * as utils from '../utils';


let router: Router = express.Router();

router.route('/get/:id/contract').get(utils.authorize(3), contract_of_employmentController.getContractInfo);

export default router;