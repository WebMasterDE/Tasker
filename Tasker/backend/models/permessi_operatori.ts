import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { ana_operatori, ana_operatoriId } from './ana_operatori';
import type { gruppo_operatori, gruppo_operatoriId } from './gruppo_operatori';

export interface permessi_operatoriAttributes {
  id_gruppo: number;
  id_operatore: number;
}

export type permessi_operatoriPk = "id_gruppo" | "id_operatore";
export type permessi_operatoriId = permessi_operatori[permessi_operatoriPk];
export type permessi_operatoriCreationAttributes = permessi_operatoriAttributes;

export class permessi_operatori extends Model<permessi_operatoriAttributes, permessi_operatoriCreationAttributes> implements permessi_operatoriAttributes {
  id_gruppo!: number;
  id_operatore!: number;

  // permessi_operatori belongsTo ana_operatori via id_operatore
  id_operatore_ana_operatori!: ana_operatori;
  getId_operatore_ana_operatori!: Sequelize.BelongsToGetAssociationMixin<ana_operatori>;
  setId_operatore_ana_operatori!: Sequelize.BelongsToSetAssociationMixin<ana_operatori, ana_operatoriId>;
  createId_operatore_ana_operatori!: Sequelize.BelongsToCreateAssociationMixin<ana_operatori>;
  // permessi_operatori belongsTo gruppo_operatori via id_gruppo
  id_gruppo_gruppo_operatori!: gruppo_operatori;
  getId_gruppo_gruppo_operatori!: Sequelize.BelongsToGetAssociationMixin<gruppo_operatori>;
  setId_gruppo_gruppo_operatori!: Sequelize.BelongsToSetAssociationMixin<gruppo_operatori, gruppo_operatoriId>;
  createId_gruppo_gruppo_operatori!: Sequelize.BelongsToCreateAssociationMixin<gruppo_operatori>;

  static initModel(sequelize: Sequelize.Sequelize): typeof permessi_operatori {
    return permessi_operatori.init({
    id_gruppo: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'gruppo_operatori',
        key: 'id_gruppo'
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
    }
  }, {
    sequelize,
    tableName: 'permessi_operatori',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_gruppo" },
          { name: "id_operatore" },
        ]
      },
      {
        name: "permessi_operatori_id_gruppo_id_operatore_unique",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_gruppo" },
          { name: "id_operatore" },
        ]
      },
      {
        name: "id_operatore",
        using: "BTREE",
        fields: [
          { name: "id_operatore" },
        ]
      },
      {
        name: "FK_permessi_operatori_1",
        using: "BTREE",
        fields: [
          { name: "id_gruppo" },
        ]
      },
    ]
  });
  }
}
