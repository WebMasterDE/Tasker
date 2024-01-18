const { DataTypes} = require('sequelize');
const Db = require('../util/DatabaseConnection');
const User = require('./UserModel');

const Task = Db.define('task',{
    Id_task:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false
    },
    Task_name:{
        type:DataTypes.STRING,
        allowNull: false
    },
    Task_description:{
        type:DataTypes.STRING,
        allowNull:false
    },
    Task_hours:{
        type:DataTypes.STRING,
        allowNull:false
    },
    Task_creation:{
        type:DataTypes.DATEONLY,
        allowNull:false
    },
    Task_end:{
        type:DataTypes.DATEONLY,
        allowNull:false
    },
    userIdUser: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: User,
            key: 'Id_user'
        }
    }
})
module.exports = Task;