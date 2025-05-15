import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface gt_timetableAttributes {
  id: number;
  id_timetable: number;
  gt_taskId: number;
  ore_lavoro: number;
}

export type gt_timetablePk = "id";
export type gt_timetableId = gt_timetable[gt_timetablePk];
export type gt_timetableOptionalAttributes = "id" | "id_timetable" | "gt_taskId" | "ore_lavoro";
export type gt_timetableCreationAttributes = Optional<gt_timetableAttributes, gt_timetableOptionalAttributes>;

export class gt_timetable extends Model<gt_timetableAttributes, gt_timetableCreationAttributes> implements gt_timetableAttributes {
  id!: number;
  id_timetable!: number;
  gt_taskId!: number;
  ore_lavoro!: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof gt_timetable {
    return gt_timetable.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    id_timetable: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    gt_taskId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    ore_lavoro: {
      type: DataTypes.DECIMAL(2,1),
      allowNull: false,
      defaultValue: 0.0
    }
  }, {
    sequelize,
    tableName: 'gt_timetable',
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
