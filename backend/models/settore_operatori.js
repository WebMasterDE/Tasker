const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('settore_operatori', {
    id_settore: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'el_settori',
        key: 'id_settore'
      }
    },
    id_operatore: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'ana_operatori',
        key: 'id_operatore'
      }
    },
    data_da: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      primaryKey: true
    },
    data_a: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'settore_operatori',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_settore" },
          { name: "id_operatore" },
          { name: "data_da" },
          { name: "data_a" },
        ]
      },
      {
        name: "settore_operatori_id_settore_id_operatore_unique",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_settore" },
          { name: "id_operatore" },
        ]
      },
      {
        name: "settore_operatori_ana_operatori_id_operatore_fk",
        using: "BTREE",
        fields: [
          { name: "id_operatore" },
        ]
      },
      {
        name: "settore_operatori_el_settori_id_settore_fk",
        using: "BTREE",
        fields: [
          { name: "id_settore" },
        ]
      },
    ]
  });
};
