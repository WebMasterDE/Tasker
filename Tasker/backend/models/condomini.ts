import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { anagrafiche, anagraficheId } from './anagrafiche';
import type { cdm_marche, cdm_marcheId } from './cdm_marche';
import type { marche_sim, marche_simId } from './marche_sim';
import type { metodi_lettura, metodi_letturaId } from './metodi_lettura';
import type { storico_ricariche_sim, storico_ricariche_simId } from './storico_ricariche_sim';

export interface condominiAttributes {
  id_condominio: number;
  id_ana_condominio: number;
  unita: number;
  radiatori: number;
  id_marca?: number;
  data_fine_bilancio?: string;
  acs: '0' | '1';
  portale: '0' | '1';
  redattore_uni?: '0' | '1' | '2';
  note_extra?: string;
  disp_redattore_uni: '0' | '1';
  superficie: number;
  termoautonomo?: 'si' | 'no';
  tipo_impianto?: 'centralizzato_s_r' | 'riscaldamento+ACS' | 'autonomo' | 'centralizzato_generico';
  gian_note: string;
  mese_inizio_stagione: number;
  mese_fine_stagione: number;
  abilitato: number;
  riscaldamento: number;
  raffrescamento: number;
  acqua_calda_san: number;
  acqua_fredda_san: number;
  consumi_elettrici: number;
  anno_installazione_ripartitore?: string;
  centralina?: '0' | '1' | '2';
  info_utili?: number;
  metodo_lettura?: number;
  link_portale?: string;
  utente?: string;
  password?: string;
  marca_SIM?: number;
  codice_sim?: string;
  letture_automatiche_riscaldamento: number;
  letture_automatiche_acqua_fredda_sanitaria: number;
  letture_automatiche_acqua_calda_sanitaria: number;
  letture_automatiche_raffrescamento: number;
  mese_inizio_stagione_raffr: number;
  mese_fine_stagione_raffr: number;
  mese_inizio_stagione_acqua: number;
  mese_fine_stagione_acqua: number;
  superbonus: number;
}

export type condominiPk = "id_condominio";
export type condominiId = condomini[condominiPk];
export type condominiOptionalAttributes = "id_condominio" | "id_ana_condominio" | "unita" | "radiatori" | "id_marca" | "data_fine_bilancio" | "acs" | "portale" | "redattore_uni" | "note_extra" | "disp_redattore_uni" | "superficie" | "termoautonomo" | "tipo_impianto" | "gian_note" | "mese_inizio_stagione" | "mese_fine_stagione" | "abilitato" | "riscaldamento" | "raffrescamento" | "acqua_calda_san" | "acqua_fredda_san" | "consumi_elettrici" | "anno_installazione_ripartitore" | "centralina" | "info_utili" | "metodo_lettura" | "link_portale" | "utente" | "password" | "marca_SIM" | "codice_sim" | "letture_automatiche_riscaldamento" | "letture_automatiche_acqua_fredda_sanitaria" | "letture_automatiche_acqua_calda_sanitaria" | "letture_automatiche_raffrescamento" | "mese_inizio_stagione_raffr" | "mese_fine_stagione_raffr" | "mese_inizio_stagione_acqua" | "mese_fine_stagione_acqua" | "superbonus";
export type condominiCreationAttributes = Optional<condominiAttributes, condominiOptionalAttributes>;

export class condomini extends Model<condominiAttributes, condominiCreationAttributes> implements condominiAttributes {
  id_condominio!: number;
  id_ana_condominio!: number;
  unita!: number;
  radiatori!: number;
  id_marca?: number;
  data_fine_bilancio?: string;
  acs!: '0' | '1';
  portale!: '0' | '1';
  redattore_uni?: '0' | '1' | '2';
  note_extra?: string;
  disp_redattore_uni!: '0' | '1';
  superficie!: number;
  termoautonomo?: 'si' | 'no';
  tipo_impianto?: 'centralizzato_s_r' | 'riscaldamento+ACS' | 'autonomo' | 'centralizzato_generico';
  gian_note!: string;
  mese_inizio_stagione!: number;
  mese_fine_stagione!: number;
  abilitato!: number;
  riscaldamento!: number;
  raffrescamento!: number;
  acqua_calda_san!: number;
  acqua_fredda_san!: number;
  consumi_elettrici!: number;
  anno_installazione_ripartitore?: string;
  centralina?: '0' | '1' | '2';
  info_utili?: number;
  metodo_lettura?: number;
  link_portale?: string;
  utente?: string;
  password?: string;
  marca_SIM?: number;
  codice_sim?: string;
  letture_automatiche_riscaldamento!: number;
  letture_automatiche_acqua_fredda_sanitaria!: number;
  letture_automatiche_acqua_calda_sanitaria!: number;
  letture_automatiche_raffrescamento!: number;
  mese_inizio_stagione_raffr!: number;
  mese_fine_stagione_raffr!: number;
  mese_inizio_stagione_acqua!: number;
  mese_fine_stagione_acqua!: number;
  superbonus!: number;

