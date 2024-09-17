const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user_tasks', {
    Id_user_tasks: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    hoursId_hour: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'hours',
        key: 'Id_hour'
      }
    },
    userIdUser: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'users',
        key: 'Id_user'
      }
    },
    taskIdTask: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tasks',
        key: 'Id_task'
      }
    }
  }, {
    sequelize,
    tableName: 'user_tasks',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Id_user_tasks" },
        ]
      },
      {
        name: "hoursId_hour",
        using: "BTREE",
        fields: [
          { name: "hoursId_hour" },
        ]
      },
      {
        name: "userIdUser",
        using: "BTREE",
        fields: [
          { name: "userIdUser" },
        ]
      },
      {
        name: "taskIdTask",
        using: "BTREE",
        fields: [
          { name: "taskIdTask" },
        ]
      },
    ]
  });
};
