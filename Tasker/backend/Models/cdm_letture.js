const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cdm_letture', {
    id_lettura: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    data: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    id_campo: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      references: {
        model: 'cdm_campi',
        key: 'id_campo'
      }
    },
    id_ana_condominio: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      references: {
        model: 'anagrafiche',
        key: 'id_anagrafica'
      }
    },
    lettura: {
      type: DataTypes.STRING(45),
      allowNull: false,
      defaultValue: ""
    },
    data_ins: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('current_timestamp')
    },
    stagione: {
      type: DataTypes.STRING(45),
      allowNull: false,
      defaultValue: ""
    },
    operatore_ins: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      references: {
        model: 'ana_operatori',
        key: 'id_operatore'
      }
    },
    note_extra: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'cdm_letture',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_lettura" },
        ]
      },
      {
        name: "FK_cdm_letture_1",
        using: "BTREE",
        fields: [
          { name: "id_campo" },
        ]
      },
      {
        name: "cdm_letture_ana_operatori_id_operatore_fk",
        using: "BTREE",
        fields: [
          { name: "operatore_ins" },
        ]
      },
      {
        name: "cdm_letture_anagrafiche_id_anagrafica_fk",
        using: "BTREE",
        fields: [
          { name: "id_ana_condominio" },
        ]
      },
    ]
  });
};
