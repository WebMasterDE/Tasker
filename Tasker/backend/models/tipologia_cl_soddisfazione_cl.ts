import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface tipologia_cl_soddisfazione_clAttributes {
  id_tipologia: number;
  nome?: string;
}

export type tipologia_cl_soddisfazione_clPk = "id_tipologia";
export type tipologia_cl_soddisfazione_clId = tipologia_cl_soddisfazione_cl[tipologia_cl_soddisfazione_clPk];
export type tipologia_cl_soddisfazione_clOptionalAttributes = "id_tipologia" | "nome";
export type tipologia_cl_soddisfazione_clCreationAttributes = Optional<tipologia_cl_soddisfazione_clAttributes, tipologia_cl_soddisfazione_clOptionalAttributes>;

export class tipologia_cl_soddisfazione_cl extends Model<tipologia_cl_soddisfazione_clAttributes, tipologia_cl_soddisfazione_clCreationAttributes> implements tipologia_cl_soddisfazione_clAttributes {
  id_tipologia!: number;
  nome?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof tipologia_cl_soddisfazione_cl {
    return tipologia_cl_soddisfazione_cl.init({
    id_tipologia: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    nome: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tipologia_cl_soddisfazione_cl',
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
    ]
  });
  }
}
