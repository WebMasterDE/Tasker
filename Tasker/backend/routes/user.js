const express = require('express');
const route = express.Router();
const UserController = require('../Controllers/UserController')


/**
 * GET /api/user
 * @returns all users in the table user
 */
route.get('/:id/user', UserController.getAllUserbyId)
route.get('/get/users', UserController.getAllUsers)
route.post('/user/auth/signup', UserController.signup);
route.post('/user/auth/login', UserController.login);
route.get('/:id/hours', UserController.getallHours);
route.post('/create/hours', UserController.addHours);
route.post('/delete/hours', UserController.deleteHours);
route.get('/authorization/:id/user', UserController.getAuthorization)
route.post('/change/password/user/:id', UserController.modifyPassword)

module.exports = route