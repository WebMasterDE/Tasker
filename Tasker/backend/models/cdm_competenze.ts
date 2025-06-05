import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { anagrafiche, anagraficheId } from './anagrafiche';

export interface cdm_competenzeAttributes {
  id_competenza: number;
  data_ins: Date;
  id_ana_letture?: number;
  id_ana_fatt_letture?: number;
  id_ana_bollette?: number;
  id_ana_fatt_bollette?: number;
  id_ana_condominio?: number;
}

export type cdm_competenzePk = "id_competenza";
export type cdm_competenzeId = cdm_competenze[cdm_competenzePk];
export type cdm_competenzeOptionalAttributes = "id_competenza" | "data_ins" | "id_ana_letture" | "id_ana_fatt_letture" | "id_ana_bollette" | "id_ana_fatt_bollette" | "id_ana_condominio";
export type cdm_competenzeCreationAttributes = Optional<cdm_competenzeAttributes, cdm_competenzeOptionalAttributes>;

export class cdm_competenze extends Model<cdm_competenzeAttributes, cdm_competenzeCreationAttributes> implements cdm_competenzeAttributes {
  id_competenza!: number;
  data_ins!: Date;
  id_ana_letture?: number;
  id_ana_fatt_letture?: number;
  id_ana_bollette?: number;
  id_ana_fatt_bollette?: number;
  id_ana_condominio?: number;

  // cdm_competenze belongsTo anagrafiche via id_ana_letture
  id_ana_letture_anagrafiche!: anagrafiche;
  getId_ana_letture_anagrafiche!: Sequelize.BelongsToGetAssociationMixin<anagrafiche>;
  setId_ana_letture_anagrafiche!: Sequelize.BelongsToSetAssociationMixin<anagrafiche, anagraficheId>;
  createId_ana_letture_anagrafiche!: Sequelize.BelongsToCreateAssociationMixin<anagrafiche>;
  // cdm_competenze belongsTo anagrafiche via id_ana_fatt_letture
  id_ana_fatt_letture_anagrafiche!: anagrafiche;
  getId_ana_fatt_letture_anagrafiche!: Sequelize.BelongsToGetAssociationMixin<anagrafiche>;
  setId_ana_fatt_letture_anagrafiche!: Sequelize.BelongsToSetAssociationMixin<anagrafiche, anagraficheId>;
  createId_ana_fatt_letture_anagrafiche!: Sequelize.BelongsToCreateAssociationMixin<anagrafiche>;
  // cdm_competenze belongsTo anagrafiche via id_ana_bollette
  id_ana_bollette_anagrafiche!: anagrafiche;
  getId_ana_bollette_anagrafiche!: Sequelize.BelongsToGetAssociationMixin<anagrafiche>;
  setId_ana_bollette_anagrafiche!: Sequelize.BelongsToSetAssociationMixin<anagrafiche, anagraficheId>;
  createId_ana_bollette_anagrafiche!: Sequelize.BelongsToCreateAssociationMixin<anagrafiche>;
  // cdm_competenze belongsTo anagrafiche via id_ana_fatt_bollette
  id_ana_fatt_bollette_anagrafiche!: anagrafiche;
  getId_ana_fatt_bollette_anagrafiche!: Sequelize.BelongsToGetAssociationMixin<anagrafiche>;
  setId_ana_fatt_bollette_anagrafiche!: Sequelize.BelongsToSetAssociationMixin<anagrafiche, anagraficheId>;
  createId_ana_fatt_bollette_anagrafiche!: Sequelize.BelongsToCreateAssociationMixin<anagrafiche>;
  // cdm_competenze belongsTo anagrafiche via id_ana_condominio
  id_ana_condominio_anagrafiche!: anagrafiche;
  getId_ana_condominio_anagrafiche!: Sequelize.BelongsToGetAssociationMixin<anagrafiche>;
  setId_ana_condominio_anagrafiche!: Sequelize.BelongsToSetAssociationMixin<anagrafiche, anagraficheId>;
  createId_ana_condominio_anagrafiche!: Sequelize.BelongsToCreateAssociationMixin<anagrafiche>;

  static initModel(sequelize: Sequelize.Sequelize): typeof cdm_competenze {
    return cdm_competenze.init({
    id_competenza: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    data_ins: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('current_timestamp')
    },
    id_ana_letture: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      references: {
        model: 'anagrafiche',
        key: 'id_anagrafica'
      }
    },
    id_ana_fatt_letture: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      references: {
        model: 'anagrafiche',
        key: 'id_anagrafica'
      }
    },
    id_ana_bollette: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      references: {
        model: 'anagrafiche',
        key: 'id_anagrafica'
      }
    },
    id_ana_fatt_bollette: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      references: {
        model: 'anagrafiche',
        key: 'id_anagrafica'
      }
    },
    id_ana_condominio: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      references: {
        model: 'anagrafiche',
        key: 'id_anagrafica'
      }
    }
  }, {
    sequelize,
    tableName: 'cdm_competenze',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_competenza" },
        ]
      },
      {
        name: "cdm_competenze_anagrafiche_id_anagrafica_fk",
        using: "BTREE",
        fields: [
          { name: "id_ana_letture" },
        ]
      },
      {
        name: "cdm_competenze_anagrafiche_id_anagrafica_fk2",
        using: "BTREE",
        fields: [
          { name: "id_ana_fatt_letture" },
        ]
      },
      {
        name: "cdm_competenze_anagrafiche_id_anagrafica_fk3",
        using: "BTREE",
        fields: [
          { name: "id_ana_bollette" },
        ]
      },
      {
        name: "cdm_competenze_anagrafiche_id_anagrafica_fk4",
        using: "BTREE",
        fields: [
          { name: "id_ana_fatt_bollette" },
        ]
      },
      {
        name: "cdm_competenze_anagrafiche_id_anagrafica_fk5",
        using: "BTREE",
        fields: [
          { name: "id_ana_condominio" },
        ]
      },
    ]
  });
  }
}
