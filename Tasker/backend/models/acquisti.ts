import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { acquisti_commesse, acquisti_commesseId } from './acquisti_commesse';
import type { commesse, commesseId } from './commesse';
import type { fatturazione_commesse, fatturazione_commesseId } from './fatturazione_commesse';
import type { monitoraggio_oda, monitoraggio_odaId } from './monitoraggio_oda';

export interface acquistiAttributes {
  id_acquisto: number;
  num_oda: string;
  data_ordine: string;
  rif_preventivo_fornitore: string;
  descrizione: string;
  data_consegna: string;
  id_anagrafica: number;
  id_operatore: number;
  operatore_ins: number;
  data_ins: Date;
  tipologia_oda?: 'esterno' | 'oda_fittizio';
}

export type acquistiPk = "id_acquisto";
export type acquistiId = acquisti[acquistiPk];
export type acquistiOptionalAttributes = "id_acquisto" | "num_oda" | "data_ordine" | "data_consegna" | "id_anagrafica" | "id_operatore" | "operatore_ins" | "data_ins" | "tipologia_oda";
export type acquistiCreationAttributes = Optional<acquistiAttributes, acquistiOptionalAttributes>;

export class acquisti extends Model<acquistiAttributes, acquistiCreationAttributes> implements acquistiAttributes {
  id_acquisto!: number;
  num_oda!: string;
  data_ordine!: string;
  rif_preventivo_fornitore!: string;
  descrizione!: string;
  data_consegna!: string;
  id_anagrafica!: number;
  id_operatore!: number;
  operatore_ins!: number;
  data_ins!: Date;
  tipologia_oda?: 'esterno' | 'oda_fittizio';

