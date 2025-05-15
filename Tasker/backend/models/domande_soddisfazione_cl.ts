import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface domande_soddisfazione_clAttributes {
  id_soddisfazione_cliente: number;
  id_domanda: number;
  note_risposta?: string;
  stelle_risposte: number;
}

export type domande_soddisfazione_clPk = "id_soddisfazione_cliente" | "id_domanda";
export type domande_soddisfazione_clId = domande_soddisfazione_cl[domande_soddisfazione_clPk];
export type domande_soddisfazione_clOptionalAttributes = "note_risposta" | "stelle_risposte";
export type domande_soddisfazione_clCreationAttributes = Optional<domande_soddisfazione_clAttributes, domande_soddisfazione_clOptionalAttributes>;

export class domande_soddisfazione_cl extends Model<domande_soddisfazione_clAttributes, domande_soddisfazione_clCreationAttributes> implements domande_soddisfazione_clAttributes {
  id_soddisfazione_cliente!: number;
  id_domanda!: number;
  note_risposta?: string;
  stelle_risposte!: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof domande_soddisfazione_cl {
    return domande_soddisfazione_cl.init({
    id_soddisfazione_cliente: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    id_domanda: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    note_risposta: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    stelle_risposte: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'domande_soddisfazione_cl',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_soddisfazione_cliente" },
          { name: "id_domanda" },
        ]
      },
      {
        name: "id_domanda_FK",
        using: "BTREE",
        fields: [
          { name: "id_domanda" },
        ]
      },
    ]
  });
  }
}
