const express = require('express');
const route = express.Router();
const OvertimeController = require('../Controllers/OvertimeController')
const {getOvertimeByUserId} = require("../Controllers/OvertimeController");

route.get('/get/:id/:month/:year/overtime', OvertimeController.getOvertimeByUserId);
route.get('/get/:idHour/overtime',OvertimeController.getOvertimeByHourId);
route.post('/insert/overtime', OvertimeController.InsertHour);
route.post('/post/update/overtime',OvertimeController.modifyHourOvertime);

module.exports = route