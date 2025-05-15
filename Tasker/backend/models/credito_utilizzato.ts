import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { commesse, commesseId } from './commesse';
import type { crediti_commesse, crediti_commesseId } from './crediti_commesse';

export interface credito_utilizzatoAttributes {
  id_credito: number;
  tipo_credito: 'SAL1' | 'SAL2' | 'SALDO' | 'CREDITO_110';
  id_commessa: number;
  anno: number;
  importo_ceduto?: number;
  importo_riconosciuto?: number;
  destinatario?: string;
  data_ceduto?: string;
  importo_utilizzato?: number;
  data_utilizzato?: string;
}

export type credito_utilizzatoPk = "id_credito" | "anno";
export type credito_utilizzatoId = credito_utilizzato[credito_utilizzatoPk];
export type credito_utilizzatoOptionalAttributes = "id_commessa" | "anno" | "importo_ceduto" | "importo_riconosciuto" | "destinatario" | "data_ceduto" | "importo_utilizzato" | "data_utilizzato";
export type credito_utilizzatoCreationAttributes = Optional<credito_utilizzatoAttributes, credito_utilizzatoOptionalAttributes>;

export class credito_utilizzato extends Model<credito_utilizzatoAttributes, credito_utilizzatoCreationAttributes> implements credito_utilizzatoAttributes {
  id_credito!: number;
  tipo_credito!: 'SAL1' | 'SAL2' | 'SALDO' | 'CREDITO_110';
  id_commessa!: number;
  anno!: number;
  importo_ceduto?: number;
  importo_riconosciuto?: number;
  destinatario?: string;
  data_ceduto?: string;
  importo_utilizzato?: number;
  data_utilizzato?: string;

  // credito_utilizzato belongsTo commesse via id_commessa
  id_commessa_commesse!: commesse;
  getId_commessa_commesse!: Sequelize.BelongsToGetAssociationMixin<commesse>;
  setId_commessa_commesse!: Sequelize.BelongsToSetAssociationMixin<commesse, commesseId>;
  createId_commessa_commesse!: Sequelize.BelongsToCreateAssociationMixin<commesse>;
  // credito_utilizzato belongsTo crediti_commesse via id_credito
  id_credito_crediti_commesse!: crediti_commesse;
  getId_credito_crediti_commesse!: Sequelize.BelongsToGetAssociationMixin<crediti_commesse>;
  setId_credito_crediti_commesse!: Sequelize.BelongsToSetAssociationMixin<crediti_commesse, crediti_commesseId>;
  createId_credito_crediti_commesse!: Sequelize.BelongsToCreateAssociationMixin<crediti_commesse>;

  static initModel(sequelize: Sequelize.Sequelize): typeof credito_utilizzato {
    return credito_utilizzato.init({
    id_credito: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'crediti_commesse',
        key: 'id'
      }
    },
    tipo_credito: {
      type: DataTypes.ENUM('SAL1','SAL2','SALDO','CREDITO_110'),
      allowNull: false
    },
    id_commessa: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      references: {
        model: 'commesse',
        key: 'id_commessa'
      }
    },
    anno: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    importo_ceduto: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true,
      defaultValue: 0.00
    },
    importo_riconosciuto: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true,
      defaultValue: 0.00
    },
    destinatario: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    data_ceduto: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    importo_utilizzato: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true,
      defaultValue: 0.00
    },
    data_utilizzato: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'credito_utilizzato',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_credito" },
          { name: "anno" },
        ]
      },
      {
        name: "FK__commesse",
        using: "BTREE",
        fields: [
          { name: "id_commessa" },
        ]
      },
    ]
  });
  }
}
