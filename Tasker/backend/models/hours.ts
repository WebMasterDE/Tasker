import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { overtime, overtimeId } from './overtime';
import type { subtask, subtaskId } from './subtask';
import type { tasks, tasksId } from './tasks';
import type { users, usersId } from './users';

export interface hoursAttributes {
  Id_hour: number;
  Operator?: string;
  Description?: string;
  Hour?: number;
  Date?: string;
  Id_user?: number;
  createdAt?: Date;
  updatedAt?: Date;
  Id_task?: number;
  id_subtask?: number;
  Commit?: string;
  id_timetable: number;
}

export type hoursPk = "Id_hour";
export type hoursId = hours[hoursPk];
export type hoursOptionalAttributes = "Id_hour" | "Operator" | "Description" | "Hour" | "Date" | "Id_user" | "createdAt" | "updatedAt" | "Id_task" | "id_subtask" | "Commit";
export type hoursCreationAttributes = Optional<hoursAttributes, hoursOptionalAttributes>;

export class hours extends Model<hoursAttributes, hoursCreationAttributes> implements hoursAttributes {
  Id_hour!: number;
  Operator?: string;
  Description?: string;
  Hour?: number;
  Date?: string;
  Id_user?: number;
  createdAt?: Date;
  updatedAt?: Date;
  Id_task?: number;
  id_subtask?: number;
  Commit?: string;
  id_timetable!: number;

  // hours hasMany overtime via Id_hour
  overtimes!: overtime[];
  getOvertimes!: Sequelize.HasManyGetAssociationsMixin<overtime>;
  setOvertimes!: Sequelize.HasManySetAssociationsMixin<overtime, overtimeId>;
  addOvertime!: Sequelize.HasManyAddAssociationMixin<overtime, overtimeId>;
  addOvertimes!: Sequelize.HasManyAddAssociationsMixin<overtime, overtimeId>;
  createOvertime!: Sequelize.HasManyCreateAssociationMixin<overtime>;
  removeOvertime!: Sequelize.HasManyRemoveAssociationMixin<overtime, overtimeId>;
  removeOvertimes!: Sequelize.HasManyRemoveAssociationsMixin<overtime, overtimeId>;
  hasOvertime!: Sequelize.HasManyHasAssociationMixin<overtime, overtimeId>;
  hasOvertimes!: Sequelize.HasManyHasAssociationsMixin<overtime, overtimeId>;
  countOvertimes!: Sequelize.HasManyCountAssociationsMixin;
  // hours belongsTo subtask via id_subtask
  id_subtask_subtask!: subtask;
  getId_subtask_subtask!: Sequelize.BelongsToGetAssociationMixin<subtask>;
  setId_subtask_subtask!: Sequelize.BelongsToSetAssociationMixin<subtask, subtaskId>;
  createId_subtask_subtask!: Sequelize.BelongsToCreateAssociationMixin<subtask>;
  // hours belongsTo tasks via Id_task
  Id_task_task!: tasks;
  getId_task_task!: Sequelize.BelongsToGetAssociationMixin<tasks>;
  setId_task_task!: Sequelize.BelongsToSetAssociationMixin<tasks, tasksId>;
  createId_task_task!: Sequelize.BelongsToCreateAssociationMixin<tasks>;
  // hours belongsTo users via Id_user
  Id_user_user!: users;
  getId_user_user!: Sequelize.BelongsToGetAssociationMixin<users>;
  setId_user_user!: Sequelize.BelongsToSetAssociationMixin<users, usersId>;
  createId_user_user!: Sequelize.BelongsToCreateAssociationMixin<users>;

  static initModel(sequelize: Sequelize.Sequelize): typeof hours {
    return hours.init({
    Id_hour: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Operator: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    Description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Hour: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    Date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    Id_user: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'users',
        key: 'Id_user'
      }
    },
    Id_task: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'tasks',
        key: 'Id_task'
      }
    },
    id_subtask: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'subtask',
        key: 'id'
      }
    },
    Commit: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    id_timetable: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'hours',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Id_hour" },
        ]
      },
      {
        name: "hours_users_Id_user_fk",
        using: "BTREE",
        fields: [
          { name: "Id_user" },
        ]
      },
      {
        name: "hours_tasks_Id_task_fk",
        using: "BTREE",
        fields: [
          { name: "Id_task" },
        ]
      },
      {
        name: "hours_subtask_id_fk",
        using: "BTREE",
        fields: [
          { name: "id_subtask" },
        ]
      },
    ]
  });
  }
}
