const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('overtime', {
    Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Hours: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    Date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    Id_user: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Id_hour: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'hours',
        key: 'Id_hour'
      }
    }
  }, {
    sequelize,
    tableName: 'overtime',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Id" },
        ]
      },
      {
        name: "Overtime___fk",
        using: "BTREE",
        fields: [
          { name: "Id_user" },
        ]
      },
      {
        name: "overtime_hours_Id_hour_fk",
        using: "BTREE",
        fields: [
          { name: "Id_hour" },
        ]
      },
    ]
  });
};
