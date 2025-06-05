import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { pagamenti, pagamentiId } from './pagamenti';
import type { task_fatturazione, task_fatturazioneId } from './task_fatturazione';

export interface pagamenti_taskAttributes {
  id_pagamento: number;
  id_task: number;
  importo?: number;
}

export type pagamenti_taskPk = "id_pagamento" | "id_task";
export type pagamenti_taskId = pagamenti_task[pagamenti_taskPk];
export type pagamenti_taskOptionalAttributes = "importo";
export type pagamenti_taskCreationAttributes = Optional<pagamenti_taskAttributes, pagamenti_taskOptionalAttributes>;

export class pagamenti_task extends Model<pagamenti_taskAttributes, pagamenti_taskCreationAttributes> implements pagamenti_taskAttributes {
  id_pagamento!: number;
  id_task!: number;
  importo?: number;

  // pagamenti_task belongsTo pagamenti via id_pagamento
  id_pagamento_pagamenti!: pagamenti;
  getId_pagamento_pagamenti!: Sequelize.BelongsToGetAssociationMixin<pagamenti>;
  setId_pagamento_pagamenti!: Sequelize.BelongsToSetAssociationMixin<pagamenti, pagamentiId>;
  createId_pagamento_pagamenti!: Sequelize.BelongsToCreateAssociationMixin<pagamenti>;
  // pagamenti_task belongsTo task_fatturazione via id_task
  id_task_task_fatturazione!: task_fatturazione;
  getId_task_task_fatturazione!: Sequelize.BelongsToGetAssociationMixin<task_fatturazione>;
  setId_task_task_fatturazione!: Sequelize.BelongsToSetAssociationMixin<task_fatturazione, task_fatturazioneId>;
  createId_task_task_fatturazione!: Sequelize.BelongsToCreateAssociationMixin<task_fatturazione>;

  static initModel(sequelize: Sequelize.Sequelize): typeof pagamenti_task {
    return pagamenti_task.init({
    id_pagamento: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'pagamenti',
        key: 'id_pagamento'
      }
    },
    id_task: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'task_fatturazione',
        key: 'id_task'
      }
    },
    importo: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'pagamenti_task',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_pagamento" },
          { name: "id_task" },
        ]
      },
      {
        name: "pagamenti_task_id_task_id_pagamento_unique",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_pagamento" },
          { name: "id_task" },
        ]
      },
      {
        name: "pagamenti_task_task_fatturazione_id_task_fk",
        using: "BTREE",
        fields: [
          { name: "id_task" },
        ]
      },
    ]
  });
  }
}
