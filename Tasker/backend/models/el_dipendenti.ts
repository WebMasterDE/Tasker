import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { ana_operatori, ana_operatoriId } from './ana_operatori';

export interface el_dipendentiAttributes {
  id_dipendente: number;
  tipologia_dipendente: string;
}

export type el_dipendentiPk = "id_dipendente";
export type el_dipendentiId = el_dipendenti[el_dipendentiPk];
export type el_dipendentiOptionalAttributes = "id_dipendente";
export type el_dipendentiCreationAttributes = Optional<el_dipendentiAttributes, el_dipendentiOptionalAttributes>;

export class el_dipendenti extends Model<el_dipendentiAttributes, el_dipendentiCreationAttributes> implements el_dipendentiAttributes {
  id_dipendente!: number;
  tipologia_dipendente!: string;

  // el_dipendenti hasMany ana_operatori via id_el_dipendenti
  ana_operatoris!: ana_operatori[];
  getAna_operatoris!: Sequelize.HasManyGetAssociationsMixin<ana_operatori>;
  setAna_operatoris!: Sequelize.HasManySetAssociationsMixin<ana_operatori, ana_operatoriId>;
  addAna_operatori!: Sequelize.HasManyAddAssociationMixin<ana_operatori, ana_operatoriId>;
  addAna_operatoris!: Sequelize.HasManyAddAssociationsMixin<ana_operatori, ana_operatoriId>;
  createAna_operatori!: Sequelize.HasManyCreateAssociationMixin<ana_operatori>;
  removeAna_operatori!: Sequelize.HasManyRemoveAssociationMixin<ana_operatori, ana_operatoriId>;
  removeAna_operatoris!: Sequelize.HasManyRemoveAssociationsMixin<ana_operatori, ana_operatoriId>;
  hasAna_operatori!: Sequelize.HasManyHasAssociationMixin<ana_operatori, ana_operatoriId>;
  hasAna_operatoris!: Sequelize.HasManyHasAssociationsMixin<ana_operatori, ana_operatoriId>;
  countAna_operatoris!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof el_dipendenti {
    return el_dipendenti.init({
    id_dipendente: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    tipologia_dipendente: {
      type: DataTypes.STRING(2),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'el_dipendenti',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_dipendente" },
        ]
      },
    ]
  });
  }
}
