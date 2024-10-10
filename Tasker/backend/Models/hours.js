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
      allowNull: true
    },
    Description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Hour: {
      type: DataTypes.DECIMAL(10,1),
      allowNull: true
    },
    Date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    Id_user: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'users',
        key: 'Id_user'
      }
    },
    Id_task: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'tasks',
        key: 'Id_task'
      }
    },
    Commit: {
      type: DataTypes.STRING(255),
      allowNull: true
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
        name: "hours_users_Id_user_fk",
        using: "BTREE",
        fields: [
          { name: "Id_user" },
        ]
      },
      {
        name: "hours_tasks_Id_task_fk",
        using: "BTREE",
        fields: [
          { name: "Id_task" },
        ]
      },
    ]
  });
};
