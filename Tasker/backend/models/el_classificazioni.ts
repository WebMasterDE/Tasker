import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { el_categorie, el_categorieId } from './el_categorie';
import type { el_servizi, el_serviziId } from './el_servizi';
import type { el_sottocategorie, el_sottocategorieId } from './el_sottocategorie';
import type { servizi_classificazione, servizi_classificazioneId } from './servizi_classificazione';
import type { task_fatturazione, task_fatturazioneId } from './task_fatturazione';
import type { task_programmazione, task_programmazioneId } from './task_programmazione';

export interface el_classificazioniAttributes {
  id_classificazione: number;
  id_categoria: number;
  id_sottocategoria?: number;
  perc_provvigione: number;
}

export type el_classificazioniPk = "id_classificazione";
export type el_classificazioniId = el_classificazioni[el_classificazioniPk];
export type el_classificazioniOptionalAttributes = "id_classificazione" | "id_sottocategoria" | "perc_provvigione";
export type el_classificazioniCreationAttributes = Optional<el_classificazioniAttributes, el_classificazioniOptionalAttributes>;

export class el_classificazioni extends Model<el_classificazioniAttributes, el_classificazioniCreationAttributes> implements el_classificazioniAttributes {
  id_classificazione!: number;
  id_categoria!: number;
  id_sottocategoria?: number;
  perc_provvigione!: number;

  // el_classificazioni belongsTo el_categorie via id_categoria
  id_categoria_el_categorie!: el_categorie;
  getId_categoria_el_categorie!: Sequelize.BelongsToGetAssociationMixin<el_categorie>;
  setId_categoria_el_categorie!: Sequelize.BelongsToSetAssociationMixin<el_categorie, el_categorieId>;
  createId_categoria_el_categorie!: Sequelize.BelongsToCreateAssociationMixin<el_categorie>;
  // el_classificazioni belongsToMany el_servizi via id_classificazione and id_servizio
  id_servizio_el_servizis!: el_servizi[];
  getId_servizio_el_servizis!: Sequelize.BelongsToManyGetAssociationsMixin<el_servizi>;
  setId_servizio_el_servizis!: Sequelize.BelongsToManySetAssociationsMixin<el_servizi, el_serviziId>;
  addId_servizio_el_servizi!: Sequelize.BelongsToManyAddAssociationMixin<el_servizi, el_serviziId>;
  addId_servizio_el_servizis!: Sequelize.BelongsToManyAddAssociationsMixin<el_servizi, el_serviziId>;
  createId_servizio_el_servizi!: Sequelize.BelongsToManyCreateAssociationMixin<el_servizi>;
  removeId_servizio_el_servizi!: Sequelize.BelongsToManyRemoveAssociationMixin<el_servizi, el_serviziId>;
  removeId_servizio_el_servizis!: Sequelize.BelongsToManyRemoveAssociationsMixin<el_servizi, el_serviziId>;
  hasId_servizio_el_servizi!: Sequelize.BelongsToManyHasAssociationMixin<el_servizi, el_serviziId>;
  hasId_servizio_el_servizis!: Sequelize.BelongsToManyHasAssociationsMixin<el_servizi, el_serviziId>;
  countId_servizio_el_servizis!: Sequelize.BelongsToManyCountAssociationsMixin;
  // el_classificazioni hasMany servizi_classificazione via id_classificazione
  servizi_classificaziones!: servizi_classificazione[];
  getServizi_classificaziones!: Sequelize.HasManyGetAssociationsMixin<servizi_classificazione>;
  setServizi_classificaziones!: Sequelize.HasManySetAssociationsMixin<servizi_classificazione, servizi_classificazioneId>;
  addServizi_classificazione!: Sequelize.HasManyAddAssociationMixin<servizi_classificazione, servizi_classificazioneId>;
  addServizi_classificaziones!: Sequelize.HasManyAddAssociationsMixin<servizi_classificazione, servizi_classificazioneId>;
  createServizi_classificazione!: Sequelize.HasManyCreateAssociationMixin<servizi_classificazione>;
  removeServizi_classificazione!: Sequelize.HasManyRemoveAssociationMixin<servizi_classificazione, servizi_classificazioneId>;
  removeServizi_classificaziones!: Sequelize.HasManyRemoveAssociationsMixin<servizi_classificazione, servizi_classificazioneId>;
  hasServizi_classificazione!: Sequelize.HasManyHasAssociationMixin<servizi_classificazione, servizi_classificazioneId>;
  hasServizi_classificaziones!: Sequelize.HasManyHasAssociationsMixin<servizi_classificazione, servizi_classificazioneId>;
  countServizi_classificaziones!: Sequelize.HasManyCountAssociationsMixin;
  // el_classificazioni hasMany task_fatturazione via id_classificazione
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
  // el_classificazioni hasMany task_programmazione via id_classificazione
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
  // el_classificazioni belongsTo el_sottocategorie via id_sottocategoria
  id_sottocategoria_el_sottocategorie!: el_sottocategorie;
  getId_sottocategoria_el_sottocategorie!: Sequelize.BelongsToGetAssociationMixin<el_sottocategorie>;
  setId_sottocategoria_el_sottocategorie!: Sequelize.BelongsToSetAssociationMixin<el_sottocategorie, el_sottocategorieId>;
  createId_sottocategoria_el_sottocategorie!: Sequelize.BelongsToCreateAssociationMixin<el_sottocategorie>;

  static initModel(sequelize: Sequelize.Sequelize): typeof el_classificazioni {
    return el_classificazioni.init({
    id_classificazione: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    id_categoria: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'el_categorie',
        key: 'id_categoria'
      }
    },
    id_sottocategoria: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      references: {
        model: 'el_sottocategorie',
        key: 'id_sottocategoria'
      }
    },
    perc_provvigione: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 10
    }
  }, {
    sequelize,
    tableName: 'el_classificazioni',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_classificazione" },
        ]
      },
      {
        name: "el_classificazioni_pk",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_categoria" },
          { name: "id_sottocategoria" },
        ]
      },
      {
        name: "FK_el_classificazioni_2",
        using: "BTREE",
        fields: [
          { name: "id_categoria" },
        ]
      },
      {
        name: "FK_el_classificazioni_3",
        using: "BTREE",
        fields: [
          { name: "id_sottocategoria" },
        ]
      },
    ]
  });
  }
}
