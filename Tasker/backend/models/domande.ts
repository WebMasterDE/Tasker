import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface domandeAttributes {
  id_domanda: number;
  testo: string;
  visible: number;
}

export type domandePk = "id_domanda";
export type domandeId = domande[domandePk];
export type domandeOptionalAttributes = "id_domanda" | "visible";
export type domandeCreationAttributes = Optional<domandeAttributes, domandeOptionalAttributes>;

export class domande extends Model<domandeAttributes, domandeCreationAttributes> implements domandeAttributes {
  id_domanda!: number;
  testo!: string;
  visible!: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof domande {
    return domande.init({
    id_domanda: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    testo: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    visible: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    }
  }, {
    sequelize,
    tableName: 'domande',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_domanda" },
        ]
      },
    ]
  });
  }
}
