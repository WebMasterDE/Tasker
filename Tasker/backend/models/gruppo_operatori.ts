import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { ana_operatori, ana_operatoriId } from './ana_operatori';
import type { permessi_operatori, permessi_operatoriId } from './permessi_operatori';

export interface gruppo_operatoriAttributes {
  id_gruppo: number;
  nome_gruppo: string;
  icona?: string;
  controller?: string;
  action?: string;
  ordering?: number;
  def_checked: number;
  redirect_url?: string;
  leftbar: number;
}

export type gruppo_operatoriPk = "id_gruppo";
export type gruppo_operatoriId = gruppo_operatori[gruppo_operatoriPk];
export type gruppo_operatoriOptionalAttributes = "id_gruppo" | "icona" | "controller" | "action" | "ordering" | "def_checked" | "redirect_url" | "leftbar";
export type gruppo_operatoriCreationAttributes = Optional<gruppo_operatoriAttributes, gruppo_operatoriOptionalAttributes>;

export class gruppo_operatori extends Model<gruppo_operatoriAttributes, gruppo_operatoriCreationAttributes> implements gruppo_operatoriAttributes {
  id_gruppo!: number;
  nome_gruppo!: string;
  icona?: string;
  controller?: string;
  action?: string;
  ordering?: number;
  def_checked!: number;
  redirect_url?: string;
  leftbar!: number;

  // gruppo_operatori belongsToMany ana_operatori via id_gruppo and id_operatore
  id_operatore_ana_operatoris!: ana_operatori[];
  getId_operatore_ana_operatoris!: Sequelize.BelongsToManyGetAssociationsMixin<ana_operatori>;
  setId_operatore_ana_operatoris!: Sequelize.BelongsToManySetAssociationsMixin<ana_operatori, ana_operatoriId>;
  addId_operatore_ana_operatori!: Sequelize.BelongsToManyAddAssociationMixin<ana_operatori, ana_operatoriId>;
  addId_operatore_ana_operatoris!: Sequelize.BelongsToManyAddAssociationsMixin<ana_operatori, ana_operatoriId>;
  createId_operatore_ana_operatori!: Sequelize.BelongsToManyCreateAssociationMixin<ana_operatori>;
  removeId_operatore_ana_operatori!: Sequelize.BelongsToManyRemoveAssociationMixin<ana_operatori, ana_operatoriId>;
  removeId_operatore_ana_operatoris!: Sequelize.BelongsToManyRemoveAssociationsMixin<ana_operatori, ana_operatoriId>;
  hasId_operatore_ana_operatori!: Sequelize.BelongsToManyHasAssociationMixin<ana_operatori, ana_operatoriId>;
  hasId_operatore_ana_operatoris!: Sequelize.BelongsToManyHasAssociationsMixin<ana_operatori, ana_operatoriId>;
  countId_operatore_ana_operatoris!: Sequelize.BelongsToManyCountAssociationsMixin;
  // gruppo_operatori hasMany permessi_operatori via id_gruppo
  permessi_operatoris!: permessi_operatori[];
  getPermessi_operatoris!: Sequelize.HasManyGetAssociationsMixin<permessi_operatori>;
  setPermessi_operatoris!: Sequelize.HasManySetAssociationsMixin<permessi_operatori, permessi_operatoriId>;
  addPermessi_operatori!: Sequelize.HasManyAddAssociationMixin<permessi_operatori, permessi_operatoriId>;
  addPermessi_operatoris!: Sequelize.HasManyAddAssociationsMixin<permessi_operatori, permessi_operatoriId>;
  createPermessi_operatori!: Sequelize.HasManyCreateAssociationMixin<permessi_operatori>;
  removePermessi_operatori!: Sequelize.HasManyRemoveAssociationMixin<permessi_operatori, permessi_operatoriId>;
  removePermessi_operatoris!: Sequelize.HasManyRemoveAssociationsMixin<permessi_operatori, permessi_operatoriId>;
  hasPermessi_operatori!: Sequelize.HasManyHasAssociationMixin<permessi_operatori, permessi_operatoriId>;
  hasPermessi_operatoris!: Sequelize.HasManyHasAssociationsMixin<permessi_operatori, permessi_operatoriId>;
  countPermessi_operatoris!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof gruppo_operatori {
    return gruppo_operatori.init({
    id_gruppo: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    nome_gruppo: {
      type: DataTypes.STRING(45),
      allowNull: false,
      unique: "gruppo_operatori_pk"
    },
    icona: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    controller: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    action: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ordering: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    def_checked: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    redirect_url: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    leftbar: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    }
  }, {
    sequelize,
    tableName: 'gruppo_operatori',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_gruppo" },
        ]
      },
      {
        name: "gruppo_operatori_pk",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "nome_gruppo" },
        ]
      },
    ]
  });
  }
}
