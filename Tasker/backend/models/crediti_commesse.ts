import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { codici_importo_commessa, codici_importo_commessaId } from './codici_importo_commessa';
import type { commesse, commesseId } from './commesse';
import type { credito_utilizzato, credito_utilizzatoId } from './credito_utilizzato';
import type { tipologie_credito, tipologie_creditoId } from './tipologie_credito';

export interface crediti_commesseAttributes {
  id: number;
  id_commessa: number;
  id_tipologia: number;
  data_c: string;
  codice?: number;
  anni: number;
  importo: number;
}

export type crediti_commessePk = "id";
export type crediti_commesseId = crediti_commesse[crediti_commessePk];
export type crediti_commesseOptionalAttributes = "id" | "codice";
export type crediti_commesseCreationAttributes = Optional<crediti_commesseAttributes, crediti_commesseOptionalAttributes>;

export class crediti_commesse extends Model<crediti_commesseAttributes, crediti_commesseCreationAttributes> implements crediti_commesseAttributes {
  id!: number;
  id_commessa!: number;
  id_tipologia!: number;
  data_c!: string;
  codice?: number;
  anni!: number;
  importo!: number;

  // crediti_commesse belongsTo codici_importo_commessa via codice
  codice_codici_importo_commessa!: codici_importo_commessa;
  getCodice_codici_importo_commessa!: Sequelize.BelongsToGetAssociationMixin<codici_importo_commessa>;
  setCodice_codici_importo_commessa!: Sequelize.BelongsToSetAssociationMixin<codici_importo_commessa, codici_importo_commessaId>;
  createCodice_codici_importo_commessa!: Sequelize.BelongsToCreateAssociationMixin<codici_importo_commessa>;
  // crediti_commesse belongsTo commesse via id_commessa
  id_commessa_commesse!: commesse;
  getId_commessa_commesse!: Sequelize.BelongsToGetAssociationMixin<commesse>;
  setId_commessa_commesse!: Sequelize.BelongsToSetAssociationMixin<commesse, commesseId>;
  createId_commessa_commesse!: Sequelize.BelongsToCreateAssociationMixin<commesse>;
  // crediti_commesse hasMany credito_utilizzato via id_credito
  credito_utilizzatos!: credito_utilizzato[];
  getCredito_utilizzatos!: Sequelize.HasManyGetAssociationsMixin<credito_utilizzato>;
  setCredito_utilizzatos!: Sequelize.HasManySetAssociationsMixin<credito_utilizzato, credito_utilizzatoId>;
  addCredito_utilizzato!: Sequelize.HasManyAddAssociationMixin<credito_utilizzato, credito_utilizzatoId>;
  addCredito_utilizzatos!: Sequelize.HasManyAddAssociationsMixin<credito_utilizzato, credito_utilizzatoId>;
  createCredito_utilizzato!: Sequelize.HasManyCreateAssociationMixin<credito_utilizzato>;
  removeCredito_utilizzato!: Sequelize.HasManyRemoveAssociationMixin<credito_utilizzato, credito_utilizzatoId>;
  removeCredito_utilizzatos!: Sequelize.HasManyRemoveAssociationsMixin<credito_utilizzato, credito_utilizzatoId>;
  hasCredito_utilizzato!: Sequelize.HasManyHasAssociationMixin<credito_utilizzato, credito_utilizzatoId>;
  hasCredito_utilizzatos!: Sequelize.HasManyHasAssociationsMixin<credito_utilizzato, credito_utilizzatoId>;
  countCredito_utilizzatos!: Sequelize.HasManyCountAssociationsMixin;
  // crediti_commesse belongsTo tipologie_credito via id_tipologia
  id_tipologia_tipologie_credito!: tipologie_credito;
  getId_tipologia_tipologie_credito!: Sequelize.BelongsToGetAssociationMixin<tipologie_credito>;
  setId_tipologia_tipologie_credito!: Sequelize.BelongsToSetAssociationMixin<tipologie_credito, tipologie_creditoId>;
  createId_tipologia_tipologie_credito!: Sequelize.BelongsToCreateAssociationMixin<tipologie_credito>;

  static initModel(sequelize: Sequelize.Sequelize): typeof crediti_commesse {
    return crediti_commesse.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    id_commessa: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'commesse',
        key: 'id_commessa'
      }
    },
    id_tipologia: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'tipologie_credito',
        key: 'id_tipologia_credito'
      }
    },
    data_c: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    codice: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      references: {
        model: 'codici_importo_commessa',
        key: 'id'
      }
    },
    anni: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    importo: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'crediti_commesse',
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
        name: "crediti_commesse_codici_importo_commessa_id_fk",
        using: "BTREE",
        fields: [
          { name: "codice" },
        ]
      },
      {
        name: "crediti_commesse_commesse_id_commessa_fk",
        using: "BTREE",
        fields: [
          { name: "id_commessa" },
        ]
      },
      {
        name: "crediti_commesse_tipologie_credito_id_tipologia_credito_fk",
        using: "BTREE",
        fields: [
          { name: "id_tipologia" },
        ]
      },
    ]
  });
  }
}
