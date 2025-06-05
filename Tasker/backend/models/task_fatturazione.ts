import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { commesse, commesseId } from './commesse';
import type { el_classificazioni, el_classificazioniId } from './el_classificazioni';
import type { el_settori, el_settoriId } from './el_settori';
import type { fatturazione_commesse, fatturazione_commesseId } from './fatturazione_commesse';
import type { pagamenti, pagamentiId } from './pagamenti';
import type { pagamenti_task, pagamenti_taskId } from './pagamenti_task';

export interface task_fatturazioneAttributes {
  id_commessa: number;
  id_task: number;
  descrizione?: string;
  data_inizio_task: Date;
  data_scadenza_task?: string;
  data_consegna_task?: string;
  data_chiusura_task?: string;
  stato_task: '0' | '1' | '2' | '3';
  importo: number;
  id_classificazione?: number;
  position: number;
  id_settore?: number;
}

export type task_fatturazionePk = "id_task";
export type task_fatturazioneId = task_fatturazione[task_fatturazionePk];
export type task_fatturazioneOptionalAttributes = "id_task" | "descrizione" | "data_inizio_task" | "data_scadenza_task" | "data_consegna_task" | "data_chiusura_task" | "stato_task" | "importo" | "id_classificazione" | "id_settore";
export type task_fatturazioneCreationAttributes = Optional<task_fatturazioneAttributes, task_fatturazioneOptionalAttributes>;

export class task_fatturazione extends Model<task_fatturazioneAttributes, task_fatturazioneCreationAttributes> implements task_fatturazioneAttributes {
  id_commessa!: number;
  id_task!: number;
  descrizione?: string;
  data_inizio_task!: Date;
  data_scadenza_task?: string;
  data_consegna_task?: string;
  data_chiusura_task?: string;
  stato_task!: '0' | '1' | '2' | '3';
  importo!: number;
  id_classificazione?: number;
  position!: number;
  id_settore?: number;

