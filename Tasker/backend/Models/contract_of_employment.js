const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('contract_of_employment', {
    Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Hourly_cost: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Percentage: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Id_user: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'users',
        key: 'Id_user'
      }
    }
  }, {
    sequelize,
    tableName: 'contract_of_employment',
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
        name: "Id_user",
        using: "BTREE",
        fields: [
          { name: "Id_user" },
        ]
      },
    ]
  });
};
