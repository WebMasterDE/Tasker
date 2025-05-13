const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('monitoraggio_oda', {
    id_oda: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'acquisti',
        key: 'id_acquisto'
      }
    },
    id_commessa: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'commesse',
        key: 'id_commessa'
      }
    },
    data_inizio: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    data_fine: {
      type: DataTypes.DATEONLY,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'monitoraggio_oda',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_oda" },
          { name: "id_commessa" },
        ]
      },
      {
        name: "monitoraggio_oda_id_commessa_id_oda_unique",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_oda" },
          { name: "id_commessa" },
        ]
      },
      {
        name: "monitoraggio_oda_commesse_id_commessa_fk",
        using: "BTREE",
        fields: [
          { name: "id_commessa" },
        ]
      },
    ]
  });
};
