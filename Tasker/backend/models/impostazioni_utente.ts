import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface impostazioni_utenteAttributes {
  id: number;
  dark_mode_enabled?: number;
  id_ana_operatore?: number;
  col_reorder_enabled?: number;
  sidebar_opened?: number;
  tutti_stati_default_commesse?: number;
  default_page?: number;
}

export type impostazioni_utentePk = "id";
export type impostazioni_utenteId = impostazioni_utente[impostazioni_utentePk];
export type impostazioni_utenteOptionalAttributes = "id" | "dark_mode_enabled" | "id_ana_operatore" | "col_reorder_enabled" | "sidebar_opened" | "tutti_stati_default_commesse" | "default_page";
export type impostazioni_utenteCreationAttributes = Optional<impostazioni_utenteAttributes, impostazioni_utenteOptionalAttributes>;

export class impostazioni_utente extends Model<impostazioni_utenteAttributes, impostazioni_utenteCreationAttributes> implements impostazioni_utenteAttributes {
  id!: number;
  dark_mode_enabled?: number;
  id_ana_operatore?: number;
  col_reorder_enabled?: number;
  sidebar_opened?: number;
  tutti_stati_default_commesse?: number;
  default_page?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof impostazioni_utente {
    return impostazioni_utente.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    dark_mode_enabled: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    id_ana_operatore: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    col_reorder_enabled: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    sidebar_opened: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    tutti_stati_default_commesse: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    default_page: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'impostazioni_utente',
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
      {
        name: "impostazioni_utente_ana_operatori_id_operatore_fk",
        using: "BTREE",
        fields: [
          { name: "id_ana_operatore" },
        ]
      },
    ]
  });
  }
}
