import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { ana_operatori, ana_operatoriId } from './ana_operatori';

export interface ip_bloccatiAttributes {
  id: number;
  ip: string;
  timestamp: Date;
  userId: number;
  injId?: number;
  typeVuln?: string;
  lastModify?: Date;
}

export type ip_bloccatiPk = "id";
export type ip_bloccatiId = ip_bloccati[ip_bloccatiPk];
export type ip_bloccatiOptionalAttributes = "id" | "timestamp" | "injId" | "typeVuln" | "lastModify";
export type ip_bloccatiCreationAttributes = Optional<ip_bloccatiAttributes, ip_bloccatiOptionalAttributes>;

export class ip_bloccati extends Model<ip_bloccatiAttributes, ip_bloccatiCreationAttributes> implements ip_bloccatiAttributes {
  id!: number;
  ip!: string;
  timestamp!: Date;
  userId!: number;
  injId?: number;
  typeVuln?: string;
  lastModify?: Date;

  // ip_bloccati belongsTo ana_operatori via userId
  user!: ana_operatori;
  getUser!: Sequelize.BelongsToGetAssociationMixin<ana_operatori>;
  setUser!: Sequelize.BelongsToSetAssociationMixin<ana_operatori, ana_operatoriId>;
  createUser!: Sequelize.BelongsToCreateAssociationMixin<ana_operatori>;

  static initModel(sequelize: Sequelize.Sequelize): typeof ip_bloccati {
    return ip_bloccati.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ip: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    timestamp: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('current_timestamp')
    },
    userId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'ana_operatori',
        key: 'id_operatore'
      }
    },
    injId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    typeVuln: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    lastModify: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ip_bloccati',
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
        name: "ip_bloccati_ana_operatori_id_operatore_fk",
        using: "BTREE",
        fields: [
          { name: "userId" },
        ]
      },
    ]
  });
  }
}
