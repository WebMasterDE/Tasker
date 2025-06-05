import express, { Router } from 'express';
import * as extraController from '../controllers/extraController';
import * as utils from '../utils';


let router: Router = express.Router();


/**
 * @swagger
 * /api/extra/align/diven:
 *  post:
 *    summary: "Aligns hours with DIVEN (affects DIVEN)"
 *    description: "Aligns hours with DIVEN (affects DIVEN)"
 *    responses:
 *      '200':
 *        description: A successful response
 *      '401':
 *        description: Unauthorized
 *    security:
 *       - Bearer: []
 *    tags:
 *      - Extra
 */
router.route('/extra/align/diven').post(utils.authorize(1), extraController.createMissingHoursDiven);


export default router;