import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface ditte_doganeAttributes {
  id_ditta: number;
  codice_ditta?: string;
  ufficio_dogane?: string;
  data_apertura_officina?: string;
  note_data_apertura_officina?: string;
  user_id_gse?: string;
  psw_gse?: string;
}

export type ditte_doganePk = "id_ditta";
export type ditte_doganeId = ditte_dogane[ditte_doganePk];
export type ditte_doganeOptionalAttributes = "id_ditta" | "codice_ditta" | "ufficio_dogane" | "data_apertura_officina" | "note_data_apertura_officina" | "user_id_gse" | "psw_gse";
export type ditte_doganeCreationAttributes = Optional<ditte_doganeAttributes, ditte_doganeOptionalAttributes>;

export class ditte_dogane extends Model<ditte_doganeAttributes, ditte_doganeCreationAttributes> implements ditte_doganeAttributes {
  id_ditta!: number;
  codice_ditta?: string;
  ufficio_dogane?: string;
  data_apertura_officina?: string;
  note_data_apertura_officina?: string;
  user_id_gse?: string;
  psw_gse?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof ditte_dogane {
    return ditte_dogane.init({
    id_ditta: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    codice_ditta: {
      type: DataTypes.STRING(30),
      allowNull: true,
      unique: "ditte_dogane_codice_ditta_uindex"
    },
    ufficio_dogane: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    data_apertura_officina: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    note_data_apertura_officina: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    user_id_gse: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    psw_gse: {
      type: DataTypes.STRING(25),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ditte_dogane',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_ditta" },
        ]
      },
      {
        name: "ditte_dogane_codice_ditta_uindex",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "codice_ditta" },
        ]
      },
    ]
  });
  }
}
