import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { subtask, subtaskId } from './subtask';
import type { tasks, tasksId } from './tasks';

export interface task_subtaskAttributes {
  id_task: number;
  id_subtask: number;
}

export type task_subtaskPk = "id_task" | "id_subtask";
export type task_subtaskId = task_subtask[task_subtaskPk];
export type task_subtaskCreationAttributes = task_subtaskAttributes;

export class task_subtask extends Model<task_subtaskAttributes, task_subtaskCreationAttributes> implements task_subtaskAttributes {
  id_task!: number;
  id_subtask!: number;

  // task_subtask belongsTo subtask via id_subtask
  id_subtask_subtask!: subtask;
  getId_subtask_subtask!: Sequelize.BelongsToGetAssociationMixin<subtask>;
  setId_subtask_subtask!: Sequelize.BelongsToSetAssociationMixin<subtask, subtaskId>;
  createId_subtask_subtask!: Sequelize.BelongsToCreateAssociationMixin<subtask>;
  // task_subtask belongsTo tasks via id_task
  id_task_task!: tasks;
  getId_task_task!: Sequelize.BelongsToGetAssociationMixin<tasks>;
  setId_task_task!: Sequelize.BelongsToSetAssociationMixin<tasks, tasksId>;
  createId_task_task!: Sequelize.BelongsToCreateAssociationMixin<tasks>;

  static initModel(sequelize: Sequelize.Sequelize): typeof task_subtask {
    return task_subtask.init({
    id_task: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'tasks',
        key: 'Id_task'
      }
    },
    id_subtask: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'subtask',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'task_subtask',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_subtask" },
          { name: "id_task" },
        ]
      },
      {
        name: "task_subtask_tasks_Id_task_fk",
        using: "BTREE",
        fields: [
          { name: "id_task" },
        ]
      },
    ]
  });
  }
}
