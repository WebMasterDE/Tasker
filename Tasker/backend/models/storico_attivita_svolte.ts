import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface storico_attivita_svolteAttributes {
  id: number;
  id_cdm: number;
  cod_commessa: string;
  attivita: string;
}

export type storico_attivita_svoltePk = "id";
export type storico_attivita_svolteId = storico_attivita_svolte[storico_attivita_svoltePk];
export type storico_attivita_svolteOptionalAttributes = "id" | "id_cdm" | "cod_commessa" | "attivita";
export type storico_attivita_svolteCreationAttributes = Optional<storico_attivita_svolteAttributes, storico_attivita_svolteOptionalAttributes>;

export class storico_attivita_svolte extends Model<storico_attivita_svolteAttributes, storico_attivita_svolteCreationAttributes> implements storico_attivita_svolteAttributes {
  id!: number;
  id_cdm!: number;
  cod_commessa!: string;
  attivita!: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof storico_attivita_svolte {
    return storico_attivita_svolte.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    id_cdm: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    cod_commessa: {
      type: DataTypes.STRING(45),
      allowNull: false,
      defaultValue: ""
    },
    attivita: {
      type: DataTypes.STRING(45),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'storico_attivita_svolte',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
