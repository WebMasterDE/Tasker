import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface pratiche_eneaAttributes {
  id_pratica_enea: number;
  fine_lavori?: string;
  note_fine_lavori?: string;
  periodo?: Date;
  note_periodo?: string;
  op_ins_periodo?: number;
  data_pres_pratica_enea?: string;
  note_data_pres_prat_enea?: string;
  op_ins_data_pres_prat_enea?: number;
  id_operatore?: number;
  note_id_operatore?: string;
  op_ins_id_operatore?: number;
  id_commessa: number;
  op_ins_fine_lav?: number;
}

export type pratiche_eneaPk = "id_pratica_enea";
export type pratiche_eneaId = pratiche_enea[pratiche_eneaPk];
export type pratiche_eneaOptionalAttributes = "id_pratica_enea" | "fine_lavori" | "note_fine_lavori" | "periodo" | "note_periodo" | "op_ins_periodo" | "data_pres_pratica_enea" | "note_data_pres_prat_enea" | "op_ins_data_pres_prat_enea" | "id_operatore" | "note_id_operatore" | "op_ins_id_operatore" | "op_ins_fine_lav";
export type pratiche_eneaCreationAttributes = Optional<pratiche_eneaAttributes, pratiche_eneaOptionalAttributes>;

export class pratiche_enea extends Model<pratiche_eneaAttributes, pratiche_eneaCreationAttributes> implements pratiche_eneaAttributes {
  id_pratica_enea!: number;
  fine_lavori?: string;
  note_fine_lavori?: string;
  periodo?: Date;
  note_periodo?: string;
  op_ins_periodo?: number;
  data_pres_pratica_enea?: string;
  note_data_pres_prat_enea?: string;
  op_ins_data_pres_prat_enea?: number;
  id_operatore?: number;
  note_id_operatore?: string;
  op_ins_id_operatore?: number;
  id_commessa!: number;
  op_ins_fine_lav?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof pratiche_enea {
    return pratiche_enea.init({
    id_pratica_enea: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    fine_lavori: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    note_fine_lavori: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    periodo: {
      type: DataTypes.DATE(4),
      allowNull: true
    },
    note_periodo: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    op_ins_periodo: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    data_pres_pratica_enea: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    note_data_pres_prat_enea: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    op_ins_data_pres_prat_enea: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    id_operatore: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    note_id_operatore: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    op_ins_id_operatore: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    id_commessa: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    op_ins_fine_lav: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'pratiche_enea',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_pratica_enea" },
        ]
      },
      {
        name: "pratiche_enea_ana_operatori_id_operatore_fk",
        using: "BTREE",
        fields: [
          { name: "id_operatore" },
        ]
      },
      {
        name: "pratiche_enea_commesse_id_commessa_fk",
        using: "BTREE",
        fields: [
          { name: "id_commessa" },
        ]
      },
    ]
  });
  }
}
