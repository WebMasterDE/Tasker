const express = require('express');
const route = express.Router();
const subtaskController = require('../Controllers/SubtaskController')

route.get('/get/subtask', subtaskController.getallSubtasks);

module.exports = route