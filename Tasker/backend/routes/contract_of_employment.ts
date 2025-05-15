const express = require('express');
const route = express.Router();
const Contract_of_employmentController = require('../Controllers/Contract_of_employment.js')

route.get('/get/:id/contract', Contract_of_employmentController.getContractInfo)

module.exports = route