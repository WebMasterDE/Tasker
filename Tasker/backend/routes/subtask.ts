const express = require('express');
const route = express.Router();
const subtaskController = require('../Controllers/SubtaskController')

route.get('/subtasks/task/:id_task', subtaskController.getSubtasksByTaskId);

module.exports = route