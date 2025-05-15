import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { crediti_commesse, crediti_commesseId } from './crediti_commesse';

export interface tipologie_creditoAttributes {
  id_tipologia_credito: number;
  nome_tipologia_credito: string;
}

export type tipologie_creditoPk = "id_tipologia_credito";
export type tipologie_creditoId = tipologie_credito[tipologie_creditoPk];
export type tipologie_creditoOptionalAttributes = "id_tipologia_credito";
export type tipologie_creditoCreationAttributes = Optional<tipologie_creditoAttributes, tipologie_creditoOptionalAttributes>;

export class tipologie_credito extends Model<tipologie_creditoAttributes, tipologie_creditoCreationAttributes> implements tipologie_creditoAttributes {
  id_tipologia_credito!: number;
  nome_tipologia_credito!: string;

  // tipologie_credito hasMany crediti_commesse via id_tipologia
  crediti_commesses!: crediti_commesse[];
  getCrediti_commesses!: Sequelize.HasManyGetAssociationsMixin<crediti_commesse>;
  setCrediti_commesses!: Sequelize.HasManySetAssociationsMixin<crediti_commesse, crediti_commesseId>;
  addCrediti_commess!: Sequelize.HasManyAddAssociationMixin<crediti_commesse, crediti_commesseId>;
  addCrediti_commesses!: Sequelize.HasManyAddAssociationsMixin<crediti_commesse, crediti_commesseId>;
  createCrediti_commess!: Sequelize.HasManyCreateAssociationMixin<crediti_commesse>;
  removeCrediti_commess!: Sequelize.HasManyRemoveAssociationMixin<crediti_commesse, crediti_commesseId>;
  removeCrediti_commesses!: Sequelize.HasManyRemoveAssociationsMixin<crediti_commesse, crediti_commesseId>;
  hasCrediti_commess!: Sequelize.HasManyHasAssociationMixin<crediti_commesse, crediti_commesseId>;
  hasCrediti_commesses!: Sequelize.HasManyHasAssociationsMixin<crediti_commesse, crediti_commesseId>;
  countCrediti_commesses!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof tipologie_credito {
    return tipologie_credito.init({
    id_tipologia_credito: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    nome_tipologia_credito: {
      type: DataTypes.STRING(15),
      allowNull: false,
      unique: "tipologie_credito_pk"
    }
  }, {
    sequelize,
    tableName: 'tipologie_credito',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_tipologia_credito" },
        ]
      },
      {
        name: "tipologie_credito_pk",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "nome_tipologia_credito" },
        ]
      },
    ]
  });
  }
}
