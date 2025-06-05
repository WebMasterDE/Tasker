import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { anagrafiche, anagraficheId } from './anagrafiche';

export interface ana_tipologieAttributes {
  id_tipologia: number;
  nome_tipologia: string;
}

export type ana_tipologiePk = "id_tipologia";
export type ana_tipologieId = ana_tipologie[ana_tipologiePk];
export type ana_tipologieOptionalAttributes = "id_tipologia";
export type ana_tipologieCreationAttributes = Optional<ana_tipologieAttributes, ana_tipologieOptionalAttributes>;

export class ana_tipologie extends Model<ana_tipologieAttributes, ana_tipologieCreationAttributes> implements ana_tipologieAttributes {
  id_tipologia!: number;
  nome_tipologia!: string;

  // ana_tipologie hasMany anagrafiche via id_tipologia
  anagrafiches!: anagrafiche[];
  getAnagrafiches!: Sequelize.HasManyGetAssociationsMixin<anagrafiche>;
  setAnagrafiches!: Sequelize.HasManySetAssociationsMixin<anagrafiche, anagraficheId>;
  addAnagrafich!: Sequelize.HasManyAddAssociationMixin<anagrafiche, anagraficheId>;
  addAnagrafiches!: Sequelize.HasManyAddAssociationsMixin<anagrafiche, anagraficheId>;
  createAnagrafich!: Sequelize.HasManyCreateAssociationMixin<anagrafiche>;
  removeAnagrafich!: Sequelize.HasManyRemoveAssociationMixin<anagrafiche, anagraficheId>;
  removeAnagrafiches!: Sequelize.HasManyRemoveAssociationsMixin<anagrafiche, anagraficheId>;
  hasAnagrafich!: Sequelize.HasManyHasAssociationMixin<anagrafiche, anagraficheId>;
  hasAnagrafiches!: Sequelize.HasManyHasAssociationsMixin<anagrafiche, anagraficheId>;
  countAnagrafiches!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof ana_tipologie {
    return ana_tipologie.init({
    id_tipologia: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    nome_tipologia: {
      type: DataTypes.STRING(45),
      allowNull: false,
      unique: "ana_tipologie_pk"
    }
  }, {
    sequelize,
    tableName: 'ana_tipologie',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_tipologia" },
        ]
      },
      {
        name: "ana_tipologie_pk",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "nome_tipologia" },
        ]
      },
    ]
  });
  }
}
