const express = require('express');
const route = express.Router();
const ShiftController = require('../Controllers/ShiftsController')

route.post('/insert/shift', ShiftController.insertShift)
route.get('/get/shift', ShiftController.getAllShifts)

module.exports = route