const { DataTypes } = require('sequelize');
const Db = require('../util/DatabaseConnection');
const User = require('./UserModel');

const Hour = Db.define('Hour', {
    Id_hour: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    Operator: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Hour: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Date: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    userIdUser: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: User,
            key: 'Id_user'
        }
    }
})
module.exports = Hour;