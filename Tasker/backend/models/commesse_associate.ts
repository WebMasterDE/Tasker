import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { commesse, commesseId } from './commesse';

export interface commesse_associateAttributes {
  id_commessa_padre: number;
  id_commessa_assoc: number;
}

export type commesse_associatePk = "id_commessa_padre" | "id_commessa_assoc";
export type commesse_associateId = commesse_associate[commesse_associatePk];
export type commesse_associateCreationAttributes = commesse_associateAttributes;

export class commesse_associate extends Model<commesse_associateAttributes, commesse_associateCreationAttributes> implements commesse_associateAttributes {
  id_commessa_padre!: number;
  id_commessa_assoc!: number;

  // commesse_associate belongsTo commesse via id_commessa_padre
  id_commessa_padre_commesse!: commesse;
  getId_commessa_padre_commesse!: Sequelize.BelongsToGetAssociationMixin<commesse>;
  setId_commessa_padre_commesse!: Sequelize.BelongsToSetAssociationMixin<commesse, commesseId>;
  createId_commessa_padre_commesse!: Sequelize.BelongsToCreateAssociationMixin<commesse>;
  // commesse_associate belongsTo commesse via id_commessa_assoc
  id_commessa_assoc_commesse!: commesse;
  getId_commessa_assoc_commesse!: Sequelize.BelongsToGetAssociationMixin<commesse>;
  setId_commessa_assoc_commesse!: Sequelize.BelongsToSetAssociationMixin<commesse, commesseId>;
  createId_commessa_assoc_commesse!: Sequelize.BelongsToCreateAssociationMixin<commesse>;

  static initModel(sequelize: Sequelize.Sequelize): typeof commesse_associate {
    return commesse_associate.init({
    id_commessa_padre: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'commesse',
        key: 'id_commessa'
      }
    },
    id_commessa_assoc: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'commesse',
        key: 'id_commessa'
      }
    }
  }, {
    sequelize,
    tableName: 'commesse_associate',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_commessa_padre" },
          { name: "id_commessa_assoc" },
        ]
      },
      {
        name: "commesse_associate_id_commessa_assoc_id_commessa_padre_unique",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_commessa_padre" },
          { name: "id_commessa_assoc" },
        ]
      },
      {
        name: "commesse_associate_commesse_id_commessa_fk_2",
        using: "BTREE",
        fields: [
          { name: "id_commessa_assoc" },
        ]
      },
    ]
  });
  }
}
