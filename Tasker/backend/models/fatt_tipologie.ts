import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface fatt_tipologieAttributes {
  id_tipologia: number;
  nome_tipologia: string;
}

export type fatt_tipologiePk = "id_tipologia";
export type fatt_tipologieId = fatt_tipologie[fatt_tipologiePk];
export type fatt_tipologieOptionalAttributes = "id_tipologia";
export type fatt_tipologieCreationAttributes = Optional<fatt_tipologieAttributes, fatt_tipologieOptionalAttributes>;

export class fatt_tipologie extends Model<fatt_tipologieAttributes, fatt_tipologieCreationAttributes> implements fatt_tipologieAttributes {
  id_tipologia!: number;
  nome_tipologia!: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof fatt_tipologie {
    return fatt_tipologie.init({
    id_tipologia: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    nome_tipologia: {
      type: DataTypes.STRING(45),
      allowNull: false,
      unique: "fatt_tipologie_pk"
    }
  }, {
    sequelize,
    tableName: 'fatt_tipologie',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_tipologia" },
        ]
      },
      {
        name: "fatt_tipologie_pk",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "nome_tipologia" },
        ]
      },
    ]
  });
  }
}
