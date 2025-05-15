import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { ana_operatori, ana_operatoriId } from './ana_operatori';
import type { el_settori, el_settoriId } from './el_settori';

export interface settore_operatoriAttributes {
  id_settore: number;
  id_operatore: number;
  data_da: string;
  data_a: string;
}

export type settore_operatoriPk = "id_settore" | "id_operatore" | "data_da" | "data_a";
export type settore_operatoriId = settore_operatori[settore_operatoriPk];
export type settore_operatoriCreationAttributes = settore_operatoriAttributes;

export class settore_operatori extends Model<settore_operatoriAttributes, settore_operatoriCreationAttributes> implements settore_operatoriAttributes {
  id_settore!: number;
  id_operatore!: number;
  data_da!: string;
  data_a!: string;

  // settore_operatori belongsTo ana_operatori via id_operatore
  id_operatore_ana_operatori!: ana_operatori;
  getId_operatore_ana_operatori!: Sequelize.BelongsToGetAssociationMixin<ana_operatori>;
  setId_operatore_ana_operatori!: Sequelize.BelongsToSetAssociationMixin<ana_operatori, ana_operatoriId>;
  createId_operatore_ana_operatori!: Sequelize.BelongsToCreateAssociationMixin<ana_operatori>;
  // settore_operatori belongsTo el_settori via id_settore
  id_settore_el_settori!: el_settori;
  getId_settore_el_settori!: Sequelize.BelongsToGetAssociationMixin<el_settori>;
  setId_settore_el_settori!: Sequelize.BelongsToSetAssociationMixin<el_settori, el_settoriId>;
  createId_settore_el_settori!: Sequelize.BelongsToCreateAssociationMixin<el_settori>;

  static initModel(sequelize: Sequelize.Sequelize): typeof settore_operatori {
    return settore_operatori.init({
    id_settore: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'el_settori',
        key: 'id_settore'
      }
    },
    id_operatore: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'ana_operatori',
        key: 'id_operatore'
      }
    },
    data_da: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      primaryKey: true
    },
    data_a: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'settore_operatori',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_settore" },
          { name: "id_operatore" },
          { name: "data_da" },
          { name: "data_a" },
        ]
      },
      {
        name: "settore_operatori_id_settore_id_operatore_unique",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_settore" },
          { name: "id_operatore" },
        ]
      },
      {
        name: "settore_operatori_ana_operatori_id_operatore_fk",
        using: "BTREE",
        fields: [
          { name: "id_operatore" },
        ]
      },
      {
        name: "settore_operatori_el_settori_id_settore_fk",
        using: "BTREE",
        fields: [
          { name: "id_settore" },
        ]
      },
    ]
  });
  }
}
