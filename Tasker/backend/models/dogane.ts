import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { commesse, commesseId } from './commesse';

export interface doganeAttributes {
  id_dogana: number;
  id_commessa: number;
  regime_commerciale?: 'Nuovo' | 'Nuovo Cessione Totale' | 'Esistente' | 'Esistente Cessione Totale';
  anno?: number;
  ult_mod_anno?: number;
  ult_mod_regime_comm?: number;
}

export type doganePk = "id_dogana";
export type doganeId = dogane[doganePk];
export type doganeOptionalAttributes = "id_dogana" | "regime_commerciale" | "anno" | "ult_mod_anno" | "ult_mod_regime_comm";
export type doganeCreationAttributes = Optional<doganeAttributes, doganeOptionalAttributes>;

export class dogane extends Model<doganeAttributes, doganeCreationAttributes> implements doganeAttributes {
  id_dogana!: number;
  id_commessa!: number;
  regime_commerciale?: 'Nuovo' | 'Nuovo Cessione Totale' | 'Esistente' | 'Esistente Cessione Totale';
  anno?: number;
  ult_mod_anno?: number;
  ult_mod_regime_comm?: number;

  // dogane belongsTo commesse via id_commessa
  id_commessa_commesse!: commesse;
  getId_commessa_commesse!: Sequelize.BelongsToGetAssociationMixin<commesse>;
  setId_commessa_commesse!: Sequelize.BelongsToSetAssociationMixin<commesse, commesseId>;
  createId_commessa_commesse!: Sequelize.BelongsToCreateAssociationMixin<commesse>;

  static initModel(sequelize: Sequelize.Sequelize): typeof dogane {
    return dogane.init({
    id_dogana: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    id_commessa: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'commesse',
        key: 'id_commessa'
      }
    },
    regime_commerciale: {
      type: DataTypes.ENUM('Nuovo','Nuovo Cessione Totale','Esistente','Esistente Cessione Totale'),
      allowNull: true
    },
    anno: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ult_mod_anno: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    ult_mod_regime_comm: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'dogane',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_dogana" },
        ]
      },
      {
        name: "dogane_commesse_id_commessa_fk",
        using: "BTREE",
        fields: [
          { name: "id_commessa" },
        ]
      },
    ]
  });
  }
}
