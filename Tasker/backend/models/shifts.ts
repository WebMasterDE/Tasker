import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { users, usersId } from './users';

export interface shiftsAttributes {
  Id_shift: number;
  start_date: string;
  end_date?: string;
  hour: number;
  Id_user: number;
}

export type shiftsPk = "Id_shift";
export type shiftsId = shifts[shiftsPk];
export type shiftsOptionalAttributes = "Id_shift" | "end_date";
export type shiftsCreationAttributes = Optional<shiftsAttributes, shiftsOptionalAttributes>;

export class shifts extends Model<shiftsAttributes, shiftsCreationAttributes> implements shiftsAttributes {
  Id_shift!: number;
  start_date!: string;
  end_date?: string;
  hour!: number;
  Id_user!: number;

  // shifts belongsTo users via Id_user
  Id_user_user!: users;
  getId_user_user!: Sequelize.BelongsToGetAssociationMixin<users>;
  setId_user_user!: Sequelize.BelongsToSetAssociationMixin<users, usersId>;
  createId_user_user!: Sequelize.BelongsToCreateAssociationMixin<users>;

  static initModel(sequelize: Sequelize.Sequelize): typeof shifts {
    return shifts.init({
    Id_shift: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    start_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    end_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    hour: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Id_user: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'Id_user'
      }
    }
  }, {
    sequelize,
    tableName: 'shifts',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Id_shift" },
        ]
      },
      {
        name: "shifts_users_Id_user_fk",
        using: "BTREE",
        fields: [
          { name: "Id_user" },
        ]
      },
    ]
  });
  }
}
