const express = require('express');
const route = express.Router();
const Taskcontroller = require('../Controllers/TaskController')
const {deleteTasks} = require("../Controllers/TaskController");



route.get('/:id/tasks',Taskcontroller.getTasks)
route.post('/tasks/delete',Taskcontroller.deleteTasks)
route.post('/tasks/create',Taskcontroller.addTasks)


module.exports = route