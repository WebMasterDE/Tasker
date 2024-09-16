const express = require('express');
const route = express.Router();
const UserController = require('../Controllers/UserController')


/**
 * GET /api/user
 * @returns all users in the table user
 */
route.get('/:id/user', UserController.getAllUser)
route.post('/user/auth/signup', UserController.signup);
route.post('/user/auth/login', UserController.login);
route.get('/:id/hours', UserController.getallHours);
route.post('/create/hours', UserController.addHours);
route.post('/delete/hours', UserController.deleteHours);

module.exports = route