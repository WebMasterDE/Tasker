const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('provvigioni', {
    id_provvigione: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    id_operatore: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'ana_operatori',
        key: 'id_operatore'
      }
    },
    id_commessa: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    provvigione: {
      type: DataTypes.DECIMAL(4,1),
      allowNull: false,
      defaultValue: 0.0
    },
    premialita: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
      defaultValue: 0.00
    },
    prov_afatturare: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
      defaultValue: 0.00
    },
    data_afatturare: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    prov_fatturato: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
      defaultValue: 0.00
    },
    data_fatturato: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    prov_pagato: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
      defaultValue: 0.00
    },
    data_pagato: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    id_preventivo: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'provvigioni',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_provvigione" },
        ]
      },
      {
        name: "IN_id_commessa",
        using: "BTREE",
        fields: [
          { name: "id_commessa" },
        ]
      },
      {
        name: "provvigioni_preventivi_id_preventivo_fk",
        using: "BTREE",
        fields: [
          { name: "id_preventivo" },
        ]
      },
      {
        name: "provvigioni_ana_operatori_id_operatore_fk",
        using: "BTREE",
        fields: [
          { name: "id_operatore" },
        ]
      },
    ]
  });
};
