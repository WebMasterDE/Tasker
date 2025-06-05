import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface indicatoriAttributes {
  id: number;
  data: Date;
  cod_commessa?: string;
  cod_settore?: string;
  imp_lavori: number;
  imp_fatturato: number;
  imp_incassato: number;
  imp_spese: number;
  imp_spese_da_fatturare: number;
  imp_spese_fatturate: number;
  imp_da_fatturare: number;
  imp_da_incassare: number;
  budget_residuo: number;
  ore_lavoro: number;
  imp_spese_da_pagare: number;
  imp_spese_pagate: number;
  committente?: string;
  cliente?: string;
  report_number?: number;
}

export type indicatoriPk = "id";
export type indicatoriId = indicatori[indicatoriPk];
export type indicatoriOptionalAttributes = "id" | "data" | "cod_commessa" | "cod_settore" | "imp_lavori" | "imp_fatturato" | "imp_incassato" | "imp_spese" | "imp_spese_da_fatturare" | "imp_spese_fatturate" | "imp_da_fatturare" | "imp_da_incassare" | "budget_residuo" | "ore_lavoro" | "imp_spese_da_pagare" | "imp_spese_pagate" | "committente" | "cliente" | "report_number";
export type indicatoriCreationAttributes = Optional<indicatoriAttributes, indicatoriOptionalAttributes>;

export class indicatori extends Model<indicatoriAttributes, indicatoriCreationAttributes> implements indicatoriAttributes {
  id!: number;
  data!: Date;
  cod_commessa?: string;
  cod_settore?: string;
  imp_lavori!: number;
  imp_fatturato!: number;
  imp_incassato!: number;
  imp_spese!: number;
  imp_spese_da_fatturare!: number;
  imp_spese_fatturate!: number;
  imp_da_fatturare!: number;
  imp_da_incassare!: number;
  budget_residuo!: number;
  ore_lavoro!: number;
  imp_spese_da_pagare!: number;
  imp_spese_pagate!: number;
  committente?: string;
  cliente?: string;
  report_number?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof indicatori {
    return indicatori.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    data: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('current_timestamp')
    },
    cod_commessa: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    cod_settore: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    imp_lavori: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
      defaultValue: 0.00
    },
    imp_fatturato: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
      defaultValue: 0.00
    },
    imp_incassato: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
      defaultValue: 0.00
    },
    imp_spese: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
      defaultValue: 0.00
    },
    imp_spese_da_fatturare: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
      defaultValue: 0.00
    },
    imp_spese_fatturate: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
      defaultValue: 0.00
    },
    imp_da_fatturare: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
      defaultValue: 0.00
    },
    imp_da_incassare: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
      defaultValue: 0.00
    },
    budget_residuo: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
      defaultValue: 0.00
    },
    ore_lavoro: {
      type: DataTypes.DECIMAL(5,1),
      allowNull: false,
      defaultValue: 0.0
    },
    imp_spese_da_pagare: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
      defaultValue: 0.00
    },
    imp_spese_pagate: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
      defaultValue: 0.00
    },
    committente: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    cliente: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    report_number: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'indicatori',
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
