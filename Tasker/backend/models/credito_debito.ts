import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface credito_debitoAttributes {
  id_credito_debito: number;
  credito: number;
  debito: number;
  data: Date;
  rapporto_credito_debito: number;
}

export type credito_debitoPk = "id_credito_debito";
export type credito_debitoId = credito_debito[credito_debitoPk];
export type credito_debitoOptionalAttributes = "id_credito_debito" | "data";
export type credito_debitoCreationAttributes = Optional<credito_debitoAttributes, credito_debitoOptionalAttributes>;

export class credito_debito extends Model<credito_debitoAttributes, credito_debitoCreationAttributes> implements credito_debitoAttributes {
  id_credito_debito!: number;
  credito!: number;
  debito!: number;
  data!: Date;
  rapporto_credito_debito!: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof credito_debito {
    return credito_debito.init({
    id_credito_debito: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    credito: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    debito: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    data: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('current_timestamp')
    },
    rapporto_credito_debito: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'credito_debito',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_credito_debito" },
        ]
      },
    ]
  });
  }
}
