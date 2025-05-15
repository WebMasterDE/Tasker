import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { el_classificazioni, el_classificazioniId } from './el_classificazioni';
import type { servizi_classificazione, servizi_classificazioneId } from './servizi_classificazione';

export interface el_serviziAttributes {
  id_servizio: number;
  nome: string;
}

export type el_serviziPk = "id_servizio";
export type el_serviziId = el_servizi[el_serviziPk];
export type el_serviziOptionalAttributes = "id_servizio";
export type el_serviziCreationAttributes = Optional<el_serviziAttributes, el_serviziOptionalAttributes>;

export class el_servizi extends Model<el_serviziAttributes, el_serviziCreationAttributes> implements el_serviziAttributes {
  id_servizio!: number;
  nome!: string;

  // el_servizi belongsToMany el_classificazioni via id_servizio and id_classificazione
  id_classificazione_el_classificazionis!: el_classificazioni[];
  getId_classificazione_el_classificazionis!: Sequelize.BelongsToManyGetAssociationsMixin<el_classificazioni>;
  setId_classificazione_el_classificazionis!: Sequelize.BelongsToManySetAssociationsMixin<el_classificazioni, el_classificazioniId>;
  addId_classificazione_el_classificazioni!: Sequelize.BelongsToManyAddAssociationMixin<el_classificazioni, el_classificazioniId>;
  addId_classificazione_el_classificazionis!: Sequelize.BelongsToManyAddAssociationsMixin<el_classificazioni, el_classificazioniId>;
  createId_classificazione_el_classificazioni!: Sequelize.BelongsToManyCreateAssociationMixin<el_classificazioni>;
  removeId_classificazione_el_classificazioni!: Sequelize.BelongsToManyRemoveAssociationMixin<el_classificazioni, el_classificazioniId>;
  removeId_classificazione_el_classificazionis!: Sequelize.BelongsToManyRemoveAssociationsMixin<el_classificazioni, el_classificazioniId>;
  hasId_classificazione_el_classificazioni!: Sequelize.BelongsToManyHasAssociationMixin<el_classificazioni, el_classificazioniId>;
  hasId_classificazione_el_classificazionis!: Sequelize.BelongsToManyHasAssociationsMixin<el_classificazioni, el_classificazioniId>;
  countId_classificazione_el_classificazionis!: Sequelize.BelongsToManyCountAssociationsMixin;
  // el_servizi hasMany servizi_classificazione via id_servizio
  servizi_classificaziones!: servizi_classificazione[];
  getServizi_classificaziones!: Sequelize.HasManyGetAssociationsMixin<servizi_classificazione>;
  setServizi_classificaziones!: Sequelize.HasManySetAssociationsMixin<servizi_classificazione, servizi_classificazioneId>;
  addServizi_classificazione!: Sequelize.HasManyAddAssociationMixin<servizi_classificazione, servizi_classificazioneId>;
  addServizi_classificaziones!: Sequelize.HasManyAddAssociationsMixin<servizi_classificazione, servizi_classificazioneId>;
  createServizi_classificazione!: Sequelize.HasManyCreateAssociationMixin<servizi_classificazione>;
  removeServizi_classificazione!: Sequelize.HasManyRemoveAssociationMixin<servizi_classificazione, servizi_classificazioneId>;
  removeServizi_classificaziones!: Sequelize.HasManyRemoveAssociationsMixin<servizi_classificazione, servizi_classificazioneId>;
  hasServizi_classificazione!: Sequelize.HasManyHasAssociationMixin<servizi_classificazione, servizi_classificazioneId>;
  hasServizi_classificaziones!: Sequelize.HasManyHasAssociationsMixin<servizi_classificazione, servizi_classificazioneId>;
  countServizi_classificaziones!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof el_servizi {
    return el_servizi.init({
    id_servizio: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    nome: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: "el_servizi_pk"
    }
  }, {
    sequelize,
    tableName: 'el_servizi',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_servizio" },
        ]
      },
      {
        name: "el_servizi_pk",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "nome" },
        ]
      },
    ]
  });
  }
}
