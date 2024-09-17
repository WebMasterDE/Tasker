const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tasks', {
    Id_task: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Task_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    Task_description: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    Task_end: {
      type: DataTypes.DATEONLY,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'tasks',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Id_task" },
        ]
      },
    ]
  });
};
