import express, { Router } from 'express';
import * as contract_of_employmentController from '../controllers/contract_of_employmentController';
import * as utils from '../utils';


let router: Router = express.Router();

/**
 * @swagger
 * /api/contract/user/{id_user}:
 *  get:
 *    summary: "get contract of an user by id"
 *    description: "get contract of an user by id"
 *    parameters:
 *       - name: id_user
 *         in: path
 *         required: true
 *         description: "User ID."
 *         schema:
 *           type: integer
 *           example: 1
 *    responses:
 *      '200':
 *        description: A successful response
 *      '401':
 *        description: Unauthorized
 *    security:
 *       - Bearer: []
 *    tags:
 *      - "Contract Of Employment"
 */
router.route('/contract/user/:id_user').get(utils.authorize(3), contract_of_employmentController.getContractInfoByUserId);

export default router;