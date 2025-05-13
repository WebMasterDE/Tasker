const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('preventivi', {
    id_preventivo: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    cod_preventivo: {
      type: DataTypes.STRING(45),
      allowNull: false,
      unique: "preventivi_pk"
    },
    terzi: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    data_offerta: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    budget_offerta: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
      defaultValue: 0.00
    },
    unita_di_misura: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    oggetto: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    note_preventivo: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    id_classificazione: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    tipo_preventivo: {
      type: DataTypes.ENUM('int','ext'),
      allowNull: false,
      defaultValue: "ext"
    },
    id_referente_anagrafica: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      references: {
        model: 'anagrafiche',
        key: 'id_anagrafica'
      }
    },
    id_settore: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    tacito_rinnovo: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    id_operatore: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      references: {
        model: 'ana_operatori',
        key: 'id_operatore'
      }
    }
  }, {
    sequelize,
    tableName: 'preventivi',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_preventivo" },
        ]
      },
      {
        name: "preventivi_pk",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "cod_preventivo" },
        ]
      },
      {
        name: "FK_preventivi_1",
        using: "BTREE",
        fields: [
          { name: "id_classificazione" },
        ]
      },
      {
        name: "FK_preventivi_2",
        using: "BTREE",
        fields: [
          { name: "id_settore" },
        ]
      },
      {
        name: "preventivi_ana_operatori_id_operatore_fk",
        using: "BTREE",
        fields: [
          { name: "id_operatore" },
        ]
      },
      {
        name: "preventivi_anagrafiche_id_anagrafica_fk",
        using: "BTREE",
        fields: [
          { name: "id_referente_anagrafica" },
        ]
      },
    ]
  });
};