  // condomini belongsTo anagrafiche via id_ana_condominio
  id_ana_condominio_anagrafiche!: anagrafiche;
  getId_ana_condominio_anagrafiche!: Sequelize.BelongsToGetAssociationMixin<anagrafiche>;
  setId_ana_condominio_anagrafiche!: Sequelize.BelongsToSetAssociationMixin<anagrafiche, anagraficheId>;
  createId_ana_condominio_anagrafiche!: Sequelize.BelongsToCreateAssociationMixin<anagrafiche>;
  // condomini belongsTo cdm_marche via id_marca
  id_marca_cdm_marche!: cdm_marche;
  getId_marca_cdm_marche!: Sequelize.BelongsToGetAssociationMixin<cdm_marche>;
  setId_marca_cdm_marche!: Sequelize.BelongsToSetAssociationMixin<cdm_marche, cdm_marcheId>;
  createId_marca_cdm_marche!: Sequelize.BelongsToCreateAssociationMixin<cdm_marche>;
  // condomini hasMany storico_ricariche_sim via id_condominio
  storico_ricariche_sims!: storico_ricariche_sim[];
  getStorico_ricariche_sims!: Sequelize.HasManyGetAssociationsMixin<storico_ricariche_sim>;
  setStorico_ricariche_sims!: Sequelize.HasManySetAssociationsMixin<storico_ricariche_sim, storico_ricariche_simId>;
  addStorico_ricariche_sim!: Sequelize.HasManyAddAssociationMixin<storico_ricariche_sim, storico_ricariche_simId>;
  addStorico_ricariche_sims!: Sequelize.HasManyAddAssociationsMixin<storico_ricariche_sim, storico_ricariche_simId>;
  createStorico_ricariche_sim!: Sequelize.HasManyCreateAssociationMixin<storico_ricariche_sim>;
  removeStorico_ricariche_sim!: Sequelize.HasManyRemoveAssociationMixin<storico_ricariche_sim, storico_ricariche_simId>;
  removeStorico_ricariche_sims!: Sequelize.HasManyRemoveAssociationsMixin<storico_ricariche_sim, storico_ricariche_simId>;
  hasStorico_ricariche_sim!: Sequelize.HasManyHasAssociationMixin<storico_ricariche_sim, storico_ricariche_simId>;
  hasStorico_ricariche_sims!: Sequelize.HasManyHasAssociationsMixin<storico_ricariche_sim, storico_ricariche_simId>;
  countStorico_ricariche_sims!: Sequelize.HasManyCountAssociationsMixin;
  // condomini belongsTo marche_sim via marca_SIM
  marca_SIM_marche_sim!: marche_sim;
  getMarca_SIM_marche_sim!: Sequelize.BelongsToGetAssociationMixin<marche_sim>;
  setMarca_SIM_marche_sim!: Sequelize.BelongsToSetAssociationMixin<marche_sim, marche_simId>;
  createMarca_SIM_marche_sim!: Sequelize.BelongsToCreateAssociationMixin<marche_sim>;
  // condomini belongsTo metodi_lettura via metodo_lettura
  metodo_lettura_metodi_lettura!: metodi_lettura;
  getMetodo_lettura_metodi_lettura!: Sequelize.BelongsToGetAssociationMixin<metodi_lettura>;
  setMetodo_lettura_metodi_lettura!: Sequelize.BelongsToSetAssociationMixin<metodi_lettura, metodi_letturaId>;
  createMetodo_lettura_metodi_lettura!: Sequelize.BelongsToCreateAssociationMixin<metodi_lettura>;

  static initModel(sequelize: Sequelize.Sequelize): typeof condomini {
    return condomini.init({
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
  }
}
