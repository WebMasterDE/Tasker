const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
    return sequelize.define('shifts', {
        Id_shift: {
            autoIncrement: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        start_date: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        end_date: {
            type: DataTypes.DATEONLY,
            allowNull: true
        },
        hour: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        Id_user: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'users',
                key: 'Id_user'
            }
        }
    }, {
        sequelize,
        tableName: 'shifts',
        timestamps: false,
        indexes: [
            {
                name: "PRIMARY",
                unique: true,
                using: "BTREE",
                fields: [
                    {name: "Id_shift"},
                ]
            },
            {
                name: "shifts_users_Id_user_fk",
                using: "BTREE",
                fields: [
                    {name: "Id_user"},
                ]
            },
        ]
    });
};
