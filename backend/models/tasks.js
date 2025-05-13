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
      allowNull: true
    },
    id_commessa: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    Task_description: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    Task_creation: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    color: {
      type: DataTypes.STRING(25),
      allowNull: true
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
