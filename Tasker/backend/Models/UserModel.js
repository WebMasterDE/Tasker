const { DataTypes} = require('sequelize');
const Db = require('../util/DatabaseConnection');

const User = Db.define('user',{
    Id_user:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true,
        allowNull:false
    },
    Name:{
        type:DataTypes.STRING,
        allowNull: true
    },
    Email:{
        type:DataTypes.STRING,
        allowNull:false
    },
    Password:{
        type:DataTypes.STRING,
        allowNull:false,
    }
})

module.exports = User;