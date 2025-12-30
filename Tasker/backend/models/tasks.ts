import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { hours, hoursId } from './hours';
import type { subtask, subtaskId } from './subtask';
import type { task_subtask, task_subtaskId } from './task_subtask';

export interface tasksAttributes {
  Id_task: number;
  Task_name?: string;
  id_commessa: number;
  Task_description?: string;
  Task_creation?: string;
  createdAt?: Date;
  updatedAt?: Date;
  color?: string;
  status?: 'aperto' | 'chiuso';
}

export type tasksPk = "Id_task";
export type tasksId = tasks[tasksPk];
export type tasksOptionalAttributes = "Id_task" | "Task_name" | "Task_description" | "Task_creation" | "createdAt" | "updatedAt" | "color";
export type tasksCreationAttributes = Optional<tasksAttributes, tasksOptionalAttributes>;

export class tasks extends Model<tasksAttributes, tasksCreationAttributes> implements tasksAttributes {
  Id_task!: number;
  Task_name?: string;
  id_commessa!: number;
  Task_description?: string;
  Task_creation?: string;
  createdAt?: Date;
  updatedAt?: Date;
  color?: string;
  status?: 'aperto' | 'chiuso';

  // tasks hasMany hours via Id_task
  hours!: hours[];
  getHours!: Sequelize.HasManyGetAssociationsMixin<hours>;
  setHours!: Sequelize.HasManySetAssociationsMixin<hours, hoursId>;
  addHour!: Sequelize.HasManyAddAssociationMixin<hours, hoursId>;
  addHours!: Sequelize.HasManyAddAssociationsMixin<hours, hoursId>;
  createHour!: Sequelize.HasManyCreateAssociationMixin<hours>;
  removeHour!: Sequelize.HasManyRemoveAssociationMixin<hours, hoursId>;
  removeHours!: Sequelize.HasManyRemoveAssociationsMixin<hours, hoursId>;
  hasHour!: Sequelize.HasManyHasAssociationMixin<hours, hoursId>;
  hasHours!: Sequelize.HasManyHasAssociationsMixin<hours, hoursId>;
  countHours!: Sequelize.HasManyCountAssociationsMixin;
  // tasks belongsToMany subtask via id_task and id_subtask
  id_subtask_subtasks!: subtask[];
  getId_subtask_subtasks!: Sequelize.BelongsToManyGetAssociationsMixin<subtask>;
  setId_subtask_subtasks!: Sequelize.BelongsToManySetAssociationsMixin<subtask, subtaskId>;
  addId_subtask_subtask!: Sequelize.BelongsToManyAddAssociationMixin<subtask, subtaskId>;
  addId_subtask_subtasks!: Sequelize.BelongsToManyAddAssociationsMixin<subtask, subtaskId>;
  createId_subtask_subtask!: Sequelize.BelongsToManyCreateAssociationMixin<subtask>;
  removeId_subtask_subtask!: Sequelize.BelongsToManyRemoveAssociationMixin<subtask, subtaskId>;
  removeId_subtask_subtasks!: Sequelize.BelongsToManyRemoveAssociationsMixin<subtask, subtaskId>;
  hasId_subtask_subtask!: Sequelize.BelongsToManyHasAssociationMixin<subtask, subtaskId>;
  hasId_subtask_subtasks!: Sequelize.BelongsToManyHasAssociationsMixin<subtask, subtaskId>;
  countId_subtask_subtasks!: Sequelize.BelongsToManyCountAssociationsMixin;
  // tasks hasMany task_subtask via id_task
  task_subtasks!: task_subtask[];
  getTask_subtasks!: Sequelize.HasManyGetAssociationsMixin<task_subtask>;
  setTask_subtasks!: Sequelize.HasManySetAssociationsMixin<task_subtask, task_subtaskId>;
  addTask_subtask!: Sequelize.HasManyAddAssociationMixin<task_subtask, task_subtaskId>;
  addTask_subtasks!: Sequelize.HasManyAddAssociationsMixin<task_subtask, task_subtaskId>;
  createTask_subtask!: Sequelize.HasManyCreateAssociationMixin<task_subtask>;
  removeTask_subtask!: Sequelize.HasManyRemoveAssociationMixin<task_subtask, task_subtaskId>;
  removeTask_subtasks!: Sequelize.HasManyRemoveAssociationsMixin<task_subtask, task_subtaskId>;
  hasTask_subtask!: Sequelize.HasManyHasAssociationMixin<task_subtask, task_subtaskId>;
  hasTask_subtasks!: Sequelize.HasManyHasAssociationsMixin<task_subtask, task_subtaskId>;
  countTask_subtasks!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof tasks {
    return tasks.init({
    Id_task: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Task_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    id_commessa: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    Task_description: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    Task_creation: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    color: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    status: {
      type: DataTypes.ENUM('aperto','chiuso'),
      allowNull: false,
      defaultValue: 'aperto'
    }
  }, {
    sequelize,
    tableName: 'tasks',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Id_task" },
        ]
      },
    ]
  });
  }
}
