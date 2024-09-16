const { Sequelize } = require('sequelize');

const Dbsequelize = new Sequelize('taskerdb', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})
module.exports = Dbsequelize