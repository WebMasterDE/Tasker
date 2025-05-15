import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { acquisti, acquistiId } from './acquisti';
import type { commesse, commesseId } from './commesse';
import type { fatturazione, fatturazioneId } from './fatturazione';
import type { task_fatturazione, task_fatturazioneId } from './task_fatturazione';

export interface fatturazione_commesseAttributes {
  id: number;
  id_fattura: number;
  id_commessa: number;
  importo_fatturato: number;
  id_acquisto?: number;
  id_task?: number;
}

export type fatturazione_commessePk = "id";
export type fatturazione_commesseId = fatturazione_commesse[fatturazione_commessePk];
export type fatturazione_commesseOptionalAttributes = "id" | "id_fattura" | "id_commessa" | "importo_fatturato" | "id_acquisto" | "id_task";
export type fatturazione_commesseCreationAttributes = Optional<fatturazione_commesseAttributes, fatturazione_commesseOptionalAttributes>;

export class fatturazione_commesse extends Model<fatturazione_commesseAttributes, fatturazione_commesseCreationAttributes> implements fatturazione_commesseAttributes {
  id!: number;
  id_fattura!: number;
  id_commessa!: number;
  importo_fatturato!: number;
  id_acquisto?: number;
  id_task?: number;

  // fatturazione_commesse belongsTo acquisti via id_acquisto
  id_acquisto_acquisti!: acquisti;
  getId_acquisto_acquisti!: Sequelize.BelongsToGetAssociationMixin<acquisti>;
  setId_acquisto_acquisti!: Sequelize.BelongsToSetAssociationMixin<acquisti, acquistiId>;
  createId_acquisto_acquisti!: Sequelize.BelongsToCreateAssociationMixin<acquisti>;
  // fatturazione_commesse belongsTo commesse via id_commessa
  id_commessa_commesse!: commesse;
  getId_commessa_commesse!: Sequelize.BelongsToGetAssociationMixin<commesse>;
  setId_commessa_commesse!: Sequelize.BelongsToSetAssociationMixin<commesse, commesseId>;
  createId_commessa_commesse!: Sequelize.BelongsToCreateAssociationMixin<commesse>;
  // fatturazione_commesse belongsTo fatturazione via id_fattura
  id_fattura_fatturazione!: fatturazione;
  getId_fattura_fatturazione!: Sequelize.BelongsToGetAssociationMixin<fatturazione>;
  setId_fattura_fatturazione!: Sequelize.BelongsToSetAssociationMixin<fatturazione, fatturazioneId>;
  createId_fattura_fatturazione!: Sequelize.BelongsToCreateAssociationMixin<fatturazione>;
  // fatturazione_commesse belongsTo task_fatturazione via id_task
  id_task_task_fatturazione!: task_fatturazione;
  getId_task_task_fatturazione!: Sequelize.BelongsToGetAssociationMixin<task_fatturazione>;
  setId_task_task_fatturazione!: Sequelize.BelongsToSetAssociationMixin<task_fatturazione, task_fatturazioneId>;
  createId_task_task_fatturazione!: Sequelize.BelongsToCreateAssociationMixin<task_fatturazione>;

  static initModel(sequelize: Sequelize.Sequelize): typeof fatturazione_commesse {
    return fatturazione_commesse.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_fattura: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      references: {
        model: 'fatturazione',
        key: 'id_fattura'
      }
    },
    id_commessa: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      references: {
        model: 'commesse',
        key: 'id_commessa'
      }
    },
    importo_fatturato: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
      defaultValue: 0.00
    },
    id_acquisto: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      references: {
        model: 'acquisti',
        key: 'id_acquisto'
      }
    },
    id_task: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      references: {
        model: 'task_fatturazione',
        key: 'id_task'
      }
    }
  }, {
    sequelize,
    tableName: 'fatturazione_commesse',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "FK_fatturazione_commesse_1",
        using: "BTREE",
        fields: [
          { name: "id_fattura" },
        ]
      },
      {
        name: "FK_fatturazione_commesse_2",
        using: "BTREE",
        fields: [
          { name: "id_commessa" },
        ]
      },
      {
        name: "FK_fatturazione_commesse_3",
        using: "BTREE",
        fields: [
          { name: "id_acquisto" },
        ]
      },
      {
        name: "FK_fatturazione_commesse_4",
        using: "BTREE",
        fields: [
          { name: "id_commessa" },
          { name: "id_task" },
        ]
      },
      {
        name: "fatturazione_commesse_task_fatturazione_id_task_fk",
        using: "BTREE",
        fields: [
          { name: "id_task" },
        ]
      },
    ]
  });
  }
}
