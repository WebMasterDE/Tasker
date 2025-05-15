import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { condomini, condominiId } from './condomini';

export interface marche_simAttributes {
  id: number;
  nome: string;
}

export type marche_simPk = "id";
export type marche_simId = marche_sim[marche_simPk];
export type marche_simOptionalAttributes = "id";
export type marche_simCreationAttributes = Optional<marche_simAttributes, marche_simOptionalAttributes>;

export class marche_sim extends Model<marche_simAttributes, marche_simCreationAttributes> implements marche_simAttributes {
  id!: number;
  nome!: string;

  // marche_sim hasMany condomini via marca_SIM
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

  static initModel(sequelize: Sequelize.Sequelize): typeof marche_sim {
    return marche_sim.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    nome: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: "marche_SIM_pk_2"
    }
  }, {
    sequelize,
    tableName: 'marche_sim',
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
        name: "marche_SIM_pk_2",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "nome" },
        ]
      },
      {
        name: "marche_SIM_nome_index",
        using: "BTREE",
        fields: [
          { name: "nome" },
        ]
      },
    ]
  });
  }
}
