import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { ana_tipologie, ana_tipologieId } from './ana_tipologie';
import type { associazioni_ditte_dogane, associazioni_ditte_doganeId } from './associazioni_ditte_dogane';
import type { cdm_competenze, cdm_competenzeId } from './cdm_competenze';
import type { cdm_letture, cdm_lettureId } from './cdm_letture';
import type { condomini, condominiCreationAttributes, condominiId } from './condomini';
import type { el_personas, el_personasId } from './el_personas';
import type { preventivi, preventiviId } from './preventivi';

export interface anagraficheAttributes {
  id_anagrafica: number;
  des: number;
  dem: number;
  nome: string;
  codice_diven?: string;
  codice_des?: string;
  codice_dem?: string;
  id_cdm?: number;
  indirizzo?: string;
  citta?: string;
  cap?: string;
  provincia?: string;
  indirizzo_extra?: string;
  paese?: string;
  mail?: string;
  id_tipologia: number;
  telefono?: string;
  fax?: string;
  piva_tax?: string;
  codice_fiscale?: string;
  note_extra?: string;
  cod_pec?: string;
  id_enumera?: string;
  codice?: string;
  id_personas?: number;
}

export type anagrafichePk = "id_anagrafica";
export type anagraficheId = anagrafiche[anagrafichePk];
export type anagraficheOptionalAttributes = "id_anagrafica" | "des" | "dem" | "codice_diven" | "codice_des" | "codice_dem" | "id_cdm" | "indirizzo" | "citta" | "cap" | "provincia" | "indirizzo_extra" | "paese" | "mail" | "telefono" | "fax" | "piva_tax" | "codice_fiscale" | "note_extra" | "cod_pec" | "id_enumera" | "codice" | "id_personas";
export type anagraficheCreationAttributes = Optional<anagraficheAttributes, anagraficheOptionalAttributes>;

export class anagrafiche extends Model<anagraficheAttributes, anagraficheCreationAttributes> implements anagraficheAttributes {
  id_anagrafica!: number;
  des!: number;
  dem!: number;
  nome!: string;
  codice_diven?: string;
  codice_des?: string;
  codice_dem?: string;
  id_cdm?: number;
  indirizzo?: string;
  citta?: string;
  cap?: string;
  provincia?: string;
  indirizzo_extra?: string;
  paese?: string;
  mail?: string;
  id_tipologia!: number;
  telefono?: string;
  fax?: string;
  piva_tax?: string;
  codice_fiscale?: string;
  note_extra?: string;
  cod_pec?: string;
  id_enumera?: string;
  codice?: string;
  id_personas?: number;