  // task_fatturazione belongsTo commesse via id_commessa
  id_commessa_commesse!: commesse;
  getId_commessa_commesse!: Sequelize.BelongsToGetAssociationMixin<commesse>;
  setId_commessa_commesse!: Sequelize.BelongsToSetAssociationMixin<commesse, commesseId>;
  createId_commessa_commesse!: Sequelize.BelongsToCreateAssociationMixin<commesse>;
  // task_fatturazione belongsTo el_classificazioni via id_classificazione
  id_classificazione_el_classificazioni!: el_classificazioni;
  getId_classificazione_el_classificazioni!: Sequelize.BelongsToGetAssociationMixin<el_classificazioni>;
  setId_classificazione_el_classificazioni!: Sequelize.BelongsToSetAssociationMixin<el_classificazioni, el_classificazioniId>;
  createId_classificazione_el_classificazioni!: Sequelize.BelongsToCreateAssociationMixin<el_classificazioni>;
  // task_fatturazione belongsTo el_settori via id_settore
  id_settore_el_settori!: el_settori;
  getId_settore_el_settori!: Sequelize.BelongsToGetAssociationMixin<el_settori>;
  setId_settore_el_settori!: Sequelize.BelongsToSetAssociationMixin<el_settori, el_settoriId>;
  createId_settore_el_settori!: Sequelize.BelongsToCreateAssociationMixin<el_settori>;
  // task_fatturazione hasMany fatturazione_commesse via id_task
  fatturazione_commesses!: fatturazione_commesse[];
  getFatturazione_commesses!: Sequelize.HasManyGetAssociationsMixin<fatturazione_commesse>;
  setFatturazione_commesses!: Sequelize.HasManySetAssociationsMixin<fatturazione_commesse, fatturazione_commesseId>;
  addFatturazione_commess!: Sequelize.HasManyAddAssociationMixin<fatturazione_commesse, fatturazione_commesseId>;
  addFatturazione_commesses!: Sequelize.HasManyAddAssociationsMixin<fatturazione_commesse, fatturazione_commesseId>;
  createFatturazione_commess!: Sequelize.HasManyCreateAssociationMixin<fatturazione_commesse>;
  removeFatturazione_commess!: Sequelize.HasManyRemoveAssociationMixin<fatturazione_commesse, fatturazione_commesseId>;
  removeFatturazione_commesses!: Sequelize.HasManyRemoveAssociationsMixin<fatturazione_commesse, fatturazione_commesseId>;
  hasFatturazione_commess!: Sequelize.HasManyHasAssociationMixin<fatturazione_commesse, fatturazione_commesseId>;
  hasFatturazione_commesses!: Sequelize.HasManyHasAssociationsMixin<fatturazione_commesse, fatturazione_commesseId>;
  countFatturazione_commesses!: Sequelize.HasManyCountAssociationsMixin;
  // task_fatturazione belongsToMany pagamenti via id_task and id_pagamento
  id_pagamento_pagamentis!: pagamenti[];
  getId_pagamento_pagamentis!: Sequelize.BelongsToManyGetAssociationsMixin<pagamenti>;
  setId_pagamento_pagamentis!: Sequelize.BelongsToManySetAssociationsMixin<pagamenti, pagamentiId>;
  addId_pagamento_pagamenti!: Sequelize.BelongsToManyAddAssociationMixin<pagamenti, pagamentiId>;
  addId_pagamento_pagamentis!: Sequelize.BelongsToManyAddAssociationsMixin<pagamenti, pagamentiId>;
  createId_pagamento_pagamenti!: Sequelize.BelongsToManyCreateAssociationMixin<pagamenti>;
  removeId_pagamento_pagamenti!: Sequelize.BelongsToManyRemoveAssociationMixin<pagamenti, pagamentiId>;
  removeId_pagamento_pagamentis!: Sequelize.BelongsToManyRemoveAssociationsMixin<pagamenti, pagamentiId>;
  hasId_pagamento_pagamenti!: Sequelize.BelongsToManyHasAssociationMixin<pagamenti, pagamentiId>;
  hasId_pagamento_pagamentis!: Sequelize.BelongsToManyHasAssociationsMixin<pagamenti, pagamentiId>;
  countId_pagamento_pagamentis!: Sequelize.BelongsToManyCountAssociationsMixin;
  // task_fatturazione hasMany pagamenti_task via id_task
  pagamenti_tasks!: pagamenti_task[];
  getPagamenti_tasks!: Sequelize.HasManyGetAssociationsMixin<pagamenti_task>;
  setPagamenti_tasks!: Sequelize.HasManySetAssociationsMixin<pagamenti_task, pagamenti_taskId>;
  addPagamenti_task!: Sequelize.HasManyAddAssociationMixin<pagamenti_task, pagamenti_taskId>;
  addPagamenti_tasks!: Sequelize.HasManyAddAssociationsMixin<pagamenti_task, pagamenti_taskId>;
  createPagamenti_task!: Sequelize.HasManyCreateAssociationMixin<pagamenti_task>;
  removePagamenti_task!: Sequelize.HasManyRemoveAssociationMixin<pagamenti_task, pagamenti_taskId>;
  removePagamenti_tasks!: Sequelize.HasManyRemoveAssociationsMixin<pagamenti_task, pagamenti_taskId>;
  hasPagamenti_task!: Sequelize.HasManyHasAssociationMixin<pagamenti_task, pagamenti_taskId>;
  hasPagamenti_tasks!: Sequelize.HasManyHasAssociationsMixin<pagamenti_task, pagamenti_taskId>;
  countPagamenti_tasks!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof task_fatturazione {
    return task_fatturazione.init({
    id_commessa: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'commesse',
        key: 'id_commessa'
      }
    },
    id_task: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    descrizione: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    data_inizio_task: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('current_timestamp')
    },
    data_scadenza_task: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    data_consegna_task: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    data_chiusura_task: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    stato_task: {
      type: DataTypes.ENUM('0','1','2','3'),
      allowNull: false,
      defaultValue: "0",
      comment: "'Aperta', 'Chiusa', 'Annullata', 'Sospesa'"
    },
    importo: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
      defaultValue: 0.00
    },
    id_classificazione: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      references: {
        model: 'el_classificazioni',
        key: 'id_classificazione'
      }
    },
    position: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    id_settore: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      references: {
        model: 'el_settori',
        key: 'id_settore'
      }
    }
  }, {
    sequelize,
    tableName: 'task_fatturazione',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_task" },
        ]
      },
      {
        name: "FK_commesse",
        using: "BTREE",
        fields: [
          { name: "id_commessa" },
        ]
      },
      {
        name: "task_el_classificazioni_id_classificazione_fk",
        using: "BTREE",
        fields: [
          { name: "id_classificazione" },
        ]
      },
      {
        name: "task_fatturazione_el_settori_id_settore_fk",
        using: "BTREE",
        fields: [
          { name: "id_settore" },
        ]
      },
    ]
  });
  }
}
