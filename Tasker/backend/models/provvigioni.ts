import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { ana_operatori, ana_operatoriId } from './ana_operatori';

export interface provvigioniAttributes {
  id_provvigione: number;
  id_operatore: number;
  id_commessa: number;
  provvigione: number;
  premialita: number;
  prov_afatturare: number;
  data_afatturare?: string;
  prov_fatturato: number;
  data_fatturato?: string;
  prov_pagato: number;
  data_pagato?: string;
  id_preventivo?: number;
}

export type provvigioniPk = "id_provvigione";
export type provvigioniId = provvigioni[provvigioniPk];
export type provvigioniOptionalAttributes = "id_provvigione" | "provvigione" | "premialita" | "prov_afatturare" | "data_afatturare" | "prov_fatturato" | "data_fatturato" | "prov_pagato" | "data_pagato" | "id_preventivo";
export type provvigioniCreationAttributes = Optional<provvigioniAttributes, provvigioniOptionalAttributes>;

export class provvigioni extends Model<provvigioniAttributes, provvigioniCreationAttributes> implements provvigioniAttributes {
  id_provvigione!: number;
  id_operatore!: number;
  id_commessa!: number;
  provvigione!: number;
  premialita!: number;
  prov_afatturare!: number;
  data_afatturare?: string;
  prov_fatturato!: number;
  data_fatturato?: string;
  prov_pagato!: number;
  data_pagato?: string;
  id_preventivo?: number;

  // provvigioni belongsTo ana_operatori via id_operatore
  id_operatore_ana_operatori!: ana_operatori;
  getId_operatore_ana_operatori!: Sequelize.BelongsToGetAssociationMixin<ana_operatori>;
  setId_operatore_ana_operatori!: Sequelize.BelongsToSetAssociationMixin<ana_operatori, ana_operatoriId>;
  createId_operatore_ana_operatori!: Sequelize.BelongsToCreateAssociationMixin<ana_operatori>;

  static initModel(sequelize: Sequelize.Sequelize): typeof provvigioni {
    return provvigioni.init({
    id_provvigione: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    id_operatore: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'ana_operatori',
        key: 'id_operatore'
      }
    },
    id_commessa: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    provvigione: {
      type: DataTypes.DECIMAL(4,1),
      allowNull: false,
      defaultValue: 0.0
    },
    premialita: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
      defaultValue: 0.00
    },
    prov_afatturare: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
      defaultValue: 0.00
    },
    data_afatturare: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    prov_fatturato: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
      defaultValue: 0.00
    },
    data_fatturato: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    prov_pagato: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
      defaultValue: 0.00
    },
    data_pagato: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    id_preventivo: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'provvigioni',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_provvigione" },
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
        name: "provvigioni_preventivi_id_preventivo_fk",
        using: "BTREE",
        fields: [
          { name: "id_preventivo" },
        ]
      },
      {
        name: "provvigioni_ana_operatori_id_operatore_fk",
        using: "BTREE",
        fields: [
          { name: "id_operatore" },
        ]
      },
    ]
  });
  }
}
