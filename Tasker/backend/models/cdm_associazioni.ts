import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface cdm_associazioniAttributes {
  id_associazione: number;
  id_ana_condominio?: number;
  id_ana_referente?: number;
  id_ana_manutentore?: number;
  data_ins: Date;
  operatore_ins?: number;
}

export type cdm_associazioniPk = "id_associazione";
export type cdm_associazioniId = cdm_associazioni[cdm_associazioniPk];
export type cdm_associazioniOptionalAttributes = "id_associazione" | "id_ana_condominio" | "id_ana_referente" | "id_ana_manutentore" | "data_ins" | "operatore_ins";
export type cdm_associazioniCreationAttributes = Optional<cdm_associazioniAttributes, cdm_associazioniOptionalAttributes>;

export class cdm_associazioni extends Model<cdm_associazioniAttributes, cdm_associazioniCreationAttributes> implements cdm_associazioniAttributes {
  id_associazione!: number;
  id_ana_condominio?: number;
  id_ana_referente?: number;
  id_ana_manutentore?: number;
  data_ins!: Date;
  operatore_ins?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof cdm_associazioni {
    return cdm_associazioni.init({
    id_associazione: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    id_ana_condominio: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    id_ana_referente: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    id_ana_manutentore: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    data_ins: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('current_timestamp')
    },
    operatore_ins: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'cdm_associazioni',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_associazione" },
        ]
      },
      {
        name: "cdm_associazioni_pk",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_ana_condominio" },
          { name: "id_ana_referente" },
          { name: "id_ana_manutentore" },
          { name: "data_ins" },
        ]
      },
      {
        name: "foreign_key_name",
        using: "BTREE",
        fields: [
          { name: "id_ana_condominio" },
        ]
      },
      {
        name: "foreign_key_name2",
        using: "BTREE",
        fields: [
          { name: "id_ana_referente" },
        ]
      },
      {
        name: "cdm_associazioni_anagrafiche_id_anagrafica_fk",
        using: "BTREE",
        fields: [
          { name: "id_ana_manutentore" },
        ]
      },
      {
        name: "cdm_associazioni_ana_operatori_id_operatore_fk",
        using: "BTREE",
        fields: [
          { name: "operatore_ins" },
        ]
      },
    ]
  });
  }
}
