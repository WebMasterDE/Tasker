import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { users, usersId } from './users';

export interface contract_of_employmentAttributes {
  Id: number;
  Hourly_cost: number;
  Percentage?: number;
  Id_user?: number;
}

export type contract_of_employmentPk = "Id";
export type contract_of_employmentId = contract_of_employment[contract_of_employmentPk];
export type contract_of_employmentOptionalAttributes = "Id" | "Percentage" | "Id_user";
export type contract_of_employmentCreationAttributes = Optional<contract_of_employmentAttributes, contract_of_employmentOptionalAttributes>;

export class contract_of_employment extends Model<contract_of_employmentAttributes, contract_of_employmentCreationAttributes> implements contract_of_employmentAttributes {
  Id!: number;
  Hourly_cost!: number;
  Percentage?: number;
  Id_user?: number;

  // contract_of_employment belongsTo users via Id_user
  Id_user_user!: users;
  getId_user_user!: Sequelize.BelongsToGetAssociationMixin<users>;
  setId_user_user!: Sequelize.BelongsToSetAssociationMixin<users, usersId>;
  createId_user_user!: Sequelize.BelongsToCreateAssociationMixin<users>;

  static initModel(sequelize: Sequelize.Sequelize): typeof contract_of_employment {
    return contract_of_employment.init({
    Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Hourly_cost: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Percentage: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Id_user: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'users',
        key: 'Id_user'
      }
    }
  }, {
    sequelize,
    tableName: 'contract_of_employment',
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
        name: "Id_user",
        using: "BTREE",
        fields: [
          { name: "Id_user" },
        ]
      },
    ]
  });
  }
}
