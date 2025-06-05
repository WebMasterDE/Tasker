import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { hours, hoursId } from './hours';
import type { task_subtask, task_subtaskId } from './task_subtask';
import type { tasks, tasksId } from './tasks';

export interface subtaskAttributes {
  id: number;
  descrizione: string;
  ore_preventivate: number;
  data_inizio: string;
  data_fine?: string;
  data_fine_prevista: string;
  status: 'aperto' | 'chiuso';
}

export type subtaskPk = "id";
export type subtaskId = subtask[subtaskPk];
export type subtaskOptionalAttributes = "id" | "data_fine" | "status";
export type subtaskCreationAttributes = Optional<subtaskAttributes, subtaskOptionalAttributes>;

export class subtask extends Model<subtaskAttributes, subtaskCreationAttributes> implements subtaskAttributes {
  id!: number;
  descrizione!: string;
  ore_preventivate!: number;
  data_inizio!: string;
  data_fine?: string;
  data_fine_prevista!: string;
  status!: 'aperto' | 'chiuso';

  // subtask hasMany hours via id_subtask
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
  // subtask hasMany task_subtask via id_subtask
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
  // subtask belongsToMany tasks via id_subtask and id_task
  id_task_tasks!: tasks[];
  getId_task_tasks!: Sequelize.BelongsToManyGetAssociationsMixin<tasks>;
  setId_task_tasks!: Sequelize.BelongsToManySetAssociationsMixin<tasks, tasksId>;
  addId_task_task!: Sequelize.BelongsToManyAddAssociationMixin<tasks, tasksId>;
  addId_task_tasks!: Sequelize.BelongsToManyAddAssociationsMixin<tasks, tasksId>;
  createId_task_task!: Sequelize.BelongsToManyCreateAssociationMixin<tasks>;
  removeId_task_task!: Sequelize.BelongsToManyRemoveAssociationMixin<tasks, tasksId>;
  removeId_task_tasks!: Sequelize.BelongsToManyRemoveAssociationsMixin<tasks, tasksId>;
  hasId_task_task!: Sequelize.BelongsToManyHasAssociationMixin<tasks, tasksId>;
  hasId_task_tasks!: Sequelize.BelongsToManyHasAssociationsMixin<tasks, tasksId>;
  countId_task_tasks!: Sequelize.BelongsToManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof subtask {
    return subtask.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    descrizione: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    ore_preventivate: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    data_inizio: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    data_fine: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    data_fine_prevista: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    status: {
      type: DataTypes.ENUM('aperto','chiuso'),
      allowNull: false,
      defaultValue: "aperto"
    }
  }, {
    sequelize,
    tableName: 'subtask',
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
    ]
  });
  }
}
