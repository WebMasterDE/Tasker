import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { ana_operatori, ana_operatoriId } from './ana_operatori';
import type { commesse, commesseId } from './commesse';

export interface timetableAttributes {
  id_timetable: number;
  id_commessa: number;
  id_operatore: number;
  ore_lavoro: number;
  data_lavoro: string;
  data_ins: Date;
  operatore_ins?: number;
  note?: string;
  data_lavoro_cv: number;
}

export type timetablePk = "id_timetable";
export type timetableId = timetable[timetablePk];
export type timetableOptionalAttributes = "id_timetable" | "ore_lavoro" | "data_ins" | "operatore_ins" | "note" | "data_lavoro_cv";
export type timetableCreationAttributes = Optional<timetableAttributes, timetableOptionalAttributes>;

export class timetable extends Model<timetableAttributes, timetableCreationAttributes> implements timetableAttributes {
  id_timetable!: number;
  id_commessa!: number;
  id_operatore!: number;
  ore_lavoro!: number;
  data_lavoro!: string;
  data_ins!: Date;
  operatore_ins?: number;
  note?: string;
  data_lavoro_cv!: number;

  // timetable belongsTo ana_operatori via id_operatore
  id_operatore_ana_operatori!: ana_operatori;
  getId_operatore_ana_operatori!: Sequelize.BelongsToGetAssociationMixin<ana_operatori>;
  setId_operatore_ana_operatori!: Sequelize.BelongsToSetAssociationMixin<ana_operatori, ana_operatoriId>;
  createId_operatore_ana_operatori!: Sequelize.BelongsToCreateAssociationMixin<ana_operatori>;
  // timetable belongsTo ana_operatori via operatore_ins
  operatore_ins_ana_operatori!: ana_operatori;
  getOperatore_ins_ana_operatori!: Sequelize.BelongsToGetAssociationMixin<ana_operatori>;
  setOperatore_ins_ana_operatori!: Sequelize.BelongsToSetAssociationMixin<ana_operatori, ana_operatoriId>;
  createOperatore_ins_ana_operatori!: Sequelize.BelongsToCreateAssociationMixin<ana_operatori>;
  // timetable belongsTo commesse via id_commessa
  id_commessa_commesse!: commesse;
  getId_commessa_commesse!: Sequelize.BelongsToGetAssociationMixin<commesse>;
  setId_commessa_commesse!: Sequelize.BelongsToSetAssociationMixin<commesse, commesseId>;
  createId_commessa_commesse!: Sequelize.BelongsToCreateAssociationMixin<commesse>;

  static initModel(sequelize: Sequelize.Sequelize): typeof timetable {
    return timetable.init({
    id_timetable: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    id_commessa: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'commesse',
        key: 'id_commessa'
      }
    },
    id_operatore: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'ana_operatori',
        key: 'id_operatore'
      }
    },
    ore_lavoro: {
      type: DataTypes.DECIMAL(3,1),
      allowNull: false,
      defaultValue: 0.0
    },
    data_lavoro: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    data_ins: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('current_timestamp')
    },
    operatore_ins: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      references: {
        model: 'ana_operatori',
        key: 'id_operatore'
      }
    },
    note: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    data_lavoro_cv: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'timetable',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_timetable" },
        ]
      },
      {
        name: "IN_id_commessa",
        using: "BTREE",
        fields: [
          { name: "id_commessa" },
        ]
      },
      {
        name: "timetable_ana_operatori_id_operatore_fk",
        using: "BTREE",
        fields: [
          { name: "id_operatore" },
        ]
      },
      {
        name: "timetable_ana_operatori_id_operatore_fk2",
        using: "BTREE",
        fields: [
          { name: "operatore_ins" },
        ]
      },
    ]
  });
  }
}
