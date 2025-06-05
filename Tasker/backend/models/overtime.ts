import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { hours, hoursId } from './hours';
import type { users, usersId } from './users';

export interface overtimeAttributes {
  Id: number;
  Hours?: number;
  Date?: string;
  Id_user?: number;
  Id_hour?: number;
}

export type overtimePk = "Id";
export type overtimeId = overtime[overtimePk];
export type overtimeOptionalAttributes = "Id" | "Hours" | "Date" | "Id_user" | "Id_hour";
export type overtimeCreationAttributes = Optional<overtimeAttributes, overtimeOptionalAttributes>;

export class overtime extends Model<overtimeAttributes, overtimeCreationAttributes> implements overtimeAttributes {
  Id!: number;
  Hours?: number;
  Date?: string;
  Id_user?: number;
  Id_hour?: number;

  // overtime belongsTo hours via Id_hour
  Id_hour_hour!: hours;
  getId_hour_hour!: Sequelize.BelongsToGetAssociationMixin<hours>;
  setId_hour_hour!: Sequelize.BelongsToSetAssociationMixin<hours, hoursId>;
  createId_hour_hour!: Sequelize.BelongsToCreateAssociationMixin<hours>;
  // overtime belongsTo users via Id_user
  Id_user_user!: users;
  getId_user_user!: Sequelize.BelongsToGetAssociationMixin<users>;
  setId_user_user!: Sequelize.BelongsToSetAssociationMixin<users, usersId>;
  createId_user_user!: Sequelize.BelongsToCreateAssociationMixin<users>;

  static initModel(sequelize: Sequelize.Sequelize): typeof overtime {
    return overtime.init({
    Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Hours: {
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
    Id_hour: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'hours',
        key: 'Id_hour'
      }
    }
  }, {
    sequelize,
    tableName: 'overtime',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Id" },
        ]
      },
      {
        name: "Overtime___fk",
        using: "BTREE",
        fields: [
          { name: "Id_user" },
        ]
      },
      {
        name: "overtime_hours_Id_hour_fk",
        using: "BTREE",
        fields: [
          { name: "Id_hour" },
        ]
      },
    ]
  });
  }
}
