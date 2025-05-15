import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { anagrafiche, anagraficheId } from './anagrafiche';

export interface associazioni_ditte_doganeAttributes {
  id_ditta: number;
  id_committente: number;
  id_cliente?: number;
  anno: number;
}

export type associazioni_ditte_doganePk = "id_ditta" | "anno";
export type associazioni_ditte_doganeId = associazioni_ditte_dogane[associazioni_ditte_doganePk];
export type associazioni_ditte_doganeOptionalAttributes = "id_cliente";
export type associazioni_ditte_doganeCreationAttributes = Optional<associazioni_ditte_doganeAttributes, associazioni_ditte_doganeOptionalAttributes>;

export class associazioni_ditte_dogane extends Model<associazioni_ditte_doganeAttributes, associazioni_ditte_doganeCreationAttributes> implements associazioni_ditte_doganeAttributes {
  id_ditta!: number;
  id_committente!: number;
  id_cliente?: number;
  anno!: number;

  // associazioni_ditte_dogane belongsTo anagrafiche via id_committente
  id_committente_anagrafiche!: anagrafiche;
  getId_committente_anagrafiche!: Sequelize.BelongsToGetAssociationMixin<anagrafiche>;
  setId_committente_anagrafiche!: Sequelize.BelongsToSetAssociationMixin<anagrafiche, anagraficheId>;
  createId_committente_anagrafiche!: Sequelize.BelongsToCreateAssociationMixin<anagrafiche>;
  // associazioni_ditte_dogane belongsTo anagrafiche via id_cliente
  id_cliente_anagrafiche!: anagrafiche;
  getId_cliente_anagrafiche!: Sequelize.BelongsToGetAssociationMixin<anagrafiche>;
  setId_cliente_anagrafiche!: Sequelize.BelongsToSetAssociationMixin<anagrafiche, anagraficheId>;
  createId_cliente_anagrafiche!: Sequelize.BelongsToCreateAssociationMixin<anagrafiche>;

  static initModel(sequelize: Sequelize.Sequelize): typeof associazioni_ditte_dogane {
    return associazioni_ditte_dogane.init({
    id_ditta: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    id_committente: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'anagrafiche',
        key: 'id_anagrafica'
      }
    },
    id_cliente: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      references: {
        model: 'anagrafiche',
        key: 'id_anagrafica'
      }
    },
    anno: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'associazioni_ditte_dogane',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_ditta" },
          { name: "anno" },
        ]
      },
      {
        name: "associazioni_ditte_dogane_anagrafiche_id_anagrafica_fk",
        using: "BTREE",
        fields: [
          { name: "id_committente" },
        ]
      },
      {
        name: "associazioni_ditte_dogane_anagrafiche_id_anagrafica_fk_2",
        using: "BTREE",
        fields: [
          { name: "id_cliente" },
        ]
      },
    ]
  });
  }
}
