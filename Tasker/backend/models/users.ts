import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { contract_of_employment, contract_of_employmentId } from './contract_of_employment';
import type { hours, hoursId } from './hours';
import type { overtime, overtimeId } from './overtime';
import type { shifts, shiftsId } from './shifts';

export interface usersAttributes {
  Id_user: number;
  id_operatore: number;
  Name?: string;
  Email?: string;
  Password?: string;
  createdAt?: Date;
  updatedAt?: Date;
  Authorization: number;
}

export type usersPk = "Id_user";
export type usersId = users[usersPk];
export type usersOptionalAttributes = "Id_user" | "Name" | "Email" | "Password" | "createdAt" | "updatedAt" | "Authorization";
export type usersCreationAttributes = Optional<usersAttributes, usersOptionalAttributes>;

export class users extends Model<usersAttributes, usersCreationAttributes> implements usersAttributes {
  Id_user!: number;
  id_operatore!: number;
  Name?: string;
  Email?: string;
  Password?: string;
  createdAt?: Date;
  updatedAt?: Date;
  Authorization!: number;

  // users hasMany contract_of_employment via Id_user
  contract_of_employments!: contract_of_employment[];
  getContract_of_employments!: Sequelize.HasManyGetAssociationsMixin<contract_of_employment>;
  setContract_of_employments!: Sequelize.HasManySetAssociationsMixin<contract_of_employment, contract_of_employmentId>;
  addContract_of_employment!: Sequelize.HasManyAddAssociationMixin<contract_of_employment, contract_of_employmentId>;
  addContract_of_employments!: Sequelize.HasManyAddAssociationsMixin<contract_of_employment, contract_of_employmentId>;
  createContract_of_employment!: Sequelize.HasManyCreateAssociationMixin<contract_of_employment>;
  removeContract_of_employment!: Sequelize.HasManyRemoveAssociationMixin<contract_of_employment, contract_of_employmentId>;
  removeContract_of_employments!: Sequelize.HasManyRemoveAssociationsMixin<contract_of_employment, contract_of_employmentId>;
  hasContract_of_employment!: Sequelize.HasManyHasAssociationMixin<contract_of_employment, contract_of_employmentId>;
  hasContract_of_employments!: Sequelize.HasManyHasAssociationsMixin<contract_of_employment, contract_of_employmentId>;
  countContract_of_employments!: Sequelize.HasManyCountAssociationsMixin;
  // users hasMany hours via Id_user
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
  // users hasMany overtime via Id_user
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
  // users hasMany shifts via Id_user
  shifts!: shifts[];
  getShifts!: Sequelize.HasManyGetAssociationsMixin<shifts>;
  setShifts!: Sequelize.HasManySetAssociationsMixin<shifts, shiftsId>;
  addShift!: Sequelize.HasManyAddAssociationMixin<shifts, shiftsId>;
  addShifts!: Sequelize.HasManyAddAssociationsMixin<shifts, shiftsId>;
  createShift!: Sequelize.HasManyCreateAssociationMixin<shifts>;
  removeShift!: Sequelize.HasManyRemoveAssociationMixin<shifts, shiftsId>;
  removeShifts!: Sequelize.HasManyRemoveAssociationsMixin<shifts, shiftsId>;
  hasShift!: Sequelize.HasManyHasAssociationMixin<shifts, shiftsId>;
  hasShifts!: Sequelize.HasManyHasAssociationsMixin<shifts, shiftsId>;
  countShifts!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof users {
    return users.init({
    Id_user: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_operatore: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    Name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    Email: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    Password: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    Authorization: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 3
    }
  }, {
    sequelize,
    tableName: 'users',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Id_user" },
        ]
      },
    ]
  });
  }
}
