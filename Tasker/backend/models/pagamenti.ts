import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { pagamenti_task, pagamenti_taskId } from './pagamenti_task';
import type { task_fatturazione, task_fatturazioneId } from './task_fatturazione';

export interface pagamentiAttributes {
  id_pagamento: number;
  importo_pagato: number;
  data_ins: Date;
  operatore_ins: number;
  id_fattura: number;
  id_commessa: number;
  id_acquisto?: number;
  data_pagamento: string;
}

export type pagamentiPk = "id_pagamento" | "id_fattura";
export type pagamentiId = pagamenti[pagamentiPk];
export type pagamentiOptionalAttributes = "id_pagamento" | "importo_pagato" | "data_ins" | "operatore_ins" | "id_fattura" | "id_commessa" | "id_acquisto" | "data_pagamento";
export type pagamentiCreationAttributes = Optional<pagamentiAttributes, pagamentiOptionalAttributes>;

export class pagamenti extends Model<pagamentiAttributes, pagamentiCreationAttributes> implements pagamentiAttributes {
  id_pagamento!: number;
  importo_pagato!: number;
  data_ins!: Date;
  operatore_ins!: number;
  id_fattura!: number;
  id_commessa!: number;
  id_acquisto?: number;
  data_pagamento!: string;

  // pagamenti hasMany pagamenti_task via id_pagamento
  pagamenti_tasks!: pagamenti_task[];
  getPagamenti_tasks!: Sequelize.HasManyGetAssociationsMixin<pagamenti_task>;
  setPagamenti_tasks!: Sequelize.HasManySetAssociationsMixin<pagamenti_task, pagamenti_taskId>;
  addPagamenti_task!: Sequelize.HasManyAddAssociationMixin<pagamenti_task, pagamenti_taskId>;
  addPagamenti_tasks!: Sequelize.HasManyAddAssociationsMixin<pagamenti_task, pagamenti_taskId>;
  createPagamenti_task!: Sequelize.HasManyCreateAssociationMixin<pagamenti_task>;
  removePagamenti_task!: Sequelize.HasManyRemoveAssociationMixin<pagamenti_task, pagamenti_taskId>;
  removePagamenti_tasks!: Sequelize.HasManyRemoveAssociationsMixin<pagamenti_task, pagamenti_taskId>;
  hasPagamenti_task!: Sequelize.HasManyHasAssociationMixin<pagamenti_task, pagamenti_taskId>;
  hasPagamenti_tasks!: Sequelize.HasManyHasAssociationsMixin<pagamenti_task, pagamenti_taskId>;
  countPagamenti_tasks!: Sequelize.HasManyCountAssociationsMixin;
  // pagamenti belongsToMany task_fatturazione via id_pagamento and id_task
  id_task_task_fatturaziones!: task_fatturazione[];
  getId_task_task_fatturaziones!: Sequelize.BelongsToManyGetAssociationsMixin<task_fatturazione>;
  setId_task_task_fatturaziones!: Sequelize.BelongsToManySetAssociationsMixin<task_fatturazione, task_fatturazioneId>;
  addId_task_task_fatturazione!: Sequelize.BelongsToManyAddAssociationMixin<task_fatturazione, task_fatturazioneId>;
  addId_task_task_fatturaziones!: Sequelize.BelongsToManyAddAssociationsMixin<task_fatturazione, task_fatturazioneId>;
  createId_task_task_fatturazione!: Sequelize.BelongsToManyCreateAssociationMixin<task_fatturazione>;
  removeId_task_task_fatturazione!: Sequelize.BelongsToManyRemoveAssociationMixin<task_fatturazione, task_fatturazioneId>;
  removeId_task_task_fatturaziones!: Sequelize.BelongsToManyRemoveAssociationsMixin<task_fatturazione, task_fatturazioneId>;
  hasId_task_task_fatturazione!: Sequelize.BelongsToManyHasAssociationMixin<task_fatturazione, task_fatturazioneId>;
  hasId_task_task_fatturaziones!: Sequelize.BelongsToManyHasAssociationsMixin<task_fatturazione, task_fatturazioneId>;
  countId_task_task_fatturaziones!: Sequelize.BelongsToManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof pagamenti {
    return pagamenti.init({
    id_pagamento: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    importo_pagato: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
      defaultValue: 0.00
    },
    data_ins: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('current_timestamp')
    },
    operatore_ins: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    id_fattura: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    id_commessa: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    id_acquisto: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    data_pagamento: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: "0000-00-00"
    }
  }, {
    sequelize,
    tableName: 'pagamenti',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_pagamento" },
          { name: "id_fattura" },
        ]
      },
      {
        name: "FK_pagamenti_1",
        using: "BTREE",
        fields: [
          { name: "id_fattura" },
        ]
      },
      {
        name: "FK_pagamenti_2",
        using: "BTREE",
        fields: [
          { name: "id_commessa" },
        ]
      },
    ]
  });
  }
}
