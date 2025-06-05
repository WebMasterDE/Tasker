import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { commesse, commesseId } from './commesse';
import type { el_ruoli, el_ruoliId } from './el_ruoli';

export interface operatori_taskAttributes {
  id_operatore: number;
  id_ruolo: number;
  id_commessa: number;
  id_task: number;
}

export type operatori_taskPk = "id_operatore" | "id_commessa" | "id_task";
export type operatori_taskId = operatori_task[operatori_taskPk];
export type operatori_taskCreationAttributes = operatori_taskAttributes;

export class operatori_task extends Model<operatori_taskAttributes, operatori_taskCreationAttributes> implements operatori_taskAttributes {
  id_operatore!: number;
  id_ruolo!: number;
  id_commessa!: number;
  id_task!: number;

  // operatori_task belongsTo commesse via id_commessa
  id_commessa_commesse!: commesse;
  getId_commessa_commesse!: Sequelize.BelongsToGetAssociationMixin<commesse>;
  setId_commessa_commesse!: Sequelize.BelongsToSetAssociationMixin<commesse, commesseId>;
  createId_commessa_commesse!: Sequelize.BelongsToCreateAssociationMixin<commesse>;
  // operatori_task belongsTo el_ruoli via id_ruolo
  id_ruolo_el_ruoli!: el_ruoli;
  getId_ruolo_el_ruoli!: Sequelize.BelongsToGetAssociationMixin<el_ruoli>;
  setId_ruolo_el_ruoli!: Sequelize.BelongsToSetAssociationMixin<el_ruoli, el_ruoliId>;
  createId_ruolo_el_ruoli!: Sequelize.BelongsToCreateAssociationMixin<el_ruoli>;

  static initModel(sequelize: Sequelize.Sequelize): typeof operatori_task {
    return operatori_task.init({
    id_operatore: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    id_ruolo: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'el_ruoli',
        key: 'id_ruolo'
      }
    },
    id_commessa: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'commesse',
        key: 'id_commessa'
      }
    },
    id_task: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'operatori_task',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_operatore" },
          { name: "id_commessa" },
          { name: "id_task" },
        ]
      },
      {
        name: "operatori_task_task_programmazione_id_task_fk",
        using: "BTREE",
        fields: [
          { name: "id_task" },
        ]
      },
      {
        name: "operatori_task_commesse_id_commessa_fk",
        using: "BTREE",
        fields: [
          { name: "id_commessa" },
        ]
      },
      {
        name: "operatori_task_el_ruoli_id_ruolo_fk",
        using: "BTREE",
        fields: [
          { name: "id_ruolo" },
        ]
      },
    ]
  });
  }
}