  // anagrafiche belongsTo ana_tipologie via id_tipologia
  id_tipologia_ana_tipologie!: ana_tipologie;
  getId_tipologia_ana_tipologie!: Sequelize.BelongsToGetAssociationMixin<ana_tipologie>;
  setId_tipologia_ana_tipologie!: Sequelize.BelongsToSetAssociationMixin<ana_tipologie, ana_tipologieId>;
  createId_tipologia_ana_tipologie!: Sequelize.BelongsToCreateAssociationMixin<ana_tipologie>;
  // anagrafiche hasMany associazioni_ditte_dogane via id_committente
  associazioni_ditte_doganes!: associazioni_ditte_dogane[];
  getAssociazioni_ditte_doganes!: Sequelize.HasManyGetAssociationsMixin<associazioni_ditte_dogane>;
  setAssociazioni_ditte_doganes!: Sequelize.HasManySetAssociationsMixin<associazioni_ditte_dogane, associazioni_ditte_doganeId>;
  addAssociazioni_ditte_dogane!: Sequelize.HasManyAddAssociationMixin<associazioni_ditte_dogane, associazioni_ditte_doganeId>;
  addAssociazioni_ditte_doganes!: Sequelize.HasManyAddAssociationsMixin<associazioni_ditte_dogane, associazioni_ditte_doganeId>;
  createAssociazioni_ditte_dogane!: Sequelize.HasManyCreateAssociationMixin<associazioni_ditte_dogane>;
  removeAssociazioni_ditte_dogane!: Sequelize.HasManyRemoveAssociationMixin<associazioni_ditte_dogane, associazioni_ditte_doganeId>;
  removeAssociazioni_ditte_doganes!: Sequelize.HasManyRemoveAssociationsMixin<associazioni_ditte_dogane, associazioni_ditte_doganeId>;
  hasAssociazioni_ditte_dogane!: Sequelize.HasManyHasAssociationMixin<associazioni_ditte_dogane, associazioni_ditte_doganeId>;
  hasAssociazioni_ditte_doganes!: Sequelize.HasManyHasAssociationsMixin<associazioni_ditte_dogane, associazioni_ditte_doganeId>;
  countAssociazioni_ditte_doganes!: Sequelize.HasManyCountAssociationsMixin;
  // anagrafiche hasMany associazioni_ditte_dogane via id_cliente
  id_cliente_associazioni_ditte_doganes!: associazioni_ditte_dogane[];
  getId_cliente_associazioni_ditte_doganes!: Sequelize.HasManyGetAssociationsMixin<associazioni_ditte_dogane>;
  setId_cliente_associazioni_ditte_doganes!: Sequelize.HasManySetAssociationsMixin<associazioni_ditte_dogane, associazioni_ditte_doganeId>;
  addId_cliente_associazioni_ditte_dogane!: Sequelize.HasManyAddAssociationMixin<associazioni_ditte_dogane, associazioni_ditte_doganeId>;
  addId_cliente_associazioni_ditte_doganes!: Sequelize.HasManyAddAssociationsMixin<associazioni_ditte_dogane, associazioni_ditte_doganeId>;
  createId_cliente_associazioni_ditte_dogane!: Sequelize.HasManyCreateAssociationMixin<associazioni_ditte_dogane>;
  removeId_cliente_associazioni_ditte_dogane!: Sequelize.HasManyRemoveAssociationMixin<associazioni_ditte_dogane, associazioni_ditte_doganeId>;
  removeId_cliente_associazioni_ditte_doganes!: Sequelize.HasManyRemoveAssociationsMixin<associazioni_ditte_dogane, associazioni_ditte_doganeId>;
  hasId_cliente_associazioni_ditte_dogane!: Sequelize.HasManyHasAssociationMixin<associazioni_ditte_dogane, associazioni_ditte_doganeId>;
  hasId_cliente_associazioni_ditte_doganes!: Sequelize.HasManyHasAssociationsMixin<associazioni_ditte_dogane, associazioni_ditte_doganeId>;
  countId_cliente_associazioni_ditte_doganes!: Sequelize.HasManyCountAssociationsMixin;
  // anagrafiche hasMany cdm_competenze via id_ana_letture
  cdm_competenzes!: cdm_competenze[];
  getCdm_competenzes!: Sequelize.HasManyGetAssociationsMixin<cdm_competenze>;
  setCdm_competenzes!: Sequelize.HasManySetAssociationsMixin<cdm_competenze, cdm_competenzeId>;
  addCdm_competenze!: Sequelize.HasManyAddAssociationMixin<cdm_competenze, cdm_competenzeId>;
  addCdm_competenzes!: Sequelize.HasManyAddAssociationsMixin<cdm_competenze, cdm_competenzeId>;
  createCdm_competenze!: Sequelize.HasManyCreateAssociationMixin<cdm_competenze>;
  removeCdm_competenze!: Sequelize.HasManyRemoveAssociationMixin<cdm_competenze, cdm_competenzeId>;
  removeCdm_competenzes!: Sequelize.HasManyRemoveAssociationsMixin<cdm_competenze, cdm_competenzeId>;
  hasCdm_competenze!: Sequelize.HasManyHasAssociationMixin<cdm_competenze, cdm_competenzeId>;
  hasCdm_competenzes!: Sequelize.HasManyHasAssociationsMixin<cdm_competenze, cdm_competenzeId>;
  countCdm_competenzes!: Sequelize.HasManyCountAssociationsMixin;
  // anagrafiche hasMany cdm_competenze via id_ana_fatt_letture
  id_ana_fatt_letture_cdm_competenzes!: cdm_competenze[];
  getId_ana_fatt_letture_cdm_competenzes!: Sequelize.HasManyGetAssociationsMixin<cdm_competenze>;
  setId_ana_fatt_letture_cdm_competenzes!: Sequelize.HasManySetAssociationsMixin<cdm_competenze, cdm_competenzeId>;
  addId_ana_fatt_letture_cdm_competenze!: Sequelize.HasManyAddAssociationMixin<cdm_competenze, cdm_competenzeId>;
  addId_ana_fatt_letture_cdm_competenzes!: Sequelize.HasManyAddAssociationsMixin<cdm_competenze, cdm_competenzeId>;
  createId_ana_fatt_letture_cdm_competenze!: Sequelize.HasManyCreateAssociationMixin<cdm_competenze>;
  removeId_ana_fatt_letture_cdm_competenze!: Sequelize.HasManyRemoveAssociationMixin<cdm_competenze, cdm_competenzeId>;
  removeId_ana_fatt_letture_cdm_competenzes!: Sequelize.HasManyRemoveAssociationsMixin<cdm_competenze, cdm_competenzeId>;
  hasId_ana_fatt_letture_cdm_competenze!: Sequelize.HasManyHasAssociationMixin<cdm_competenze, cdm_competenzeId>;
  hasId_ana_fatt_letture_cdm_competenzes!: Sequelize.HasManyHasAssociationsMixin<cdm_competenze, cdm_competenzeId>;
  countId_ana_fatt_letture_cdm_competenzes!: Sequelize.HasManyCountAssociationsMixin;
  // anagrafiche hasMany cdm_competenze via id_ana_bollette
  id_ana_bollette_cdm_competenzes!: cdm_competenze[];
  getId_ana_bollette_cdm_competenzes!: Sequelize.HasManyGetAssociationsMixin<cdm_competenze>;
  setId_ana_bollette_cdm_competenzes!: Sequelize.HasManySetAssociationsMixin<cdm_competenze, cdm_competenzeId>;
  addId_ana_bollette_cdm_competenze!: Sequelize.HasManyAddAssociationMixin<cdm_competenze, cdm_competenzeId>;
  addId_ana_bollette_cdm_competenzes!: Sequelize.HasManyAddAssociationsMixin<cdm_competenze, cdm_competenzeId>;
  createId_ana_bollette_cdm_competenze!: Sequelize.HasManyCreateAssociationMixin<cdm_competenze>;
  removeId_ana_bollette_cdm_competenze!: Sequelize.HasManyRemoveAssociationMixin<cdm_competenze, cdm_competenzeId>;
  removeId_ana_bollette_cdm_competenzes!: Sequelize.HasManyRemoveAssociationsMixin<cdm_competenze, cdm_competenzeId>;
  hasId_ana_bollette_cdm_competenze!: Sequelize.HasManyHasAssociationMixin<cdm_competenze, cdm_competenzeId>;
  hasId_ana_bollette_cdm_competenzes!: Sequelize.HasManyHasAssociationsMixin<cdm_competenze, cdm_competenzeId>;
  countId_ana_bollette_cdm_competenzes!: Sequelize.HasManyCountAssociationsMixin;
  // anagrafiche hasMany cdm_competenze via id_ana_fatt_bollette
  id_ana_fatt_bollette_cdm_competenzes!: cdm_competenze[];
  getId_ana_fatt_bollette_cdm_competenzes!: Sequelize.HasManyGetAssociationsMixin<cdm_competenze>;
  setId_ana_fatt_bollette_cdm_competenzes!: Sequelize.HasManySetAssociationsMixin<cdm_competenze, cdm_competenzeId>;
  addId_ana_fatt_bollette_cdm_competenze!: Sequelize.HasManyAddAssociationMixin<cdm_competenze, cdm_competenzeId>;
  addId_ana_fatt_bollette_cdm_competenzes!: Sequelize.HasManyAddAssociationsMixin<cdm_competenze, cdm_competenzeId>;
  createId_ana_fatt_bollette_cdm_competenze!: Sequelize.HasManyCreateAssociationMixin<cdm_competenze>;
  removeId_ana_fatt_bollette_cdm_competenze!: Sequelize.HasManyRemoveAssociationMixin<cdm_competenze, cdm_competenzeId>;
  removeId_ana_fatt_bollette_cdm_competenzes!: Sequelize.HasManyRemoveAssociationsMixin<cdm_competenze, cdm_competenzeId>;
  hasId_ana_fatt_bollette_cdm_competenze!: Sequelize.HasManyHasAssociationMixin<cdm_competenze, cdm_competenzeId>;
  hasId_ana_fatt_bollette_cdm_competenzes!: Sequelize.HasManyHasAssociationsMixin<cdm_competenze, cdm_competenzeId>;
  countId_ana_fatt_bollette_cdm_competenzes!: Sequelize.HasManyCountAssociationsMixin;
  // anagrafiche hasMany cdm_competenze via id_ana_condominio
  id_ana_condominio_cdm_competenzes!: cdm_competenze[];
  getId_ana_condominio_cdm_competenzes!: Sequelize.HasManyGetAssociationsMixin<cdm_competenze>;
  setId_ana_condominio_cdm_competenzes!: Sequelize.HasManySetAssociationsMixin<cdm_competenze, cdm_competenzeId>;
  addId_ana_condominio_cdm_competenze!: Sequelize.HasManyAddAssociationMixin<cdm_competenze, cdm_competenzeId>;
  addId_ana_condominio_cdm_competenzes!: Sequelize.HasManyAddAssociationsMixin<cdm_competenze, cdm_competenzeId>;
  createId_ana_condominio_cdm_competenze!: Sequelize.HasManyCreateAssociationMixin<cdm_competenze>;
  removeId_ana_condominio_cdm_competenze!: Sequelize.HasManyRemoveAssociationMixin<cdm_competenze, cdm_competenzeId>;
  removeId_ana_condominio_cdm_competenzes!: Sequelize.HasManyRemoveAssociationsMixin<cdm_competenze, cdm_competenzeId>;
  hasId_ana_condominio_cdm_competenze!: Sequelize.HasManyHasAssociationMixin<cdm_competenze, cdm_competenzeId>;
  hasId_ana_condominio_cdm_competenzes!: Sequelize.HasManyHasAssociationsMixin<cdm_competenze, cdm_competenzeId>;
  countId_ana_condominio_cdm_competenzes!: Sequelize.HasManyCountAssociationsMixin;
  // anagrafiche hasMany cdm_letture via id_ana_condominio
  cdm_lettures!: cdm_letture[];
  getCdm_lettures!: Sequelize.HasManyGetAssociationsMixin<cdm_letture>;
  setCdm_lettures!: Sequelize.HasManySetAssociationsMixin<cdm_letture, cdm_lettureId>;
  addCdm_letture!: Sequelize.HasManyAddAssociationMixin<cdm_letture, cdm_lettureId>;
  addCdm_lettures!: Sequelize.HasManyAddAssociationsMixin<cdm_letture, cdm_lettureId>;
  createCdm_letture!: Sequelize.HasManyCreateAssociationMixin<cdm_letture>;
  removeCdm_letture!: Sequelize.HasManyRemoveAssociationMixin<cdm_letture, cdm_lettureId>;
  removeCdm_lettures!: Sequelize.HasManyRemoveAssociationsMixin<cdm_letture, cdm_lettureId>;
  hasCdm_letture!: Sequelize.HasManyHasAssociationMixin<cdm_letture, cdm_lettureId>;
  hasCdm_lettures!: Sequelize.HasManyHasAssociationsMixin<cdm_letture, cdm_lettureId>;
  countCdm_lettures!: Sequelize.HasManyCountAssociationsMixin;
  // anagrafiche hasOne condomini via id_ana_condominio
  condomini!: condomini;
  getCondomini!: Sequelize.HasOneGetAssociationMixin<condomini>;
  setCondomini!: Sequelize.HasOneSetAssociationMixin<condomini, condominiId>;
  createCondomini!: Sequelize.HasOneCreateAssociationMixin<condomini>;
  // anagrafiche hasMany preventivi via id_referente_anagrafica
  preventivis!: preventivi[];
  getPreventivis!: Sequelize.HasManyGetAssociationsMixin<preventivi>;
  setPreventivis!: Sequelize.HasManySetAssociationsMixin<preventivi, preventiviId>;
  addPreventivi!: Sequelize.HasManyAddAssociationMixin<preventivi, preventiviId>;
  addPreventivis!: Sequelize.HasManyAddAssociationsMixin<preventivi, preventiviId>;
  createPreventivi!: Sequelize.HasManyCreateAssociationMixin<preventivi>;
  removePreventivi!: Sequelize.HasManyRemoveAssociationMixin<preventivi, preventiviId>;
  removePreventivis!: Sequelize.HasManyRemoveAssociationsMixin<preventivi, preventiviId>;
  hasPreventivi!: Sequelize.HasManyHasAssociationMixin<preventivi, preventiviId>;
  hasPreventivis!: Sequelize.HasManyHasAssociationsMixin<preventivi, preventiviId>;
  countPreventivis!: Sequelize.HasManyCountAssociationsMixin;
  // anagrafiche belongsTo el_personas via id_personas
  id_personas_el_persona!: el_personas;
  getId_personas_el_persona!: Sequelize.BelongsToGetAssociationMixin<el_personas>;
  setId_personas_el_persona!: Sequelize.BelongsToSetAssociationMixin<el_personas, el_personasId>;
  createId_personas_el_persona!: Sequelize.BelongsToCreateAssociationMixin<el_personas>;

  static initModel(sequelize: Sequelize.Sequelize): typeof anagrafiche {
    return anagrafiche.init({
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
  }
}
