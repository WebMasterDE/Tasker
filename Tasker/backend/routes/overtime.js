const express = require('express');
const route = express.Router();
const OvertimeController = require('../Controllers/OvertimeController')

route.post('/insert/overtime', OvertimeController.InsertHour)
route.get('/get/:id/:month/:year/overtime', OvertimeController.getOvertimeById)

module.exports = route