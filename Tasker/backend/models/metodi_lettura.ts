import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { condomini, condominiId } from './condomini';

export interface metodi_letturaAttributes {
  id: number;
  nome: string;
}

export type metodi_letturaPk = "id";
export type metodi_letturaId = metodi_lettura[metodi_letturaPk];
export type metodi_letturaOptionalAttributes = "id";
export type metodi_letturaCreationAttributes = Optional<metodi_letturaAttributes, metodi_letturaOptionalAttributes>;

export class metodi_lettura extends Model<metodi_letturaAttributes, metodi_letturaCreationAttributes> implements metodi_letturaAttributes {
  id!: number;
  nome!: string;

  // metodi_lettura hasMany condomini via metodo_lettura
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

  static initModel(sequelize: Sequelize.Sequelize): typeof metodi_lettura {
    return metodi_lettura.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    nome: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: "metodi_lettura_pk"
    }
  }, {
    sequelize,
    tableName: 'metodi_lettura',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "metodi_lettura_pk",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "nome" },
        ]
      },
      {
        name: "metodi_lettura_nome_index",
        using: "BTREE",
        fields: [
          { name: "nome" },
        ]
      },
    ]
  });
  }
}