  // acquisti hasMany acquisti_commesse via id_acquisto
  acquisti_commesses!: acquisti_commesse[];
  getAcquisti_commesses!: Sequelize.HasManyGetAssociationsMixin<acquisti_commesse>;
  setAcquisti_commesses!: Sequelize.HasManySetAssociationsMixin<acquisti_commesse, acquisti_commesseId>;
  addAcquisti_commess!: Sequelize.HasManyAddAssociationMixin<acquisti_commesse, acquisti_commesseId>;
  addAcquisti_commesses!: Sequelize.HasManyAddAssociationsMixin<acquisti_commesse, acquisti_commesseId>;
  createAcquisti_commess!: Sequelize.HasManyCreateAssociationMixin<acquisti_commesse>;
  removeAcquisti_commess!: Sequelize.HasManyRemoveAssociationMixin<acquisti_commesse, acquisti_commesseId>;
  removeAcquisti_commesses!: Sequelize.HasManyRemoveAssociationsMixin<acquisti_commesse, acquisti_commesseId>;
  hasAcquisti_commess!: Sequelize.HasManyHasAssociationMixin<acquisti_commesse, acquisti_commesseId>;
  hasAcquisti_commesses!: Sequelize.HasManyHasAssociationsMixin<acquisti_commesse, acquisti_commesseId>;
  countAcquisti_commesses!: Sequelize.HasManyCountAssociationsMixin;
  // acquisti belongsToMany commesse via id_acquisto and id_commessa
  id_commessa_commesses!: commesse[];
  getId_commessa_commesses!: Sequelize.BelongsToManyGetAssociationsMixin<commesse>;
  setId_commessa_commesses!: Sequelize.BelongsToManySetAssociationsMixin<commesse, commesseId>;
  addId_commessa_commess!: Sequelize.BelongsToManyAddAssociationMixin<commesse, commesseId>;
  addId_commessa_commesses!: Sequelize.BelongsToManyAddAssociationsMixin<commesse, commesseId>;
  createId_commessa_commess!: Sequelize.BelongsToManyCreateAssociationMixin<commesse>;
  removeId_commessa_commess!: Sequelize.BelongsToManyRemoveAssociationMixin<commesse, commesseId>;
  removeId_commessa_commesses!: Sequelize.BelongsToManyRemoveAssociationsMixin<commesse, commesseId>;
  hasId_commessa_commess!: Sequelize.BelongsToManyHasAssociationMixin<commesse, commesseId>;
  hasId_commessa_commesses!: Sequelize.BelongsToManyHasAssociationsMixin<commesse, commesseId>;
  countId_commessa_commesses!: Sequelize.BelongsToManyCountAssociationsMixin;
  // acquisti belongsToMany commesse via id_oda and id_commessa
  id_commessa_commesse_monitoraggio_odas!: commesse[];
  getId_commessa_commesse_monitoraggio_odas!: Sequelize.BelongsToManyGetAssociationsMixin<commesse>;
  setId_commessa_commesse_monitoraggio_odas!: Sequelize.BelongsToManySetAssociationsMixin<commesse, commesseId>;
  addId_commessa_commesse_monitoraggio_oda!: Sequelize.BelongsToManyAddAssociationMixin<commesse, commesseId>;
  addId_commessa_commesse_monitoraggio_odas!: Sequelize.BelongsToManyAddAssociationsMixin<commesse, commesseId>;
  createId_commessa_commesse_monitoraggio_oda!: Sequelize.BelongsToManyCreateAssociationMixin<commesse>;
  removeId_commessa_commesse_monitoraggio_oda!: Sequelize.BelongsToManyRemoveAssociationMixin<commesse, commesseId>;
  removeId_commessa_commesse_monitoraggio_odas!: Sequelize.BelongsToManyRemoveAssociationsMixin<commesse, commesseId>;
  hasId_commessa_commesse_monitoraggio_oda!: Sequelize.BelongsToManyHasAssociationMixin<commesse, commesseId>;
  hasId_commessa_commesse_monitoraggio_odas!: Sequelize.BelongsToManyHasAssociationsMixin<commesse, commesseId>;
  countId_commessa_commesse_monitoraggio_odas!: Sequelize.BelongsToManyCountAssociationsMixin;
  // acquisti hasMany fatturazione_commesse via id_acquisto
  fatturazione_commesses!: fatturazione_commesse[];
  getFatturazione_commesses!: Sequelize.HasManyGetAssociationsMixin<fatturazione_commesse>;
  setFatturazione_commesses!: Sequelize.HasManySetAssociationsMixin<fatturazione_commesse, fatturazione_commesseId>;
  addFatturazione_commess!: Sequelize.HasManyAddAssociationMixin<fatturazione_commesse, fatturazione_commesseId>;
  addFatturazione_commesses!: Sequelize.HasManyAddAssociationsMixin<fatturazione_commesse, fatturazione_commesseId>;
  createFatturazione_commess!: Sequelize.HasManyCreateAssociationMixin<fatturazione_commesse>;
  removeFatturazione_commess!: Sequelize.HasManyRemoveAssociationMixin<fatturazione_commesse, fatturazione_commesseId>;
  removeFatturazione_commesses!: Sequelize.HasManyRemoveAssociationsMixin<fatturazione_commesse, fatturazione_commesseId>;
  hasFatturazione_commess!: Sequelize.HasManyHasAssociationMixin<fatturazione_commesse, fatturazione_commesseId>;
  hasFatturazione_commesses!: Sequelize.HasManyHasAssociationsMixin<fatturazione_commesse, fatturazione_commesseId>;
  countFatturazione_commesses!: Sequelize.HasManyCountAssociationsMixin;
  // acquisti hasMany monitoraggio_oda via id_oda
  monitoraggio_odas!: monitoraggio_oda[];
  getMonitoraggio_odas!: Sequelize.HasManyGetAssociationsMixin<monitoraggio_oda>;
  setMonitoraggio_odas!: Sequelize.HasManySetAssociationsMixin<monitoraggio_oda, monitoraggio_odaId>;
  addMonitoraggio_oda!: Sequelize.HasManyAddAssociationMixin<monitoraggio_oda, monitoraggio_odaId>;
  addMonitoraggio_odas!: Sequelize.HasManyAddAssociationsMixin<monitoraggio_oda, monitoraggio_odaId>;
  createMonitoraggio_oda!: Sequelize.HasManyCreateAssociationMixin<monitoraggio_oda>;
  removeMonitoraggio_oda!: Sequelize.HasManyRemoveAssociationMixin<monitoraggio_oda, monitoraggio_odaId>;
  removeMonitoraggio_odas!: Sequelize.HasManyRemoveAssociationsMixin<monitoraggio_oda, monitoraggio_odaId>;
  hasMonitoraggio_oda!: Sequelize.HasManyHasAssociationMixin<monitoraggio_oda, monitoraggio_odaId>;
  hasMonitoraggio_odas!: Sequelize.HasManyHasAssociationsMixin<monitoraggio_oda, monitoraggio_odaId>;
  countMonitoraggio_odas!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof acquisti {
    return acquisti.init({
    id_acquisto: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    num_oda: {
      type: DataTypes.STRING(45),
      allowNull: false,
      defaultValue: ""
    },
    data_ordine: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: "0000-00-00"
    },
    rif_preventivo_fornitore: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    descrizione: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    data_consegna: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: "0000-00-00"
    },
    id_anagrafica: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    id_operatore: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    operatore_ins: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    data_ins: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('current_timestamp')
    },
    tipologia_oda: {
      type: DataTypes.ENUM('esterno','oda_fittizio'),
      allowNull: true,
      defaultValue: "esterno"
    }
  }, {
    sequelize,
    tableName: 'acquisti',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_acquisto" },
        ]
      },
    ]
  });
  }
}
