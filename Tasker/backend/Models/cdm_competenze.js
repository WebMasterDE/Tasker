const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cdm_competenze', {
    id_competenza: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    data_ins: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('current_timestamp')
    },
    id_ana_letture: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      references: {
        model: 'anagrafiche',
        key: 'id_anagrafica'
      }
    },
    id_ana_fatt_letture: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      references: {
        model: 'anagrafiche',
        key: 'id_anagrafica'
      }
    },
    id_ana_bollette: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      references: {
        model: 'anagrafiche',
        key: 'id_anagrafica'
      }
    },
    id_ana_fatt_bollette: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      references: {
        model: 'anagrafiche',
        key: 'id_anagrafica'
      }
    },
    id_ana_condominio: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      references: {
        model: 'anagrafiche',
        key: 'id_anagrafica'
      }
    }
  }, {
    sequelize,
    tableName: 'cdm_competenze',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_competenza" },
        ]
      },
      {
        name: "cdm_competenze_anagrafiche_id_anagrafica_fk",
        using: "BTREE",
        fields: [
          { name: "id_ana_letture" },
        ]
      },
      {
        name: "cdm_competenze_anagrafiche_id_anagrafica_fk2",
        using: "BTREE",
        fields: [
          { name: "id_ana_fatt_letture" },
        ]
      },
      {
        name: "cdm_competenze_anagrafiche_id_anagrafica_fk3",
        using: "BTREE",
        fields: [
          { name: "id_ana_bollette" },
        ]
      },
      {
        name: "cdm_competenze_anagrafiche_id_anagrafica_fk4",
        using: "BTREE",
        fields: [
          { name: "id_ana_fatt_bollette" },
        ]
      },
      {
        name: "cdm_competenze_anagrafiche_id_anagrafica_fk5",
        using: "BTREE",
        fields: [
          { name: "id_ana_condominio" },
        ]
      },
    ]
  });
};
