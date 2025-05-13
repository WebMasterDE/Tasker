const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('task_subtask', {
    id_task: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'tasks',
        key: 'Id_task'
      }
    },
    id_subtask: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'subtask',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'task_subtask',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_subtask" },
          { name: "id_task" },
        ]
      },
      {
        name: "task_subtask_tasks_Id_task_fk",
        using: "BTREE",
        fields: [
          { name: "id_task" },
        ]
      },
    ]
  });
};
