const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
    return sequelize.define('archives', {
        Id_task: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        Task_name: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        Task_description: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        Task_hours: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        Task_creation: {
            type: DataTypes.DATEONLY,
            allowNull: true
        },
        Task_end: {
            type: DataTypes.DATEONLY,
            allowNull: true
        },
        userIdUser: {
            type: DataTypes.INTEGER,
            allowNull: true
        }
    }, {
        sequelize,
        tableName: 'archives',
        timestamps: true
    });
};
