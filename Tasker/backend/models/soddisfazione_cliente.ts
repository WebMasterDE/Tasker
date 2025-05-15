import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface soddisfazione_clienteAttributes {
  id_soddisfazione_cl: number;
  id_tipologia: number;
  note_spunti?: string;
  data_recensione: Date;
}

export type soddisfazione_clientePk = "id_soddisfazione_cl";
export type soddisfazione_clienteId = soddisfazione_cliente[soddisfazione_clientePk];
export type soddisfazione_clienteOptionalAttributes = "id_soddisfazione_cl" | "id_tipologia" | "note_spunti" | "data_recensione";
export type soddisfazione_clienteCreationAttributes = Optional<soddisfazione_clienteAttributes, soddisfazione_clienteOptionalAttributes>;

export class soddisfazione_cliente extends Model<soddisfazione_clienteAttributes, soddisfazione_clienteCreationAttributes> implements soddisfazione_clienteAttributes {
  id_soddisfazione_cl!: number;
  id_tipologia!: number;
  note_spunti?: string;
  data_recensione!: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof soddisfazione_cliente {
    return soddisfazione_cliente.init({
    id_soddisfazione_cl: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    id_tipologia: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    note_spunti: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    data_recensione: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('current_timestamp')
    }
  }, {
    sequelize,
    tableName: 'soddisfazione_cliente',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_soddisfazione_cl" },
        ]
      },
      {
        name: "id_tipologia_FK",
        using: "BTREE",
        fields: [
          { name: "id_tipologia" },
        ]
      },
    ]
  });
  }
}
