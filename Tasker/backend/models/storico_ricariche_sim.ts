import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { condomini, condominiId } from './condomini';

export interface storico_ricariche_simAttributes {
  id_condominio: number;
  data_ricarica: string;
  importo_ricarica?: number;
}

export type storico_ricariche_simPk = "id_condominio" | "data_ricarica";
export type storico_ricariche_simId = storico_ricariche_sim[storico_ricariche_simPk];
export type storico_ricariche_simOptionalAttributes = "importo_ricarica";
export type storico_ricariche_simCreationAttributes = Optional<storico_ricariche_simAttributes, storico_ricariche_simOptionalAttributes>;

export class storico_ricariche_sim extends Model<storico_ricariche_simAttributes, storico_ricariche_simCreationAttributes> implements storico_ricariche_simAttributes {
  id_condominio!: number;
  data_ricarica!: string;
  importo_ricarica?: number;

  // storico_ricariche_sim belongsTo condomini via id_condominio
  id_condominio_condomini!: condomini;
  getId_condominio_condomini!: Sequelize.BelongsToGetAssociationMixin<condomini>;
  setId_condominio_condomini!: Sequelize.BelongsToSetAssociationMixin<condomini, condominiId>;
  createId_condominio_condomini!: Sequelize.BelongsToCreateAssociationMixin<condomini>;

  static initModel(sequelize: Sequelize.Sequelize): typeof storico_ricariche_sim {
    return storico_ricariche_sim.init({
    id_condominio: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'condomini',
        key: 'id_condominio'
      }
    },
    data_ricarica: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      primaryKey: true
    },
    importo_ricarica: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'storico_ricariche_sim',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_condominio" },
          { name: "data_ricarica" },
        ]
      },
    ]
  });
  }
}
