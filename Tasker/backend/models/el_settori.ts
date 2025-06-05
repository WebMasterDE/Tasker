import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { ana_operatori, ana_operatoriId } from './ana_operatori';
import type { settore_operatori, settore_operatoriId } from './settore_operatori';
import type { task_fatturazione, task_fatturazioneId } from './task_fatturazione';
import type { task_programmazione, task_programmazioneId } from './task_programmazione';

export interface el_settoriAttributes {
  id_settore: number;
  cod_settore: string;
  nome_settore: string;
}

export type el_settoriPk = "id_settore";
export type el_settoriId = el_settori[el_settoriPk];
export type el_settoriOptionalAttributes = "id_settore";
export type el_settoriCreationAttributes = Optional<el_settoriAttributes, el_settoriOptionalAttributes>;

export class el_settori extends Model<el_settoriAttributes, el_settoriCreationAttributes> implements el_settoriAttributes {
  id_settore!: number;
  cod_settore!: string;
  nome_settore!: string;

  // el_settori belongsToMany ana_operatori via id_settore and id_operatore
  id_operatore_ana_operatori_settore_operatoris!: ana_operatori[];
  getId_operatore_ana_operatori_settore_operatoris!: Sequelize.BelongsToManyGetAssociationsMixin<ana_operatori>;
  setId_operatore_ana_operatori_settore_operatoris!: Sequelize.BelongsToManySetAssociationsMixin<ana_operatori, ana_operatoriId>;
  addId_operatore_ana_operatori_settore_operatori!: Sequelize.BelongsToManyAddAssociationMixin<ana_operatori, ana_operatoriId>;
  addId_operatore_ana_operatori_settore_operatoris!: Sequelize.BelongsToManyAddAssociationsMixin<ana_operatori, ana_operatoriId>;
  createId_operatore_ana_operatori_settore_operatori!: Sequelize.BelongsToManyCreateAssociationMixin<ana_operatori>;
  removeId_operatore_ana_operatori_settore_operatori!: Sequelize.BelongsToManyRemoveAssociationMixin<ana_operatori, ana_operatoriId>;
  removeId_operatore_ana_operatori_settore_operatoris!: Sequelize.BelongsToManyRemoveAssociationsMixin<ana_operatori, ana_operatoriId>;
  hasId_operatore_ana_operatori_settore_operatori!: Sequelize.BelongsToManyHasAssociationMixin<ana_operatori, ana_operatoriId>;
  hasId_operatore_ana_operatori_settore_operatoris!: Sequelize.BelongsToManyHasAssociationsMixin<ana_operatori, ana_operatoriId>;
  countId_operatore_ana_operatori_settore_operatoris!: Sequelize.BelongsToManyCountAssociationsMixin;
  // el_settori hasMany settore_operatori via id_settore
  settore_operatoris!: settore_operatori[];
  getSettore_operatoris!: Sequelize.HasManyGetAssociationsMixin<settore_operatori>;
  setSettore_operatoris!: Sequelize.HasManySetAssociationsMixin<settore_operatori, settore_operatoriId>;
  addSettore_operatori!: Sequelize.HasManyAddAssociationMixin<settore_operatori, settore_operatoriId>;
  addSettore_operatoris!: Sequelize.HasManyAddAssociationsMixin<settore_operatori, settore_operatoriId>;
  createSettore_operatori!: Sequelize.HasManyCreateAssociationMixin<settore_operatori>;
  removeSettore_operatori!: Sequelize.HasManyRemoveAssociationMixin<settore_operatori, settore_operatoriId>;
  removeSettore_operatoris!: Sequelize.HasManyRemoveAssociationsMixin<settore_operatori, settore_operatoriId>;
  hasSettore_operatori!: Sequelize.HasManyHasAssociationMixin<settore_operatori, settore_operatoriId>;
  hasSettore_operatoris!: Sequelize.HasManyHasAssociationsMixin<settore_operatori, settore_operatoriId>;
  countSettore_operatoris!: Sequelize.HasManyCountAssociationsMixin;
  // el_settori hasMany task_fatturazione via id_settore
  task_fatturaziones!: task_fatturazione[];
  getTask_fatturaziones!: Sequelize.HasManyGetAssociationsMixin<task_fatturazione>;
  setTask_fatturaziones!: Sequelize.HasManySetAssociationsMixin<task_fatturazione, task_fatturazioneId>;
  addTask_fatturazione!: Sequelize.HasManyAddAssociationMixin<task_fatturazione, task_fatturazioneId>;
  addTask_fatturaziones!: Sequelize.HasManyAddAssociationsMixin<task_fatturazione, task_fatturazioneId>;
  createTask_fatturazione!: Sequelize.HasManyCreateAssociationMixin<task_fatturazione>;
  removeTask_fatturazione!: Sequelize.HasManyRemoveAssociationMixin<task_fatturazione, task_fatturazioneId>;
  removeTask_fatturaziones!: Sequelize.HasManyRemoveAssociationsMixin<task_fatturazione, task_fatturazioneId>;
  hasTask_fatturazione!: Sequelize.HasManyHasAssociationMixin<task_fatturazione, task_fatturazioneId>;
  hasTask_fatturaziones!: Sequelize.HasManyHasAssociationsMixin<task_fatturazione, task_fatturazioneId>;
  countTask_fatturaziones!: Sequelize.HasManyCountAssociationsMixin;
  // el_settori hasMany task_programmazione via id_settore
  task_programmaziones!: task_programmazione[];
  getTask_programmaziones!: Sequelize.HasManyGetAssociationsMixin<task_programmazione>;
  setTask_programmaziones!: Sequelize.HasManySetAssociationsMixin<task_programmazione, task_programmazioneId>;
  addTask_programmazione!: Sequelize.HasManyAddAssociationMixin<task_programmazione, task_programmazioneId>;
  addTask_programmaziones!: Sequelize.HasManyAddAssociationsMixin<task_programmazione, task_programmazioneId>;
  createTask_programmazione!: Sequelize.HasManyCreateAssociationMixin<task_programmazione>;
  removeTask_programmazione!: Sequelize.HasManyRemoveAssociationMixin<task_programmazione, task_programmazioneId>;
  removeTask_programmaziones!: Sequelize.HasManyRemoveAssociationsMixin<task_programmazione, task_programmazioneId>;
  hasTask_programmazione!: Sequelize.HasManyHasAssociationMixin<task_programmazione, task_programmazioneId>;
  hasTask_programmaziones!: Sequelize.HasManyHasAssociationsMixin<task_programmazione, task_programmazioneId>;
  countTask_programmaziones!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof el_settori {
    return el_settori.init({
    id_settore: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    cod_settore: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    nome_settore: {
      type: DataTypes.STRING(45),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'el_settori',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_settore" },
        ]
      },
    ]
  });
  }
}
