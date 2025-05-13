const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cdm_associazioni', {
    id_associazione: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    id_ana_condominio: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    id_ana_referente: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    id_ana_manutentore: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    data_ins: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('current_timestamp')
    },
    operatore_ins: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'cdm_associazioni',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_associazione" },
        ]
      },
      {
        name: "cdm_associazioni_pk",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_ana_condominio" },
          { name: "id_ana_referente" },
          { name: "id_ana_manutentore" },
          { name: "data_ins" },
        ]
      },
      {
        name: "foreign_key_name",
        using: "BTREE",
        fields: [
          { name: "id_ana_condominio" },
        ]
      },
      {
        name: "foreign_key_name2",
        using: "BTREE",
        fields: [
          { name: "id_ana_referente" },
        ]
      },
      {
        name: "cdm_associazioni_anagrafiche_id_anagrafica_fk",
        using: "BTREE",
        fields: [
          { name: "id_ana_manutentore" },
        ]
      },
      {
        name: "cdm_associazioni_ana_operatori_id_operatore_fk",
        using: "BTREE",
        fields: [
          { name: "operatore_ins" },
        ]
      },
    ]
  });
};
