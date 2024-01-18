const {Sequelize} = require('sequelize');

const Dbsequelize = new Sequelize('nodeDb','root','',{
    host:'localhost',
    dialect:'mysql'
})
module.exports = Dbsequelize