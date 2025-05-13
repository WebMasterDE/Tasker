const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('acquisti_commesse', {
    id_acquisto: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true,
      references: {
        model: 'acquisti',
        key: 'id_acquisto'
      }
    },
    id_commessa: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true,
      references: {
        model: 'commesse',
        key: 'id_commessa'
      }
    },
    importo_acquisto: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
      defaultValue: 0.00
    }
  }, {
    sequelize,
    tableName: 'acquisti_commesse',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_acquisto" },
          { name: "id_commessa" },
        ]
      },
      {
        name: "acquisti_commesse_id_commessa_id_acquisto_unique",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_acquisto" },
          { name: "id_commessa" },
        ]
      },
      {
        name: "FK_acquisti_commesse_1",
        using: "BTREE",
        fields: [
          { name: "id_acquisto" },
        ]
      },
      {
        name: "FK_acquisti_commesse_2",
        using: "BTREE",
        fields: [
          { name: "id_commessa" },
        ]
      },
    ]
  });
};
