import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { ana_operatori, ana_operatoriId } from './ana_operatori';

export interface costo_operatoriAttributes {
  id_costo: number;
  costo_orario: number;
  data_da: string;
  data_a: string;
  id_operatore: number;
}

export type costo_operatoriPk = "id_costo";
export type costo_operatoriId = costo_operatori[costo_operatoriPk];
export type costo_operatoriOptionalAttributes = "id_costo" | "costo_orario";
export type costo_operatoriCreationAttributes = Optional<costo_operatoriAttributes, costo_operatoriOptionalAttributes>;

export class costo_operatori extends Model<costo_operatoriAttributes, costo_operatoriCreationAttributes> implements costo_operatoriAttributes {
  id_costo!: number;
  costo_orario!: number;
  data_da!: string;
  data_a!: string;
  id_operatore!: number;

  // costo_operatori belongsTo ana_operatori via id_operatore
  id_operatore_ana_operatori!: ana_operatori;
  getId_operatore_ana_operatori!: Sequelize.BelongsToGetAssociationMixin<ana_operatori>;
  setId_operatore_ana_operatori!: Sequelize.BelongsToSetAssociationMixin<ana_operatori, ana_operatoriId>;
  createId_operatore_ana_operatori!: Sequelize.BelongsToCreateAssociationMixin<ana_operatori>;

  static initModel(sequelize: Sequelize.Sequelize): typeof costo_operatori {
    return costo_operatori.init({
    id_costo: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    costo_orario: {
      type: DataTypes.DECIMAL(5,2),
      allowNull: false,
      defaultValue: 0.00
    },
    data_da: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    data_a: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    id_operatore: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'ana_operatori',
        key: 'id_operatore'
      }
    }
  }, {
    sequelize,
    tableName: 'costo_operatori',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_costo" },
        ]
      },
      {
        name: "FK_costo_operatori_1",
        using: "BTREE",
        fields: [
          { name: "id_operatore" },
        ]
      },
    ]
  });
  }
}
