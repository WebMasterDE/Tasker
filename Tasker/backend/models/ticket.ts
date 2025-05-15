import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface ticketAttributes {
  id_ticket: number;
  stato: '0' | '1';
  priorita: '0' | '1' | '2';
  richiesta: string;
  id_operatore: number;
  data_apertura: Date;
  oggetto: string;
  id_anagrafica: number;
  nominativo: string;
  note_extra: string;
  id_operatore_int: number;
  data_scadenza: string;
  id_classificazione: number;
}

export type ticketPk = "id_ticket";
export type ticketId = ticket[ticketPk];
export type ticketOptionalAttributes = "id_ticket" | "stato" | "priorita" | "id_operatore" | "data_apertura" | "id_anagrafica" | "nominativo" | "id_operatore_int" | "data_scadenza" | "id_classificazione";
export type ticketCreationAttributes = Optional<ticketAttributes, ticketOptionalAttributes>;

export class ticket extends Model<ticketAttributes, ticketCreationAttributes> implements ticketAttributes {
  id_ticket!: number;
  stato!: '0' | '1';
  priorita!: '0' | '1' | '2';
  richiesta!: string;
  id_operatore!: number;
  data_apertura!: Date;
  oggetto!: string;
  id_anagrafica!: number;
  nominativo!: string;
  note_extra!: string;
  id_operatore_int!: number;
  data_scadenza!: string;
  id_classificazione!: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof ticket {
    return ticket.init({
    id_ticket: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    stato: {
      type: DataTypes.ENUM('0','1'),
      allowNull: false,
      defaultValue: "0"
    },
    priorita: {
      type: DataTypes.ENUM('0','1','2'),
      allowNull: false,
      defaultValue: "1"
    },
    richiesta: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    id_operatore: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    data_apertura: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('current_timestamp')
    },
    oggetto: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    id_anagrafica: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    nominativo: {
      type: DataTypes.STRING(45),
      allowNull: false,
      defaultValue: ""
    },
    note_extra: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    id_operatore_int: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    data_scadenza: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: "0000-00-00"
    },
    id_classificazione: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'ticket',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_ticket" },
        ]
      },
    ]
  });
  }
}
