const express = require('express');
const route = express.Router();
const ArchiveController = require('../Controllers/ArchiveController')

route.post('/archive/:id_task/:id_user', ArchiveController.addTasksToArchive)
route.get('/archive/:id', ArchiveController.getArchive)

module.exports = route