const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('hours', {
    Id_hour: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Operator: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    Description: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    Hour: {
      type: DataTypes.STRING(255),
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
        model: 'users',
        key: 'Id_user'
      }
    },
    taskIdTask: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'tasks',
        key: 'Id_task'
      }
    },
    userTaskIdUserTasks: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'user_tasks',
        key: 'Id_user_tasks'
      }
    }
  }, {
    sequelize,
    tableName: 'hours',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Id_hour" },
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
      {
        name: "userTaskIdUserTasks",
        using: "BTREE",
        fields: [
          { name: "userTaskIdUserTasks" },
        ]
      },
    ]
  });
};
