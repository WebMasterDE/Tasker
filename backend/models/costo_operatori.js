const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('costo_operatori', {
    id_costo: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    costo_orario: {
      type: DataTypes.DECIMAL(5,2),
      allowNull: false,
      defaultValue: 0.00
    },
    data_da: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    data_a: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    id_operatore: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'ana_operatori',
        key: 'id_operatore'
      }
    }
  }, {
    sequelize,
    tableName: 'costo_operatori',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_costo" },
        ]
      },
      {
        name: "FK_costo_operatori_1",
        using: "BTREE",
        fields: [
          { name: "id_operatore" },
        ]
      },
    ]
  });
};
