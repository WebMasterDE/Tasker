import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { ana_operatori, ana_operatoriId } from './ana_operatori';
import type { qualifiche_operatori, qualifiche_operatoriId } from './qualifiche_operatori';

export interface qualificheAttributes {
  id: number;
  nome: string;
}

export type qualifichePk = "id";
export type qualificheId = qualifiche[qualifichePk];
export type qualificheOptionalAttributes = "id";
export type qualificheCreationAttributes = Optional<qualificheAttributes, qualificheOptionalAttributes>;

export class qualifiche extends Model<qualificheAttributes, qualificheCreationAttributes> implements qualificheAttributes {
  id!: number;
  nome!: string;

  // qualifiche belongsToMany ana_operatori via id_qualifica and id_operatori
  id_operatori_ana_operatoris!: ana_operatori[];
  getId_operatori_ana_operatoris!: Sequelize.BelongsToManyGetAssociationsMixin<ana_operatori>;
  setId_operatori_ana_operatoris!: Sequelize.BelongsToManySetAssociationsMixin<ana_operatori, ana_operatoriId>;
  addId_operatori_ana_operatori!: Sequelize.BelongsToManyAddAssociationMixin<ana_operatori, ana_operatoriId>;
  addId_operatori_ana_operatoris!: Sequelize.BelongsToManyAddAssociationsMixin<ana_operatori, ana_operatoriId>;
  createId_operatori_ana_operatori!: Sequelize.BelongsToManyCreateAssociationMixin<ana_operatori>;
  removeId_operatori_ana_operatori!: Sequelize.BelongsToManyRemoveAssociationMixin<ana_operatori, ana_operatoriId>;
  removeId_operatori_ana_operatoris!: Sequelize.BelongsToManyRemoveAssociationsMixin<ana_operatori, ana_operatoriId>;
  hasId_operatori_ana_operatori!: Sequelize.BelongsToManyHasAssociationMixin<ana_operatori, ana_operatoriId>;
  hasId_operatori_ana_operatoris!: Sequelize.BelongsToManyHasAssociationsMixin<ana_operatori, ana_operatoriId>;
  countId_operatori_ana_operatoris!: Sequelize.BelongsToManyCountAssociationsMixin;
  // qualifiche hasMany qualifiche_operatori via id_qualifica
  qualifiche_operatoris!: qualifiche_operatori[];
  getQualifiche_operatoris!: Sequelize.HasManyGetAssociationsMixin<qualifiche_operatori>;
  setQualifiche_operatoris!: Sequelize.HasManySetAssociationsMixin<qualifiche_operatori, qualifiche_operatoriId>;
  addQualifiche_operatori!: Sequelize.HasManyAddAssociationMixin<qualifiche_operatori, qualifiche_operatoriId>;
  addQualifiche_operatoris!: Sequelize.HasManyAddAssociationsMixin<qualifiche_operatori, qualifiche_operatoriId>;
  createQualifiche_operatori!: Sequelize.HasManyCreateAssociationMixin<qualifiche_operatori>;
  removeQualifiche_operatori!: Sequelize.HasManyRemoveAssociationMixin<qualifiche_operatori, qualifiche_operatoriId>;
  removeQualifiche_operatoris!: Sequelize.HasManyRemoveAssociationsMixin<qualifiche_operatori, qualifiche_operatoriId>;
  hasQualifiche_operatori!: Sequelize.HasManyHasAssociationMixin<qualifiche_operatori, qualifiche_operatoriId>;
  hasQualifiche_operatoris!: Sequelize.HasManyHasAssociationsMixin<qualifiche_operatori, qualifiche_operatoriId>;
  countQualifiche_operatoris!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof qualifiche {
    return qualifiche.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    nome: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'qualifiche',
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
        name: "qualifiche_pk_2",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
          { name: "nome" },
        ]
      },
    ]
  });
  }
}
