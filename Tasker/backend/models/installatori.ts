import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface installatoriAttributes {
  id: number;
  nome_installatore: string;
}

export type installatoriPk = "id";
export type installatoriId = installatori[installatoriPk];
export type installatoriOptionalAttributes = "id";
export type installatoriCreationAttributes = Optional<installatoriAttributes, installatoriOptionalAttributes>;

export class installatori extends Model<installatoriAttributes, installatoriCreationAttributes> implements installatoriAttributes {
  id!: number;
  nome_installatore!: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof installatori {
    return installatori.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    nome_installatore: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'installatori',
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
