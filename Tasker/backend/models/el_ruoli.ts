import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { ana_operatori, ana_operatoriId } from './ana_operatori';
import type { operatori_task, operatori_taskId } from './operatori_task';

export interface el_ruoliAttributes {
  id_ruolo: number;
  nome_ruolo: string;
}

export type el_ruoliPk = "id_ruolo";
export type el_ruoliId = el_ruoli[el_ruoliPk];
export type el_ruoliOptionalAttributes = "id_ruolo";
export type el_ruoliCreationAttributes = Optional<el_ruoliAttributes, el_ruoliOptionalAttributes>;

export class el_ruoli extends Model<el_ruoliAttributes, el_ruoliCreationAttributes> implements el_ruoliAttributes {
  id_ruolo!: number;
  nome_ruolo!: string;

  // el_ruoli hasMany ana_operatori via id_ruolo
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
  // el_ruoli hasMany operatori_task via id_ruolo
  operatori_tasks!: operatori_task[];
  getOperatori_tasks!: Sequelize.HasManyGetAssociationsMixin<operatori_task>;
  setOperatori_tasks!: Sequelize.HasManySetAssociationsMixin<operatori_task, operatori_taskId>;
  addOperatori_task!: Sequelize.HasManyAddAssociationMixin<operatori_task, operatori_taskId>;
  addOperatori_tasks!: Sequelize.HasManyAddAssociationsMixin<operatori_task, operatori_taskId>;
  createOperatori_task!: Sequelize.HasManyCreateAssociationMixin<operatori_task>;
  removeOperatori_task!: Sequelize.HasManyRemoveAssociationMixin<operatori_task, operatori_taskId>;
  removeOperatori_tasks!: Sequelize.HasManyRemoveAssociationsMixin<operatori_task, operatori_taskId>;
  hasOperatori_task!: Sequelize.HasManyHasAssociationMixin<operatori_task, operatori_taskId>;
  hasOperatori_tasks!: Sequelize.HasManyHasAssociationsMixin<operatori_task, operatori_taskId>;
  countOperatori_tasks!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof el_ruoli {
    return el_ruoli.init({
    id_ruolo: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    nome_ruolo: {
      type: DataTypes.STRING(45),
      allowNull: false,
      unique: "el_ruoli_pk"
    }
  }, {
    sequelize,
    tableName: 'el_ruoli',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_ruolo" },
        ]
      },
      {
        name: "el_ruoli_pk",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "nome_ruolo" },
        ]
      },
    ]
  });
  }
}
