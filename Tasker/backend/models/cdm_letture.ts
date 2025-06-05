import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { ana_operatori, ana_operatoriId } from './ana_operatori';
import type { anagrafiche, anagraficheId } from './anagrafiche';
import type { cdm_campi, cdm_campiId } from './cdm_campi';

export interface cdm_lettureAttributes {
  id_lettura: number;
  data?: string;
  id_campo: number;
  id_ana_condominio?: number;
  lettura: string;
  data_ins: Date;
  stagione: string;
  operatore_ins?: number;
  note_extra: string;
}

export type cdm_letturePk = "id_lettura";
export type cdm_lettureId = cdm_letture[cdm_letturePk];
export type cdm_lettureOptionalAttributes = "id_lettura" | "data" | "id_campo" | "id_ana_condominio" | "lettura" | "data_ins" | "stagione" | "operatore_ins";
export type cdm_lettureCreationAttributes = Optional<cdm_lettureAttributes, cdm_lettureOptionalAttributes>;

export class cdm_letture extends Model<cdm_lettureAttributes, cdm_lettureCreationAttributes> implements cdm_lettureAttributes {
  id_lettura!: number;
  data?: string;
  id_campo!: number;
  id_ana_condominio?: number;
  lettura!: string;
  data_ins!: Date;
  stagione!: string;
  operatore_ins?: number;
  note_extra!: string;

  // cdm_letture belongsTo ana_operatori via operatore_ins
  operatore_ins_ana_operatori!: ana_operatori;
  getOperatore_ins_ana_operatori!: Sequelize.BelongsToGetAssociationMixin<ana_operatori>;
  setOperatore_ins_ana_operatori!: Sequelize.BelongsToSetAssociationMixin<ana_operatori, ana_operatoriId>;
  createOperatore_ins_ana_operatori!: Sequelize.BelongsToCreateAssociationMixin<ana_operatori>;
  // cdm_letture belongsTo anagrafiche via id_ana_condominio
  id_ana_condominio_anagrafiche!: anagrafiche;
  getId_ana_condominio_anagrafiche!: Sequelize.BelongsToGetAssociationMixin<anagrafiche>;
  setId_ana_condominio_anagrafiche!: Sequelize.BelongsToSetAssociationMixin<anagrafiche, anagraficheId>;
  createId_ana_condominio_anagrafiche!: Sequelize.BelongsToCreateAssociationMixin<anagrafiche>;
  // cdm_letture belongsTo cdm_campi via id_campo
  id_campo_cdm_campi!: cdm_campi;
  getId_campo_cdm_campi!: Sequelize.BelongsToGetAssociationMixin<cdm_campi>;
  setId_campo_cdm_campi!: Sequelize.BelongsToSetAssociationMixin<cdm_campi, cdm_campiId>;
  createId_campo_cdm_campi!: Sequelize.BelongsToCreateAssociationMixin<cdm_campi>;

  static initModel(sequelize: Sequelize.Sequelize): typeof cdm_letture {
    return cdm_letture.init({
    id_lettura: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    data: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    id_campo: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      references: {
        model: 'cdm_campi',
        key: 'id_campo'
      }
    },
    id_ana_condominio: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      references: {
        model: 'anagrafiche',
        key: 'id_anagrafica'
      }
    },
    lettura: {
      type: DataTypes.STRING(45),
      allowNull: false,
      defaultValue: ""
    },
    data_ins: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('current_timestamp')
    },
    stagione: {
      type: DataTypes.STRING(45),
      allowNull: false,
      defaultValue: ""
    },
    operatore_ins: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      references: {
        model: 'ana_operatori',
        key: 'id_operatore'
      }
    },
    note_extra: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'cdm_letture',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_lettura" },
        ]
      },
      {
        name: "FK_cdm_letture_1",
        using: "BTREE",
        fields: [
          { name: "id_campo" },
        ]
      },
      {
        name: "cdm_letture_ana_operatori_id_operatore_fk",
        using: "BTREE",
        fields: [
          { name: "operatore_ins" },
        ]
      },
      {
        name: "cdm_letture_anagrafiche_id_anagrafica_fk",
        using: "BTREE",
        fields: [
          { name: "id_ana_condominio" },
        ]
      },
    ]
  });
  }
}
