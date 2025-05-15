import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { ana_operatori, ana_operatoriId } from './ana_operatori';
import type { qualifiche, qualificheId } from './qualifiche';

export interface qualifiche_operatoriAttributes {
  id_qualifica: number;
  id_operatori: number;
}

export type qualifiche_operatoriPk = "id_qualifica" | "id_operatori";
export type qualifiche_operatoriId = qualifiche_operatori[qualifiche_operatoriPk];
export type qualifiche_operatoriCreationAttributes = qualifiche_operatoriAttributes;

export class qualifiche_operatori extends Model<qualifiche_operatoriAttributes, qualifiche_operatoriCreationAttributes> implements qualifiche_operatoriAttributes {
  id_qualifica!: number;
  id_operatori!: number;

  // qualifiche_operatori belongsTo ana_operatori via id_operatori
  id_operatori_ana_operatori!: ana_operatori;
  getId_operatori_ana_operatori!: Sequelize.BelongsToGetAssociationMixin<ana_operatori>;
  setId_operatori_ana_operatori!: Sequelize.BelongsToSetAssociationMixin<ana_operatori, ana_operatoriId>;
  createId_operatori_ana_operatori!: Sequelize.BelongsToCreateAssociationMixin<ana_operatori>;
  // qualifiche_operatori belongsTo qualifiche via id_qualifica
  id_qualifica_qualifiche!: qualifiche;
  getId_qualifica_qualifiche!: Sequelize.BelongsToGetAssociationMixin<qualifiche>;
  setId_qualifica_qualifiche!: Sequelize.BelongsToSetAssociationMixin<qualifiche, qualificheId>;
  createId_qualifica_qualifiche!: Sequelize.BelongsToCreateAssociationMixin<qualifiche>;

  static initModel(sequelize: Sequelize.Sequelize): typeof qualifiche_operatori {
    return qualifiche_operatori.init({
    id_qualifica: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'qualifiche',
        key: 'id'
      }
    },
    id_operatori: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'ana_operatori',
        key: 'id_operatore'
      }
    }
  }, {
    sequelize,
    tableName: 'qualifiche_operatori',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_qualifica" },
          { name: "id_operatori" },
        ]
      },
      {
        name: "qualifiche_operatori_id_qualifica_id_operatori_unique",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_qualifica" },
          { name: "id_operatori" },
        ]
      },
      {
        name: "qualifiche_operatori_ana_operatori_id_operatore_fk",
        using: "BTREE",
        fields: [
          { name: "id_operatori" },
        ]
      },
    ]
  });
  }
}
