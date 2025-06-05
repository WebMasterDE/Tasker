import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { fatturazione_commesse, fatturazione_commesseId } from './fatturazione_commesse';

export interface fatturazioneAttributes {
  id_fattura: number;
  num_fattura: string;
  data_creazione: string;
  data_scadenza: string;
  id_anagrafica: number;
  note_extra1: string;
  note_extra2: string;
  tipo_fattura: number;
  operatore_ins: number;
  data_ins: Date;
}

export type fatturazionePk = "id_fattura";
export type fatturazioneId = fatturazione[fatturazionePk];
export type fatturazioneOptionalAttributes = "id_fattura" | "num_fattura" | "data_creazione" | "data_scadenza" | "id_anagrafica" | "tipo_fattura" | "operatore_ins" | "data_ins";
export type fatturazioneCreationAttributes = Optional<fatturazioneAttributes, fatturazioneOptionalAttributes>;

export class fatturazione extends Model<fatturazioneAttributes, fatturazioneCreationAttributes> implements fatturazioneAttributes {
  id_fattura!: number;
  num_fattura!: string;
  data_creazione!: string;
  data_scadenza!: string;
  id_anagrafica!: number;
  note_extra1!: string;
  note_extra2!: string;
  tipo_fattura!: number;
  operatore_ins!: number;
  data_ins!: Date;

  // fatturazione hasMany fatturazione_commesse via id_fattura
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

  static initModel(sequelize: Sequelize.Sequelize): typeof fatturazione {
    return fatturazione.init({
    id_fattura: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    num_fattura: {
      type: DataTypes.STRING(45),
      allowNull: false,
      defaultValue: ""
    },
    data_creazione: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: "0000-00-00"
    },
    data_scadenza: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: "0000-00-00"
    },
    id_anagrafica: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    note_extra1: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    note_extra2: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    tipo_fattura: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 1
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
    }
  }, {
    sequelize,
    tableName: 'fatturazione',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_fattura" },
        ]
      },
      {
        name: "id_fattura",
        using: "BTREE",
        fields: [
          { name: "id_fattura" },
        ]
      },
      {
        name: "id_anagrafica",
        using: "BTREE",
        fields: [
          { name: "id_anagrafica" },
        ]
      },
    ]
  });
  }
}
