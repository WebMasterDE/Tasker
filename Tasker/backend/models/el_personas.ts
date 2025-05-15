import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { anagrafiche, anagraficheId } from './anagrafiche';

export interface el_personasAttributes {
  id_personas: number;
  nome_personas: string;
}

export type el_personasPk = "id_personas";
export type el_personasId = el_personas[el_personasPk];
export type el_personasOptionalAttributes = "id_personas";
export type el_personasCreationAttributes = Optional<el_personasAttributes, el_personasOptionalAttributes>;

export class el_personas extends Model<el_personasAttributes, el_personasCreationAttributes> implements el_personasAttributes {
  id_personas!: number;
  nome_personas!: string;

  // el_personas hasMany anagrafiche via id_personas
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

  static initModel(sequelize: Sequelize.Sequelize): typeof el_personas {
    return el_personas.init({
    id_personas: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    nome_personas: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: "nome_personas"
    }
  }, {
    sequelize,
    tableName: 'el_personas',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_personas" },
        ]
      },
      {
        name: "nome_personas",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "nome_personas" },
        ]
      },
    ]
  });
  }
}
