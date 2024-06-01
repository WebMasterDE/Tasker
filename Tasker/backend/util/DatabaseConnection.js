const { Sequelize } = require('sequelize');

const Dbsequelize = new Sequelize('taskerDb', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})
module.exports = Dbsequelize