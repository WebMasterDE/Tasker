import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { el_classificazioni, el_classificazioniId } from './el_classificazioni';
import type { el_servizi, el_serviziId } from './el_servizi';

export interface servizi_classificazioneAttributes {
  id_servizio: number;
  id_classificazione: number;
}

export type servizi_classificazionePk = "id_servizio" | "id_classificazione";
export type servizi_classificazioneId = servizi_classificazione[servizi_classificazionePk];
export type servizi_classificazioneCreationAttributes = servizi_classificazioneAttributes;

export class servizi_classificazione extends Model<servizi_classificazioneAttributes, servizi_classificazioneCreationAttributes> implements servizi_classificazioneAttributes {
  id_servizio!: number;
  id_classificazione!: number;

  // servizi_classificazione belongsTo el_classificazioni via id_classificazione
  id_classificazione_el_classificazioni!: el_classificazioni;
  getId_classificazione_el_classificazioni!: Sequelize.BelongsToGetAssociationMixin<el_classificazioni>;
  setId_classificazione_el_classificazioni!: Sequelize.BelongsToSetAssociationMixin<el_classificazioni, el_classificazioniId>;
  createId_classificazione_el_classificazioni!: Sequelize.BelongsToCreateAssociationMixin<el_classificazioni>;
  // servizi_classificazione belongsTo el_servizi via id_servizio
  id_servizio_el_servizi!: el_servizi;
  getId_servizio_el_servizi!: Sequelize.BelongsToGetAssociationMixin<el_servizi>;
  setId_servizio_el_servizi!: Sequelize.BelongsToSetAssociationMixin<el_servizi, el_serviziId>;
  createId_servizio_el_servizi!: Sequelize.BelongsToCreateAssociationMixin<el_servizi>;

  static initModel(sequelize: Sequelize.Sequelize): typeof servizi_classificazione {
    return servizi_classificazione.init({
    id_servizio: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'el_servizi',
        key: 'id_servizio'
      }
    },
    id_classificazione: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'el_classificazioni',
        key: 'id_classificazione'
      }
    }
  }, {
    sequelize,
    tableName: 'servizi_classificazione',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_servizio" },
          { name: "id_classificazione" },
        ]
      },
      {
        name: "servizi_classificazione_id_servizio_id_classificazione_unique",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_servizio" },
          { name: "id_classificazione" },
        ]
      },
      {
        name: "id_classificazione",
        using: "BTREE",
        fields: [
          { name: "id_classificazione" },
        ]
      },
      {
        name: "servizi_classificazione_el_servizi_id_servizio_fk",
        using: "BTREE",
        fields: [
          { name: "id_servizio" },
        ]
      },
    ]
  });
  }
}
