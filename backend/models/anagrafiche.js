const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('anagrafiche', {
    id_anagrafica: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    des: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    dem: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    nome: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    codice_diven: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    codice_des: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    codice_dem: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    id_cdm: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      unique: "anagrafiche_pk"
    },
    indirizzo: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    citta: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    cap: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    provincia: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    indirizzo_extra: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    paese: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    mail: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    id_tipologia: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'ana_tipologie',
        key: 'id_tipologia'
      }
    },
    telefono: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    fax: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    piva_tax: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    codice_fiscale: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    note_extra: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    cod_pec: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    id_enumera: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    codice: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    id_personas: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      references: {
        model: 'el_personas',
        key: 'id_personas'
      }
    }
  }, {
    sequelize,
    tableName: 'anagrafiche',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_anagrafica" },
        ]
      },
      {
        name: "anagrafiche_pk",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_cdm" },
        ]
      },
      {
        name: "FK_anagrafiche_1",
        using: "BTREE",
        fields: [
          { name: "id_tipologia" },
        ]
      },
      {
        name: "anagrafiche_el_personas_id_personas_fk",
        using: "BTREE",
        fields: [
          { name: "id_personas" },
        ]
      },
    ]
  });
};
