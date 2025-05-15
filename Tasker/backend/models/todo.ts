import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { ana_operatori, ana_operatoriId } from './ana_operatori';

export interface todoAttributes {
  id: number;
  richiesta: string;
  data_ins: Date;
  operatore_ins: number;
  stato: number;
  operatorePerFixBug?: 'DT' | 'JF' | 'GV' | 'GP' | 'GZ' | 'DN';
  fase: 'Da fare' | 'Da caricare' | 'Concluso' | 'Annullato' | 'Urgente' | 'In lavorazione' | 'Da sviluppare';
}

export type todoPk = "id";
export type todoId = todo[todoPk];
export type todoOptionalAttributes = "id" | "data_ins" | "operatore_ins" | "stato" | "operatorePerFixBug" | "fase";
export type todoCreationAttributes = Optional<todoAttributes, todoOptionalAttributes>;

export class todo extends Model<todoAttributes, todoCreationAttributes> implements todoAttributes {
  id!: number;
  richiesta!: string;
  data_ins!: Date;
  operatore_ins!: number;
  stato!: number;
  operatorePerFixBug?: 'DT' | 'JF' | 'GV' | 'GP' | 'GZ' | 'DN';
  fase!: 'Da fare' | 'Da caricare' | 'Concluso' | 'Annullato' | 'Urgente' | 'In lavorazione' | 'Da sviluppare';

  // todo belongsTo ana_operatori via operatore_ins
  operatore_ins_ana_operatori!: ana_operatori;
  getOperatore_ins_ana_operatori!: Sequelize.BelongsToGetAssociationMixin<ana_operatori>;
  setOperatore_ins_ana_operatori!: Sequelize.BelongsToSetAssociationMixin<ana_operatori, ana_operatoriId>;
  createOperatore_ins_ana_operatori!: Sequelize.BelongsToCreateAssociationMixin<ana_operatori>;

  static initModel(sequelize: Sequelize.Sequelize): typeof todo {
    return todo.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    richiesta: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    data_ins: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('current_timestamp')
    },
    operatore_ins: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      references: {
        model: 'ana_operatori',
        key: 'id_operatore'
      }
    },
    stato: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    operatorePerFixBug: {
      type: DataTypes.ENUM('DT','JF','GV','GP','GZ','DN'),
      allowNull: true
    },
    fase: {
      type: DataTypes.ENUM('Da fare','Da caricare','Concluso','Annullato','Urgente','In lavorazione','Da sviluppare'),
      allowNull: false,
      defaultValue: "Da fare"
    }
  }, {
    sequelize,
    tableName: 'todo',
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
        name: "todo_ana_operatori_id_operatore_fk",
        using: "BTREE",
        fields: [
          { name: "operatore_ins" },
        ]
      },
    ]
  });
  }
}
