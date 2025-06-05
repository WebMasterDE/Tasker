import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface dogane_desAttributes {
  id_dogana: number;
  id_commessa: number;
  regime_commerciale?: 'Nuovo' | 'Nuovo Cessione Totale' | 'Esistente' | 'Esistente Cessione Totale';
  anno?: number;
  ult_mod_anno?: number;
  ult_mod_regime_comm?: number;
}

export type dogane_desPk = "id_dogana";
export type dogane_desId = dogane_des[dogane_desPk];
export type dogane_desOptionalAttributes = "id_dogana" | "regime_commerciale" | "anno" | "ult_mod_anno" | "ult_mod_regime_comm";
export type dogane_desCreationAttributes = Optional<dogane_desAttributes, dogane_desOptionalAttributes>;

export class dogane_des extends Model<dogane_desAttributes, dogane_desCreationAttributes> implements dogane_desAttributes {
  id_dogana!: number;
  id_commessa!: number;
  regime_commerciale?: 'Nuovo' | 'Nuovo Cessione Totale' | 'Esistente' | 'Esistente Cessione Totale';
  anno?: number;
  ult_mod_anno?: number;
  ult_mod_regime_comm?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof dogane_des {
    return dogane_des.init({
    id_dogana: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    id_commessa: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    regime_commerciale: {
      type: DataTypes.ENUM('Nuovo','Nuovo Cessione Totale','Esistente','Esistente Cessione Totale'),
      allowNull: true
    },
    anno: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ult_mod_anno: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    ult_mod_regime_comm: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'dogane_des',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_dogana" },
        ]
      },
      {
        name: "dogane_des_commesse_id_commessa_fk",
        using: "BTREE",
        fields: [
          { name: "id_commessa" },
        ]
      },
    ]
  });
  }
}
