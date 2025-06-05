import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { commesse, commesseId } from './commesse';
import type { el_classificazioni, el_classificazioniId } from './el_classificazioni';
import type { el_settori, el_settoriId } from './el_settori';

export interface task_programmazioneAttributes {
  id_commessa?: number;
  id_task: number;
  descrizione?: string;
  data_inizio_task?: Date;
  data_scadenza_task?: string;
  data_consegna_task?: string;
  data_chiusura_task?: string;
  stato_task: '0' | '1' | '2' | '3';
  importo?: number;
  id_classificazione?: number;
  position?: number;
  id_settore?: number;
}

export type task_programmazionePk = "id_task";
export type task_programmazioneId = task_programmazione[task_programmazionePk];
export type task_programmazioneOptionalAttributes = "id_commessa" | "id_task" | "descrizione" | "data_inizio_task" | "data_scadenza_task" | "data_consegna_task" | "data_chiusura_task" | "stato_task" | "importo" | "id_classificazione" | "position" | "id_settore";
export type task_programmazioneCreationAttributes = Optional<task_programmazioneAttributes, task_programmazioneOptionalAttributes>;

export class task_programmazione extends Model<task_programmazioneAttributes, task_programmazioneCreationAttributes> implements task_programmazioneAttributes {
  id_commessa?: number;
  id_task!: number;
  descrizione?: string;
  data_inizio_task?: Date;
  data_scadenza_task?: string;
  data_consegna_task?: string;
  data_chiusura_task?: string;
  stato_task!: '0' | '1' | '2' | '3';
  importo?: number;
  id_classificazione?: number;
  position?: number;
  id_settore?: number;

  // task_programmazione belongsTo commesse via id_commessa
  id_commessa_commesse!: commesse;
  getId_commessa_commesse!: Sequelize.BelongsToGetAssociationMixin<commesse>;
  setId_commessa_commesse!: Sequelize.BelongsToSetAssociationMixin<commesse, commesseId>;
  createId_commessa_commesse!: Sequelize.BelongsToCreateAssociationMixin<commesse>;
  // task_programmazione belongsTo el_classificazioni via id_classificazione
  id_classificazione_el_classificazioni!: el_classificazioni;
  getId_classificazione_el_classificazioni!: Sequelize.BelongsToGetAssociationMixin<el_classificazioni>;
  setId_classificazione_el_classificazioni!: Sequelize.BelongsToSetAssociationMixin<el_classificazioni, el_classificazioniId>;
  createId_classificazione_el_classificazioni!: Sequelize.BelongsToCreateAssociationMixin<el_classificazioni>;
  // task_programmazione belongsTo el_settori via id_settore
  id_settore_el_settori!: el_settori;
  getId_settore_el_settori!: Sequelize.BelongsToGetAssociationMixin<el_settori>;
  setId_settore_el_settori!: Sequelize.BelongsToSetAssociationMixin<el_settori, el_settoriId>;
  createId_settore_el_settori!: Sequelize.BelongsToCreateAssociationMixin<el_settori>;

  static initModel(sequelize: Sequelize.Sequelize): typeof task_programmazione {
    return task_programmazione.init({
    id_commessa: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
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
      allowNull: true,
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
      allowNull: true,
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
      allowNull: true
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
    tableName: 'task_programmazione',
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
        name: "task_programmazione_commesse_id_commessa_fk",
        using: "BTREE",
        fields: [
          { name: "id_commessa" },
        ]
      },
      {
        name: "task_programmazione_el_classificazioni_id_classificazione_fk",
        using: "BTREE",
        fields: [
          { name: "id_classificazione" },
        ]
      },
      {
        name: "task_programmazione_el_settori_id_settore_fk",
        using: "BTREE",
        fields: [
          { name: "id_settore" },
        ]
      },
    ]
  });
  }
}
