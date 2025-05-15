import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { crediti_commesse, crediti_commesseId } from './crediti_commesse';

export interface codici_importo_commessaAttributes {
  id: number;
  codice?: string;
}

export type codici_importo_commessaPk = "id";
export type codici_importo_commessaId = codici_importo_commessa[codici_importo_commessaPk];
export type codici_importo_commessaOptionalAttributes = "id" | "codice";
export type codici_importo_commessaCreationAttributes = Optional<codici_importo_commessaAttributes, codici_importo_commessaOptionalAttributes>;

export class codici_importo_commessa extends Model<codici_importo_commessaAttributes, codici_importo_commessaCreationAttributes> implements codici_importo_commessaAttributes {
  id!: number;
  codice?: string;

  // codici_importo_commessa hasMany crediti_commesse via codice
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

  static initModel(sequelize: Sequelize.Sequelize): typeof codici_importo_commessa {
    return codici_importo_commessa.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    codice: {
      type: DataTypes.STRING(50),
      allowNull: true,
      unique: "codici_importo_commessa_pk_2"
    }
  }, {
    sequelize,
    tableName: 'codici_importo_commessa',
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
        name: "codici_importo_commessa_pk_2",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "codice" },
        ]
      },
    ]
  });
  }
}
