import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { el_classificazioni, el_classificazioniId } from './el_classificazioni';

export interface el_sottocategorieAttributes {
  id_sottocategoria: number;
  nome_sottocategoria: string;
}

export type el_sottocategoriePk = "id_sottocategoria";
export type el_sottocategorieId = el_sottocategorie[el_sottocategoriePk];
export type el_sottocategorieOptionalAttributes = "id_sottocategoria";
export type el_sottocategorieCreationAttributes = Optional<el_sottocategorieAttributes, el_sottocategorieOptionalAttributes>;

export class el_sottocategorie extends Model<el_sottocategorieAttributes, el_sottocategorieCreationAttributes> implements el_sottocategorieAttributes {
  id_sottocategoria!: number;
  nome_sottocategoria!: string;

  // el_sottocategorie hasMany el_classificazioni via id_sottocategoria
  el_classificazionis!: el_classificazioni[];
  getEl_classificazionis!: Sequelize.HasManyGetAssociationsMixin<el_classificazioni>;
  setEl_classificazionis!: Sequelize.HasManySetAssociationsMixin<el_classificazioni, el_classificazioniId>;
  addEl_classificazioni!: Sequelize.HasManyAddAssociationMixin<el_classificazioni, el_classificazioniId>;
  addEl_classificazionis!: Sequelize.HasManyAddAssociationsMixin<el_classificazioni, el_classificazioniId>;
  createEl_classificazioni!: Sequelize.HasManyCreateAssociationMixin<el_classificazioni>;
  removeEl_classificazioni!: Sequelize.HasManyRemoveAssociationMixin<el_classificazioni, el_classificazioniId>;
  removeEl_classificazionis!: Sequelize.HasManyRemoveAssociationsMixin<el_classificazioni, el_classificazioniId>;
  hasEl_classificazioni!: Sequelize.HasManyHasAssociationMixin<el_classificazioni, el_classificazioniId>;
  hasEl_classificazionis!: Sequelize.HasManyHasAssociationsMixin<el_classificazioni, el_classificazioniId>;
  countEl_classificazionis!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof el_sottocategorie {
    return el_sottocategorie.init({
    id_sottocategoria: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    nome_sottocategoria: {
      type: DataTypes.STRING(45),
      allowNull: false,
      unique: "el_sottocategorie_pk"
    }
  }, {
    sequelize,
    tableName: 'el_sottocategorie',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_sottocategoria" },
        ]
      },
      {
        name: "el_sottocategorie_pk",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "nome_sottocategoria" },
        ]
      },
    ]
  });
  }
}
