const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('archives', {
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
    Task_hours: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    Task_creation: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    Task_end: {
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
    }
  }, {
    sequelize,
    tableName: 'archives',
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
      {
        name: "userIdUser",
        using: "BTREE",
        fields: [
          { name: "userIdUser" },
        ]
      },
    ]
  });
};
