import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface ticket_commesseAttributes {
  id: number;
  id_ticket: number;
  id_commessa: number;
}

export type ticket_commessePk = "id";
export type ticket_commesseId = ticket_commesse[ticket_commessePk];
export type ticket_commesseOptionalAttributes = "id" | "id_ticket" | "id_commessa";
export type ticket_commesseCreationAttributes = Optional<ticket_commesseAttributes, ticket_commesseOptionalAttributes>;

export class ticket_commesse extends Model<ticket_commesseAttributes, ticket_commesseCreationAttributes> implements ticket_commesseAttributes {
  id!: number;
  id_ticket!: number;
  id_commessa!: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof ticket_commesse {
    return ticket_commesse.init({
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
    id_commessa: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'ticket_commesse',
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
