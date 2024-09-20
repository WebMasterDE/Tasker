const express = require('express');
const route = express.Router();
const ShiftController = require('../Controllers/ShiftsController')

route.post('/insert/shift', ShiftController.insertShift)

module.exports = route