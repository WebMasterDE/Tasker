import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { el_classificazioni, el_classificazioniId } from './el_classificazioni';

export interface el_categorieAttributes {
  id_categoria: number;
  nome_categoria: string;
}

export type el_categoriePk = "id_categoria";
export type el_categorieId = el_categorie[el_categoriePk];
export type el_categorieOptionalAttributes = "id_categoria";
export type el_categorieCreationAttributes = Optional<el_categorieAttributes, el_categorieOptionalAttributes>;

export class el_categorie extends Model<el_categorieAttributes, el_categorieCreationAttributes> implements el_categorieAttributes {
  id_categoria!: number;
  nome_categoria!: string;

  // el_categorie hasMany el_classificazioni via id_categoria
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

  static initModel(sequelize: Sequelize.Sequelize): typeof el_categorie {
    return el_categorie.init({
    id_categoria: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    nome_categoria: {
      type: DataTypes.STRING(45),
      allowNull: false,
      unique: "el_categorie_pk"
    }
  }, {
    sequelize,
    tableName: 'el_categorie',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_categoria" },
        ]
      },
      {
        name: "el_categorie_pk",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "nome_categoria" },
        ]
      },
    ]
  });
  }
}
