import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { acquisti, acquistiId } from './acquisti';
import type { commesse, commesseId } from './commesse';

export interface monitoraggio_odaAttributes {
  id_oda: number;
  id_commessa: number;
  data_inizio: string;
  data_fine: string;
}

export type monitoraggio_odaPk = "id_oda" | "id_commessa";
export type monitoraggio_odaId = monitoraggio_oda[monitoraggio_odaPk];
export type monitoraggio_odaCreationAttributes = monitoraggio_odaAttributes;

export class monitoraggio_oda extends Model<monitoraggio_odaAttributes, monitoraggio_odaCreationAttributes> implements monitoraggio_odaAttributes {
  id_oda!: number;
  id_commessa!: number;
  data_inizio!: string;
  data_fine!: string;

  // monitoraggio_oda belongsTo acquisti via id_oda
  id_oda_acquisti!: acquisti;
  getId_oda_acquisti!: Sequelize.BelongsToGetAssociationMixin<acquisti>;
  setId_oda_acquisti!: Sequelize.BelongsToSetAssociationMixin<acquisti, acquistiId>;
  createId_oda_acquisti!: Sequelize.BelongsToCreateAssociationMixin<acquisti>;
  // monitoraggio_oda belongsTo commesse via id_commessa
  id_commessa_commesse!: commesse;
  getId_commessa_commesse!: Sequelize.BelongsToGetAssociationMixin<commesse>;
  setId_commessa_commesse!: Sequelize.BelongsToSetAssociationMixin<commesse, commesseId>;
  createId_commessa_commesse!: Sequelize.BelongsToCreateAssociationMixin<commesse>;

  static initModel(sequelize: Sequelize.Sequelize): typeof monitoraggio_oda {
    return monitoraggio_oda.init({
    id_oda: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'acquisti',
        key: 'id_acquisto'
      }
    },
    id_commessa: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'commesse',
        key: 'id_commessa'
      }
    },
    data_inizio: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    data_fine: {
      type: DataTypes.DATEONLY,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'monitoraggio_oda',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_oda" },
          { name: "id_commessa" },
        ]
      },
      {
        name: "monitoraggio_oda_id_commessa_id_oda_unique",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_oda" },
          { name: "id_commessa" },
        ]
      },
      {
        name: "monitoraggio_oda_commesse_id_commessa_fk",
        using: "BTREE",
        fields: [
          { name: "id_commessa" },
        ]
      },
    ]
  });
  }
}
