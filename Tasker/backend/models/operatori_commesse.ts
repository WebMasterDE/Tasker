import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface operatori_commesseAttributes {
  id: number;
  id_operatore: number;
  id_commessa: number;
  note: string;
  data_ins: Date;
  ore_1: number;
  ore_2: number;
  ore_3: number;
  ore_4: number;
  ore_5: number;
  ore_6: number;
  ore_7: number;
  ore_8: number;
  ore_9: number;
  ore_10: number;
  ore_11: number;
  ore_12: number;
}

export type operatori_commessePk = "id";
export type operatori_commesseId = operatori_commesse[operatori_commessePk];
export type operatori_commesseOptionalAttributes = "id" | "id_operatore" | "id_commessa" | "data_ins" | "ore_1" | "ore_2" | "ore_3" | "ore_4" | "ore_5" | "ore_6" | "ore_7" | "ore_8" | "ore_9" | "ore_10" | "ore_11" | "ore_12";
export type operatori_commesseCreationAttributes = Optional<operatori_commesseAttributes, operatori_commesseOptionalAttributes>;

export class operatori_commesse extends Model<operatori_commesseAttributes, operatori_commesseCreationAttributes> implements operatori_commesseAttributes {
  id!: number;
  id_operatore!: number;
  id_commessa!: number;
  note!: string;
  data_ins!: Date;
  ore_1!: number;
  ore_2!: number;
  ore_3!: number;
  ore_4!: number;
  ore_5!: number;
  ore_6!: number;
  ore_7!: number;
  ore_8!: number;
  ore_9!: number;
  ore_10!: number;
  ore_11!: number;
  ore_12!: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof operatori_commesse {
    return operatori_commesse.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    id_operatore: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    id_commessa: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    note: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    data_ins: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('current_timestamp')
    },
    ore_1: {
      type: DataTypes.DECIMAL(5,1),
      allowNull: false,
      defaultValue: 0.0
    },
    ore_2: {
      type: DataTypes.DECIMAL(5,1),
      allowNull: false,
      defaultValue: 0.0
    },
    ore_3: {
      type: DataTypes.DECIMAL(5,1),
      allowNull: false,
      defaultValue: 0.0
    },
    ore_4: {
      type: DataTypes.DECIMAL(5,1),
      allowNull: false,
      defaultValue: 0.0
    },
    ore_5: {
      type: DataTypes.DECIMAL(5,1),
      allowNull: false,
      defaultValue: 0.0
    },
    ore_6: {
      type: DataTypes.DECIMAL(5,1),
      allowNull: false,
      defaultValue: 0.0
    },
    ore_7: {
      type: DataTypes.DECIMAL(5,1),
      allowNull: false,
      defaultValue: 0.0
    },
    ore_8: {
      type: DataTypes.DECIMAL(5,1),
      allowNull: false,
      defaultValue: 0.0
    },
    ore_9: {
      type: DataTypes.DECIMAL(5,1),
      allowNull: false,
      defaultValue: 0.0
    },
    ore_10: {
      type: DataTypes.DECIMAL(5,1),
      allowNull: false,
      defaultValue: 0.0
    },
    ore_11: {
      type: DataTypes.DECIMAL(5,1),
      allowNull: false,
      defaultValue: 0.0
    },
    ore_12: {
      type: DataTypes.DECIMAL(5,1),
      allowNull: false,
      defaultValue: 0.0
    }
  }, {
    sequelize,
    tableName: 'operatori_commesse',
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
