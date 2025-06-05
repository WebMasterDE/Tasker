import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface archivesAttributes {
  Id_task?: number;
  Task_name?: string;
  Task_description?: string;
  Task_hours?: string;
  Task_creation?: string;
  Task_end?: string;
  userIdUser?: number;
  createdAt?: Date;
  updatedAt?: Date;
}

export type archivesOptionalAttributes = "Id_task" | "Task_name" | "Task_description" | "Task_hours" | "Task_creation" | "Task_end" | "userIdUser" | "createdAt" | "updatedAt";
export type archivesCreationAttributes = Optional<archivesAttributes, archivesOptionalAttributes>;

export class archives extends Model<archivesAttributes, archivesCreationAttributes> implements archivesAttributes {
  Id_task?: number;
  Task_name?: string;
  Task_description?: string;
  Task_hours?: string;
  Task_creation?: string;
  Task_end?: string;
  userIdUser?: number;
  createdAt?: Date;
  updatedAt?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof archives {
    return archives.init({
    Id_task: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Task_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    Task_description: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    Task_hours: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    Task_creation: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    Task_end: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    userIdUser: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'archives',
    timestamps: true
  });
  }
}
