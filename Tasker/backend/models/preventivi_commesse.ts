import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface preventivi_commesseAttributes {
  id: number;
  id_commessa?: number;
  id_preventivo: number;
  id_anagrafica: number;
  data_ins: Date;
  operatore_ins?: number;
  budget_iniziale: number;
}

export type preventivi_commessePk = "id";
export type preventivi_commesseId = preventivi_commesse[preventivi_commessePk];
export type preventivi_commesseOptionalAttributes = "id" | "id_commessa" | "id_preventivo" | "id_anagrafica" | "data_ins" | "operatore_ins" | "budget_iniziale";
export type preventivi_commesseCreationAttributes = Optional<preventivi_commesseAttributes, preventivi_commesseOptionalAttributes>;

export class preventivi_commesse extends Model<preventivi_commesseAttributes, preventivi_commesseCreationAttributes> implements preventivi_commesseAttributes {
  id!: number;
  id_commessa?: number;
  id_preventivo!: number;
  id_anagrafica!: number;
  data_ins!: Date;
  operatore_ins?: number;
  budget_iniziale!: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof preventivi_commesse {
    return preventivi_commesse.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    id_commessa: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    id_preventivo: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    id_anagrafica: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    data_ins: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('current_timestamp')
    },
    operatore_ins: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    budget_iniziale: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
      defaultValue: 0.00
    }
  }, {
    sequelize,
    tableName: 'preventivi_commesse',
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
      {
        name: "FK_preventivi_commesse_1",
        using: "BTREE",
        fields: [
          { name: "id_preventivo" },
        ]
      },
      {
        name: "FK_preventivi_commesse_2",
        using: "BTREE",
        fields: [
          { name: "id_anagrafica" },
        ]
      },
      {
        name: "FK_preventivi_commesse_3",
        using: "BTREE",
        fields: [
          { name: "id_commessa" },
        ]
      },
    ]
  });
  }
}
