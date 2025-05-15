import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { cdm_letture, cdm_lettureId } from './cdm_letture';

export interface cdm_campiAttributes {
  id_campo: number;
  nome_campo: string;
  unita_misura?: string;
}

export type cdm_campiPk = "id_campo";
export type cdm_campiId = cdm_campi[cdm_campiPk];
export type cdm_campiOptionalAttributes = "id_campo" | "nome_campo" | "unita_misura";
export type cdm_campiCreationAttributes = Optional<cdm_campiAttributes, cdm_campiOptionalAttributes>;

export class cdm_campi extends Model<cdm_campiAttributes, cdm_campiCreationAttributes> implements cdm_campiAttributes {
  id_campo!: number;
  nome_campo!: string;
  unita_misura?: string;

  // cdm_campi hasMany cdm_letture via id_campo
  cdm_lettures!: cdm_letture[];
  getCdm_lettures!: Sequelize.HasManyGetAssociationsMixin<cdm_letture>;
  setCdm_lettures!: Sequelize.HasManySetAssociationsMixin<cdm_letture, cdm_lettureId>;
  addCdm_letture!: Sequelize.HasManyAddAssociationMixin<cdm_letture, cdm_lettureId>;
  addCdm_lettures!: Sequelize.HasManyAddAssociationsMixin<cdm_letture, cdm_lettureId>;
  createCdm_letture!: Sequelize.HasManyCreateAssociationMixin<cdm_letture>;
  removeCdm_letture!: Sequelize.HasManyRemoveAssociationMixin<cdm_letture, cdm_lettureId>;
  removeCdm_lettures!: Sequelize.HasManyRemoveAssociationsMixin<cdm_letture, cdm_lettureId>;
  hasCdm_letture!: Sequelize.HasManyHasAssociationMixin<cdm_letture, cdm_lettureId>;
  hasCdm_lettures!: Sequelize.HasManyHasAssociationsMixin<cdm_letture, cdm_lettureId>;
  countCdm_lettures!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof cdm_campi {
    return cdm_campi.init({
    id_campo: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    nome_campo: {
      type: DataTypes.STRING(45),
      allowNull: false,
      defaultValue: ""
    },
    unita_misura: {
      type: DataTypes.STRING(45),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'cdm_campi',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_campo" },
        ]
      },
    ]
  });
  }
}
