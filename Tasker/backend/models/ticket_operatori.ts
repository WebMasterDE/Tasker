import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface ticket_operatoriAttributes {
  id: number;
  id_ticket: number;
  id_operatore: number;
  thred: string;
  data: Date;
}

export type ticket_operatoriPk = "id";
export type ticket_operatoriId = ticket_operatori[ticket_operatoriPk];
export type ticket_operatoriOptionalAttributes = "id" | "id_ticket" | "id_operatore" | "data";
export type ticket_operatoriCreationAttributes = Optional<ticket_operatoriAttributes, ticket_operatoriOptionalAttributes>;

export class ticket_operatori extends Model<ticket_operatoriAttributes, ticket_operatoriCreationAttributes> implements ticket_operatoriAttributes {
  id!: number;
  id_ticket!: number;
  id_operatore!: number;
  thred!: string;
  data!: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof ticket_operatori {
    return ticket_operatori.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    id_ticket: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    id_operatore: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    thred: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    data: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('current_timestamp')
    }
  }, {
    sequelize,
    tableName: 'ticket_operatori',
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
