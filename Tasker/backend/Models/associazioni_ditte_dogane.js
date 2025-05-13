const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('associazioni_ditte_dogane', {
    id_ditta: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    id_committente: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'anagrafiche',
        key: 'id_anagrafica'
      }
    },
    id_cliente: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      references: {
        model: 'anagrafiche',
        key: 'id_anagrafica'
      }
    },
    anno: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'associazioni_ditte_dogane',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_ditta" },
          { name: "anno" },
        ]
      },
      {
        name: "associazioni_ditte_dogane_anagrafiche_id_anagrafica_fk",
        using: "BTREE",
        fields: [
          { name: "id_committente" },
        ]
      },
      {
        name: "associazioni_ditte_dogane_anagrafiche_id_anagrafica_fk_2",
        using: "BTREE",
        fields: [
          { name: "id_cliente" },
        ]
      },
    ]
  });
};
