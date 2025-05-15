import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { condomini, condominiId } from './condomini';

export interface cdm_marcheAttributes {
  id_marca: number;
  nome_marca: string;
}

export type cdm_marchePk = "id_marca";
export type cdm_marcheId = cdm_marche[cdm_marchePk];
export type cdm_marcheOptionalAttributes = "id_marca" | "nome_marca";
export type cdm_marcheCreationAttributes = Optional<cdm_marcheAttributes, cdm_marcheOptionalAttributes>;

export class cdm_marche extends Model<cdm_marcheAttributes, cdm_marcheCreationAttributes> implements cdm_marcheAttributes {
  id_marca!: number;
  nome_marca!: string;

  // cdm_marche hasMany condomini via id_marca
  condominis!: condomini[];
  getCondominis!: Sequelize.HasManyGetAssociationsMixin<condomini>;
  setCondominis!: Sequelize.HasManySetAssociationsMixin<condomini, condominiId>;
  addCondomini!: Sequelize.HasManyAddAssociationMixin<condomini, condominiId>;
  addCondominis!: Sequelize.HasManyAddAssociationsMixin<condomini, condominiId>;
  createCondomini!: Sequelize.HasManyCreateAssociationMixin<condomini>;
  removeCondomini!: Sequelize.HasManyRemoveAssociationMixin<condomini, condominiId>;
  removeCondominis!: Sequelize.HasManyRemoveAssociationsMixin<condomini, condominiId>;
  hasCondomini!: Sequelize.HasManyHasAssociationMixin<condomini, condominiId>;
  hasCondominis!: Sequelize.HasManyHasAssociationsMixin<condomini, condominiId>;
  countCondominis!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof cdm_marche {
    return cdm_marche.init({
    id_marca: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    nome_marca: {
      type: DataTypes.STRING(45),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'cdm_marche',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_marca" },
        ]
      },
    ]
  });
  }
}
