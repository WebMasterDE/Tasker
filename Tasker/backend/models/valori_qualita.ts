import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface valori_qualitaAttributes {
  anno: string;
  ore_annue?: number;
  costo_tot_annuo?: number;
  ore_lavorate?: number;
}

export type valori_qualitaPk = "anno";
export type valori_qualitaId = valori_qualita[valori_qualitaPk];
export type valori_qualitaOptionalAttributes = "ore_annue" | "costo_tot_annuo" | "ore_lavorate";
export type valori_qualitaCreationAttributes = Optional<valori_qualitaAttributes, valori_qualitaOptionalAttributes>;

export class valori_qualita extends Model<valori_qualitaAttributes, valori_qualitaCreationAttributes> implements valori_qualitaAttributes {
  anno!: string;
  ore_annue?: number;
  costo_tot_annuo?: number;
  ore_lavorate?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof valori_qualita {
    return valori_qualita.init({
    anno: {
      type: DataTypes.STRING(100),
      allowNull: false,
      primaryKey: true
    },
    ore_annue: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    costo_tot_annuo: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    ore_lavorate: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'valori_qualita',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "anno" },
        ]
      },
      {
        name: "anno",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "anno" },
        ]
      },
    ]
  });
  }
}
