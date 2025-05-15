import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface rinnovo_cpiAttributes {
  id_commessa: number;
  scadenza?: string;
  note_scadenza?: string;
  op_ins_scadenza?: number;
  consegna?: string;
  note_consegna?: string;
  op_ins_consegna?: number;
}

export type rinnovo_cpiPk = "id_commessa";
export type rinnovo_cpiId = rinnovo_cpi[rinnovo_cpiPk];
export type rinnovo_cpiOptionalAttributes = "id_commessa" | "scadenza" | "note_scadenza" | "op_ins_scadenza" | "consegna" | "note_consegna" | "op_ins_consegna";
export type rinnovo_cpiCreationAttributes = Optional<rinnovo_cpiAttributes, rinnovo_cpiOptionalAttributes>;

export class rinnovo_cpi extends Model<rinnovo_cpiAttributes, rinnovo_cpiCreationAttributes> implements rinnovo_cpiAttributes {
  id_commessa!: number;
  scadenza?: string;
  note_scadenza?: string;
  op_ins_scadenza?: number;
  consegna?: string;
  note_consegna?: string;
  op_ins_consegna?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof rinnovo_cpi {
    return rinnovo_cpi.init({
    id_commessa: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    scadenza: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    note_scadenza: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    op_ins_scadenza: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    consegna: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    note_consegna: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    op_ins_consegna: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'rinnovo_cpi',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_commessa" },
        ]
      },
    ]
  });
  }
}
