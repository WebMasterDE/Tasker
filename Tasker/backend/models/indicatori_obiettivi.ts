import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface indicatori_obiettiviAttributes {
  id_obiettivo: number;
  nome: string;
  id_settori: string;
  anno: string;
  obiettivo_gen: number;
  obiettivo_feb: number;
  obiettivo_mar: number;
  obiettivo_apr: number;
  obiettivo_mag: number;
  obiettivo_giu: number;
  obiettivo_lug: number;
  obiettivo_ago: number;
  obiettivo_set: number;
  obiettivo_ott: number;
  obiettivo_nov: number;
  obiettivo_dic: number;
  obiettivo_min_gen: number;
  obiettivo_min_feb: number;
  obiettivo_min_mar: number;
  obiettivo_min_apr: number;
  obiettivo_min_mag: number;
  obiettivo_min_giu: number;
  obiettivo_min_lug: number;
  obiettivo_min_ago: number;
  obiettivo_min_set: number;
  obiettivo_min_ott: number;
  obiettivo_min_nov: number;
  obiettivo_min_dic: number;
  colore?: string;
  grafico_importo: number;
  grafico_importo_fatturato: number;
  grafico_importo_pagato: number;
}

export type indicatori_obiettiviPk = "id_obiettivo";
export type indicatori_obiettiviId = indicatori_obiettivi[indicatori_obiettiviPk];
export type indicatori_obiettiviOptionalAttributes = "id_obiettivo" | "obiettivo_gen" | "obiettivo_feb" | "obiettivo_mar" | "obiettivo_apr" | "obiettivo_mag" | "obiettivo_giu" | "obiettivo_lug" | "obiettivo_ago" | "obiettivo_set" | "obiettivo_ott" | "obiettivo_nov" | "obiettivo_dic" | "obiettivo_min_gen" | "obiettivo_min_feb" | "obiettivo_min_mar" | "obiettivo_min_apr" | "obiettivo_min_mag" | "obiettivo_min_giu" | "obiettivo_min_lug" | "obiettivo_min_ago" | "obiettivo_min_set" | "obiettivo_min_ott" | "obiettivo_min_nov" | "obiettivo_min_dic" | "colore" | "grafico_importo" | "grafico_importo_fatturato" | "grafico_importo_pagato";
export type indicatori_obiettiviCreationAttributes = Optional<indicatori_obiettiviAttributes, indicatori_obiettiviOptionalAttributes>;

export class indicatori_obiettivi extends Model<indicatori_obiettiviAttributes, indicatori_obiettiviCreationAttributes> implements indicatori_obiettiviAttributes {
  id_obiettivo!: number;
  nome!: string;
  id_settori!: string;
  anno!: string;
  obiettivo_gen!: number;
  obiettivo_feb!: number;
  obiettivo_mar!: number;
  obiettivo_apr!: number;
  obiettivo_mag!: number;
  obiettivo_giu!: number;
  obiettivo_lug!: number;
  obiettivo_ago!: number;
  obiettivo_set!: number;
  obiettivo_ott!: number;
  obiettivo_nov!: number;
  obiettivo_dic!: number;
  obiettivo_min_gen!: number;
  obiettivo_min_feb!: number;
  obiettivo_min_mar!: number;
  obiettivo_min_apr!: number;
  obiettivo_min_mag!: number;
  obiettivo_min_giu!: number;
  obiettivo_min_lug!: number;
  obiettivo_min_ago!: number;
  obiettivo_min_set!: number;
  obiettivo_min_ott!: number;
  obiettivo_min_nov!: number;
  obiettivo_min_dic!: number;
  colore?: string;
  grafico_importo!: number;
  grafico_importo_fatturato!: number;
  grafico_importo_pagato!: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof indicatori_obiettivi {
    return indicatori_obiettivi.init({
    id_obiettivo: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    nome: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    id_settori: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    anno: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    obiettivo_gen: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
      defaultValue: 0.00
    },
    obiettivo_feb: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
      defaultValue: 0.00
    },
    obiettivo_mar: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
      defaultValue: 0.00
    },
    obiettivo_apr: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
      defaultValue: 0.00
    },
    obiettivo_mag: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
      defaultValue: 0.00
    },
    obiettivo_giu: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
      defaultValue: 0.00
    },
    obiettivo_lug: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
      defaultValue: 0.00
    },
    obiettivo_ago: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
      defaultValue: 0.00
    },
    obiettivo_set: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
      defaultValue: 0.00
    },
    obiettivo_ott: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
      defaultValue: 0.00
    },
    obiettivo_nov: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
      defaultValue: 0.00
    },
    obiettivo_dic: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
      defaultValue: 0.00
    },
    obiettivo_min_gen: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
      defaultValue: 0.00
    },
    obiettivo_min_feb: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
      defaultValue: 0.00
    },
    obiettivo_min_mar: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
      defaultValue: 0.00
    },
    obiettivo_min_apr: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
      defaultValue: 0.00
    },
    obiettivo_min_mag: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
      defaultValue: 0.00
    },
    obiettivo_min_giu: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
      defaultValue: 0.00
    },
    obiettivo_min_lug: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
      defaultValue: 0.00
    },
    obiettivo_min_ago: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
      defaultValue: 0.00
    },
    obiettivo_min_set: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
      defaultValue: 0.00
    },
    obiettivo_min_ott: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
      defaultValue: 0.00
    },
    obiettivo_min_nov: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
      defaultValue: 0.00
    },
    obiettivo_min_dic: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
      defaultValue: 0.00
    },
    colore: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    grafico_importo: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    },
    grafico_importo_fatturato: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    },
    grafico_importo_pagato: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    }
  }, {
    sequelize,
    tableName: 'indicatori_obiettivi',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_obiettivo" },
        ]
      },
    ]
  });
  }
}
