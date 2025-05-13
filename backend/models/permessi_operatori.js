const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('permessi_operatori', {
    id_gruppo: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'gruppo_operatori',
        key: 'id_gruppo'
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
    }
  }, {
    sequelize,
    tableName: 'permessi_operatori',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_gruppo" },
          { name: "id_operatore" },
        ]
      },
      {
        name: "permessi_operatori_id_gruppo_id_operatore_unique",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_gruppo" },
          { name: "id_operatore" },
        ]
      },
      {
        name: "id_operatore",
        using: "BTREE",
        fields: [
          { name: "id_operatore" },
        ]
      },
      {
        name: "FK_permessi_operatori_1",
        using: "BTREE",
        fields: [
          { name: "id_gruppo" },
        ]
      },
    ]
  });
};
