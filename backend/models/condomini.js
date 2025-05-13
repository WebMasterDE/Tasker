const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('condomini', {
    id_condominio: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    id_ana_condominio: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      references: {
        model: 'anagrafiche',
        key: 'id_anagrafica'
      },
      unique: "condomini_ibfk_1"
    },
    unita: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    radiatori: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    id_marca: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      references: {
        model: 'cdm_marche',
        key: 'id_marca'
      }
    },
    data_fine_bilancio: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    acs: {
      type: DataTypes.ENUM('0','1'),
      allowNull: false,
      defaultValue: "0"
    },
    portale: {
      type: DataTypes.ENUM('0','1'),
      allowNull: false,
      defaultValue: "0"
    },
    redattore_uni: {
      type: DataTypes.ENUM('0','1','2'),
      allowNull: true
    },
    note_extra: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    disp_redattore_uni: {
      type: DataTypes.ENUM('0','1'),
      allowNull: false,
      defaultValue: "0"
    },
    superficie: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
      defaultValue: 0.00
    },
    termoautonomo: {
      type: DataTypes.ENUM('si','no'),
      allowNull: true
    },
    tipo_impianto: {
      type: DataTypes.ENUM('centralizzato_s_r','riscaldamento+ACS','autonomo','centralizzato_generico'),
      allowNull: true
    },
    gian_note: {
      type: DataTypes.STRING(45),
      allowNull: false,
      defaultValue: ""
    },
    mese_inizio_stagione: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 10
    },
    mese_fine_stagione: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 4
    },
    abilitato: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0,
      comment: "per portale condominio"
    },
    riscaldamento: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    },
    raffrescamento: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    acqua_calda_san: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    acqua_fredda_san: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    consumi_elettrici: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    anno_installazione_ripartitore: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    centralina: {
      type: DataTypes.ENUM('0','1','2'),
      allowNull: true
    },
    info_utili: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    metodo_lettura: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      references: {
        model: 'metodi_lettura',
        key: 'id'
      }
    },
    link_portale: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    utente: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    password: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    marca_SIM: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      references: {
        model: 'marche_sim',
        key: 'id'
      }
    },
    codice_sim: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    letture_automatiche_riscaldamento: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    letture_automatiche_acqua_fredda_sanitaria: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    letture_automatiche_acqua_calda_sanitaria: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    letture_automatiche_raffrescamento: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    mese_inizio_stagione_raffr: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 5
    },
    mese_fine_stagione_raffr: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 9
    },
    mese_inizio_stagione_acqua: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    },
    mese_fine_stagione_acqua: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 12
    },
    superbonus: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'condomini',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_condominio" },
        ]
      },
      {
        name: "condomini_ibfk_1",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_ana_condominio" },
        ]
      },
      {
        name: "condomini_pk",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_ana_condominio" },
        ]
      },
      {
        name: "Index_2",
        using: "BTREE",
        fields: [
          { name: "id_ana_condominio" },
        ]
      },
      {
        name: "condomini_cdm_marche_id_marca_fk",
        using: "BTREE",
        fields: [
          { name: "id_marca" },
        ]
      },
      {
        name: "metodi_lettura_fk",
        using: "BTREE",
        fields: [
          { name: "metodo_lettura" },
        ]
      },
      {
        name: "marche_sim_fk",
        using: "BTREE",
        fields: [
          { name: "marca_SIM" },
        ]
      },
    ]
  });
};
