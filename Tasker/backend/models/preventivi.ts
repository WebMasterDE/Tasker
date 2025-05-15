import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { ana_operatori, ana_operatoriId } from './ana_operatori';
import type { anagrafiche, anagraficheId } from './anagrafiche';

export interface preventiviAttributes {
  id_preventivo: number;
  cod_preventivo: string;
  terzi?: string;
  data_offerta: string;
  budget_offerta: number;
  unita_di_misura?: string;
  oggetto: string;
  note_preventivo?: string;
  id_classificazione: number;
  tipo_preventivo: 'int' | 'ext';
  id_referente_anagrafica?: number;
  id_settore: number;
  tacito_rinnovo: number;
  id_operatore?: number;
}

export type preventiviPk = "id_preventivo";
export type preventiviId = preventivi[preventiviPk];
export type preventiviOptionalAttributes = "id_preventivo" | "terzi" | "budget_offerta" | "unita_di_misura" | "note_preventivo" | "tipo_preventivo" | "id_referente_anagrafica" | "tacito_rinnovo" | "id_operatore";
export type preventiviCreationAttributes = Optional<preventiviAttributes, preventiviOptionalAttributes>;

export class preventivi extends Model<preventiviAttributes, preventiviCreationAttributes> implements preventiviAttributes {
  id_preventivo!: number;
  cod_preventivo!: string;
  terzi?: string;
  data_offerta!: string;
  budget_offerta!: number;
  unita_di_misura?: string;
  oggetto!: string;
  note_preventivo?: string;
  id_classificazione!: number;
  tipo_preventivo!: 'int' | 'ext';
  id_referente_anagrafica?: number;
  id_settore!: number;
  tacito_rinnovo!: number;
  id_operatore?: number;

  // preventivi belongsTo ana_operatori via id_operatore
  id_operatore_ana_operatori!: ana_operatori;
  getId_operatore_ana_operatori!: Sequelize.BelongsToGetAssociationMixin<ana_operatori>;
  setId_operatore_ana_operatori!: Sequelize.BelongsToSetAssociationMixin<ana_operatori, ana_operatoriId>;
  createId_operatore_ana_operatori!: Sequelize.BelongsToCreateAssociationMixin<ana_operatori>;
  // preventivi belongsTo anagrafiche via id_referente_anagrafica
  id_referente_anagrafica_anagrafiche!: anagrafiche;
  getId_referente_anagrafica_anagrafiche!: Sequelize.BelongsToGetAssociationMixin<anagrafiche>;
  setId_referente_anagrafica_anagrafiche!: Sequelize.BelongsToSetAssociationMixin<anagrafiche, anagraficheId>;
  createId_referente_anagrafica_anagrafiche!: Sequelize.BelongsToCreateAssociationMixin<anagrafiche>;

  static initModel(sequelize: Sequelize.Sequelize): typeof preventivi {
    return preventivi.init({
    id_preventivo: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    cod_preventivo: {
      type: DataTypes.STRING(45),
      allowNull: false,
      unique: "preventivi_pk"
    },
    terzi: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    data_offerta: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    budget_offerta: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
      defaultValue: 0.00
    },
    unita_di_misura: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    oggetto: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    note_preventivo: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    id_classificazione: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    tipo_preventivo: {
      type: DataTypes.ENUM('int','ext'),
      allowNull: false,
      defaultValue: "ext"
    },
    id_referente_anagrafica: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      references: {
        model: 'anagrafiche',
        key: 'id_anagrafica'
      }
    },
    id_settore: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    tacito_rinnovo: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    id_operatore: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      references: {
        model: 'ana_operatori',
        key: 'id_operatore'
      }
    }
  }, {
    sequelize,
    tableName: 'preventivi',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_preventivo" },
        ]
      },
      {
        name: "preventivi_pk",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "cod_preventivo" },
        ]
      },
      {
        name: "FK_preventivi_1",
        using: "BTREE",
        fields: [
          { name: "id_classificazione" },
        ]
      },
      {
        name: "FK_preventivi_2",
        using: "BTREE",
        fields: [
          { name: "id_settore" },
        ]
      },
      {
        name: "preventivi_ana_operatori_id_operatore_fk",
        using: "BTREE",
        fields: [
          { name: "id_operatore" },
        ]
      },
      {
        name: "preventivi_anagrafiche_id_anagrafica_fk",
        using: "BTREE",
        fields: [
          { name: "id_referente_anagrafica" },
        ]
      },
    ]
  });
  }
}
