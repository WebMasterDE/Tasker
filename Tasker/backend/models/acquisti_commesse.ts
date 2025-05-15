import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { acquisti, acquistiId } from './acquisti';
import type { commesse, commesseId } from './commesse';

export interface acquisti_commesseAttributes {
  id_acquisto: number;
  id_commessa: number;
  importo_acquisto: number;
}

export type acquisti_commessePk = "id_acquisto" | "id_commessa";
export type acquisti_commesseId = acquisti_commesse[acquisti_commessePk];
export type acquisti_commesseOptionalAttributes = "id_acquisto" | "id_commessa" | "importo_acquisto";
export type acquisti_commesseCreationAttributes = Optional<acquisti_commesseAttributes, acquisti_commesseOptionalAttributes>;

export class acquisti_commesse extends Model<acquisti_commesseAttributes, acquisti_commesseCreationAttributes> implements acquisti_commesseAttributes {
  id_acquisto!: number;
  id_commessa!: number;
  importo_acquisto!: number;

  // acquisti_commesse belongsTo acquisti via id_acquisto
  id_acquisto_acquisti!: acquisti;
  getId_acquisto_acquisti!: Sequelize.BelongsToGetAssociationMixin<acquisti>;
  setId_acquisto_acquisti!: Sequelize.BelongsToSetAssociationMixin<acquisti, acquistiId>;
  createId_acquisto_acquisti!: Sequelize.BelongsToCreateAssociationMixin<acquisti>;
  // acquisti_commesse belongsTo commesse via id_commessa
  id_commessa_commesse!: commesse;
  getId_commessa_commesse!: Sequelize.BelongsToGetAssociationMixin<commesse>;
  setId_commessa_commesse!: Sequelize.BelongsToSetAssociationMixin<commesse, commesseId>;
  createId_commessa_commesse!: Sequelize.BelongsToCreateAssociationMixin<commesse>;

  static initModel(sequelize: Sequelize.Sequelize): typeof acquisti_commesse {
    return acquisti_commesse.init({
    id_acquisto: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true,
      references: {
        model: 'acquisti',
        key: 'id_acquisto'
      }
    },
    id_commessa: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true,
      references: {
        model: 'commesse',
        key: 'id_commessa'
      }
    },
    importo_acquisto: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
      defaultValue: 0.00
    }
  }, {
    sequelize,
    tableName: 'acquisti_commesse',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_acquisto" },
          { name: "id_commessa" },
        ]
      },
      {
        name: "acquisti_commesse_id_commessa_id_acquisto_unique",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_acquisto" },
          { name: "id_commessa" },
        ]
      },
      {
        name: "FK_acquisti_commesse_1",
        using: "BTREE",
        fields: [
          { name: "id_acquisto" },
        ]
      },
      {
        name: "FK_acquisti_commesse_2",
        using: "BTREE",
        fields: [
          { name: "id_commessa" },
        ]
      },
    ]
  });
  }
}
