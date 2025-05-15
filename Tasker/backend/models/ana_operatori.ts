import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { cdm_letture, cdm_lettureId } from './cdm_letture';
import type { costo_operatori, costo_operatoriId } from './costo_operatori';
import type { el_dipendenti, el_dipendentiId } from './el_dipendenti';
import type { el_ruoli, el_ruoliId } from './el_ruoli';
import type { el_settori, el_settoriId } from './el_settori';
import type { gruppo_operatori, gruppo_operatoriId } from './gruppo_operatori';
import type { ip_bloccati, ip_bloccatiId } from './ip_bloccati';
import type { permessi_operatori, permessi_operatoriId } from './permessi_operatori';
import type { preventivi, preventiviId } from './preventivi';
import type { provvigioni, provvigioniId } from './provvigioni';
import type { qualifiche, qualificheId } from './qualifiche';
import type { qualifiche_operatori, qualifiche_operatoriId } from './qualifiche_operatori';
import type { settore_operatori, settore_operatoriId } from './settore_operatori';
import type { timetable, timetableId } from './timetable';
import type { todo, todoId } from './todo';

export interface ana_operatoriAttributes {
  id_operatore: number;
  cod_operatore: string;
  nome: string;
  cognome: string;
  note?: string;
  id_ruolo: number;
  usr?: string;
  psw?: string;
  stato: '0' | '1';
  data_attivazione?: string;
  data_disattivazione?: string;
  orelav_giorno: number;
  last_login: Date;
  ip_login?: string;
  id_el_dipendenti?: number;
}

export type ana_operatoriPk = "id_operatore";
export type ana_operatoriId = ana_operatori[ana_operatoriPk];
export type ana_operatoriOptionalAttributes = "id_operatore" | "note" | "usr" | "psw" | "stato" | "data_attivazione" | "data_disattivazione" | "orelav_giorno" | "last_login" | "ip_login" | "id_el_dipendenti";
export type ana_operatoriCreationAttributes = Optional<ana_operatoriAttributes, ana_operatoriOptionalAttributes>;

export class ana_operatori extends Model<ana_operatoriAttributes, ana_operatoriCreationAttributes> implements ana_operatoriAttributes {
  id_operatore!: number;
  cod_operatore!: string;
  nome!: string;
  cognome!: string;
  note?: string;
  id_ruolo!: number;
  usr?: string;
  psw?: string;
  stato!: '0' | '1';
  data_attivazione?: string;
  data_disattivazione?: string;
  orelav_giorno!: number;
  last_login!: Date;
  ip_login?: string;
  id_el_dipendenti?: number;

  // ana_operatori hasMany cdm_letture via operatore_ins
  cdm_lettures!: cdm_letture[];
  getCdm_lettures!: Sequelize.HasManyGetAssociationsMixin<cdm_letture>;
  setCdm_lettures!: Sequelize.HasManySetAssociationsMixin<cdm_letture, cdm_lettureId>;
  addCdm_letture!: Sequelize.HasManyAddAssociationMixin<cdm_letture, cdm_lettureId>;
  addCdm_lettures!: Sequelize.HasManyAddAssociationsMixin<cdm_letture, cdm_lettureId>;
  createCdm_letture!: Sequelize.HasManyCreateAssociationMixin<cdm_letture>;
  removeCdm_letture!: Sequelize.HasManyRemoveAssociationMixin<cdm_letture, cdm_lettureId>;
  removeCdm_lettures!: Sequelize.HasManyRemoveAssociationsMixin<cdm_letture, cdm_lettureId>;
  hasCdm_letture!: Sequelize.HasManyHasAssociationMixin<cdm_letture, cdm_lettureId>;
  hasCdm_lettures!: Sequelize.HasManyHasAssociationsMixin<cdm_letture, cdm_lettureId>;
  countCdm_lettures!: Sequelize.HasManyCountAssociationsMixin;
  // ana_operatori hasMany costo_operatori via id_operatore
  costo_operatoris!: costo_operatori[];
  getCosto_operatoris!: Sequelize.HasManyGetAssociationsMixin<costo_operatori>;
  setCosto_operatoris!: Sequelize.HasManySetAssociationsMixin<costo_operatori, costo_operatoriId>;
  addCosto_operatori!: Sequelize.HasManyAddAssociationMixin<costo_operatori, costo_operatoriId>;
  addCosto_operatoris!: Sequelize.HasManyAddAssociationsMixin<costo_operatori, costo_operatoriId>;
  createCosto_operatori!: Sequelize.HasManyCreateAssociationMixin<costo_operatori>;
  removeCosto_operatori!: Sequelize.HasManyRemoveAssociationMixin<costo_operatori, costo_operatoriId>;
  removeCosto_operatoris!: Sequelize.HasManyRemoveAssociationsMixin<costo_operatori, costo_operatoriId>;
  hasCosto_operatori!: Sequelize.HasManyHasAssociationMixin<costo_operatori, costo_operatoriId>;
  hasCosto_operatoris!: Sequelize.HasManyHasAssociationsMixin<costo_operatori, costo_operatoriId>;
  countCosto_operatoris!: Sequelize.HasManyCountAssociationsMixin;
  // ana_operatori belongsToMany el_settori via id_operatore and id_settore
  id_settore_el_settoris!: el_settori[];
  getId_settore_el_settoris!: Sequelize.BelongsToManyGetAssociationsMixin<el_settori>;
  setId_settore_el_settoris!: Sequelize.BelongsToManySetAssociationsMixin<el_settori, el_settoriId>;
  addId_settore_el_settori!: Sequelize.BelongsToManyAddAssociationMixin<el_settori, el_settoriId>;
  addId_settore_el_settoris!: Sequelize.BelongsToManyAddAssociationsMixin<el_settori, el_settoriId>;
  createId_settore_el_settori!: Sequelize.BelongsToManyCreateAssociationMixin<el_settori>;
  removeId_settore_el_settori!: Sequelize.BelongsToManyRemoveAssociationMixin<el_settori, el_settoriId>;
  removeId_settore_el_settoris!: Sequelize.BelongsToManyRemoveAssociationsMixin<el_settori, el_settoriId>;
  hasId_settore_el_settori!: Sequelize.BelongsToManyHasAssociationMixin<el_settori, el_settoriId>;
  hasId_settore_el_settoris!: Sequelize.BelongsToManyHasAssociationsMixin<el_settori, el_settoriId>;
  countId_settore_el_settoris!: Sequelize.BelongsToManyCountAssociationsMixin;
  // ana_operatori belongsToMany gruppo_operatori via id_operatore and id_gruppo
  id_gruppo_gruppo_operatoris!: gruppo_operatori[];
  getId_gruppo_gruppo_operatoris!: Sequelize.BelongsToManyGetAssociationsMixin<gruppo_operatori>;
  setId_gruppo_gruppo_operatoris!: Sequelize.BelongsToManySetAssociationsMixin<gruppo_operatori, gruppo_operatoriId>;
  addId_gruppo_gruppo_operatori!: Sequelize.BelongsToManyAddAssociationMixin<gruppo_operatori, gruppo_operatoriId>;
  addId_gruppo_gruppo_operatoris!: Sequelize.BelongsToManyAddAssociationsMixin<gruppo_operatori, gruppo_operatoriId>;
  createId_gruppo_gruppo_operatori!: Sequelize.BelongsToManyCreateAssociationMixin<gruppo_operatori>;
  removeId_gruppo_gruppo_operatori!: Sequelize.BelongsToManyRemoveAssociationMixin<gruppo_operatori, gruppo_operatoriId>;
  removeId_gruppo_gruppo_operatoris!: Sequelize.BelongsToManyRemoveAssociationsMixin<gruppo_operatori, gruppo_operatoriId>;
  hasId_gruppo_gruppo_operatori!: Sequelize.BelongsToManyHasAssociationMixin<gruppo_operatori, gruppo_operatoriId>;
  hasId_gruppo_gruppo_operatoris!: Sequelize.BelongsToManyHasAssociationsMixin<gruppo_operatori, gruppo_operatoriId>;
  countId_gruppo_gruppo_operatoris!: Sequelize.BelongsToManyCountAssociationsMixin;
  // ana_operatori hasMany ip_bloccati via userId
  ip_bloccatis!: ip_bloccati[];
  getIp_bloccatis!: Sequelize.HasManyGetAssociationsMixin<ip_bloccati>;
  setIp_bloccatis!: Sequelize.HasManySetAssociationsMixin<ip_bloccati, ip_bloccatiId>;
  addIp_bloccati!: Sequelize.HasManyAddAssociationMixin<ip_bloccati, ip_bloccatiId>;
  addIp_bloccatis!: Sequelize.HasManyAddAssociationsMixin<ip_bloccati, ip_bloccatiId>;
  createIp_bloccati!: Sequelize.HasManyCreateAssociationMixin<ip_bloccati>;
  removeIp_bloccati!: Sequelize.HasManyRemoveAssociationMixin<ip_bloccati, ip_bloccatiId>;
  removeIp_bloccatis!: Sequelize.HasManyRemoveAssociationsMixin<ip_bloccati, ip_bloccatiId>;
  hasIp_bloccati!: Sequelize.HasManyHasAssociationMixin<ip_bloccati, ip_bloccatiId>;
  hasIp_bloccatis!: Sequelize.HasManyHasAssociationsMixin<ip_bloccati, ip_bloccatiId>;
  countIp_bloccatis!: Sequelize.HasManyCountAssociationsMixin;
  // ana_operatori hasMany permessi_operatori via id_operatore
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
  // ana_operatori hasMany preventivi via id_operatore
  preventivis!: preventivi[];
  getPreventivis!: Sequelize.HasManyGetAssociationsMixin<preventivi>;
  setPreventivis!: Sequelize.HasManySetAssociationsMixin<preventivi, preventiviId>;
  addPreventivi!: Sequelize.HasManyAddAssociationMixin<preventivi, preventiviId>;
  addPreventivis!: Sequelize.HasManyAddAssociationsMixin<preventivi, preventiviId>;
  createPreventivi!: Sequelize.HasManyCreateAssociationMixin<preventivi>;
  removePreventivi!: Sequelize.HasManyRemoveAssociationMixin<preventivi, preventiviId>;
  removePreventivis!: Sequelize.HasManyRemoveAssociationsMixin<preventivi, preventiviId>;
  hasPreventivi!: Sequelize.HasManyHasAssociationMixin<preventivi, preventiviId>;
  hasPreventivis!: Sequelize.HasManyHasAssociationsMixin<preventivi, preventiviId>;
  countPreventivis!: Sequelize.HasManyCountAssociationsMixin;
  // ana_operatori hasMany provvigioni via id_operatore
  provvigionis!: provvigioni[];
  getProvvigionis!: Sequelize.HasManyGetAssociationsMixin<provvigioni>;
  setProvvigionis!: Sequelize.HasManySetAssociationsMixin<provvigioni, provvigioniId>;
  addProvvigioni!: Sequelize.HasManyAddAssociationMixin<provvigioni, provvigioniId>;
  addProvvigionis!: Sequelize.HasManyAddAssociationsMixin<provvigioni, provvigioniId>;
  createProvvigioni!: Sequelize.HasManyCreateAssociationMixin<provvigioni>;
  removeProvvigioni!: Sequelize.HasManyRemoveAssociationMixin<provvigioni, provvigioniId>;
  removeProvvigionis!: Sequelize.HasManyRemoveAssociationsMixin<provvigioni, provvigioniId>;
  hasProvvigioni!: Sequelize.HasManyHasAssociationMixin<provvigioni, provvigioniId>;
  hasProvvigionis!: Sequelize.HasManyHasAssociationsMixin<provvigioni, provvigioniId>;
  countProvvigionis!: Sequelize.HasManyCountAssociationsMixin;
  // ana_operatori belongsToMany qualifiche via id_operatori and id_qualifica
  id_qualifica_qualifiches!: qualifiche[];
  getId_qualifica_qualifiches!: Sequelize.BelongsToManyGetAssociationsMixin<qualifiche>;
  setId_qualifica_qualifiches!: Sequelize.BelongsToManySetAssociationsMixin<qualifiche, qualificheId>;
  addId_qualifica_qualifich!: Sequelize.BelongsToManyAddAssociationMixin<qualifiche, qualificheId>;
  addId_qualifica_qualifiches!: Sequelize.BelongsToManyAddAssociationsMixin<qualifiche, qualificheId>;
  createId_qualifica_qualifich!: Sequelize.BelongsToManyCreateAssociationMixin<qualifiche>;
  removeId_qualifica_qualifich!: Sequelize.BelongsToManyRemoveAssociationMixin<qualifiche, qualificheId>;
  removeId_qualifica_qualifiches!: Sequelize.BelongsToManyRemoveAssociationsMixin<qualifiche, qualificheId>;
  hasId_qualifica_qualifich!: Sequelize.BelongsToManyHasAssociationMixin<qualifiche, qualificheId>;
  hasId_qualifica_qualifiches!: Sequelize.BelongsToManyHasAssociationsMixin<qualifiche, qualificheId>;
  countId_qualifica_qualifiches!: Sequelize.BelongsToManyCountAssociationsMixin;
  // ana_operatori hasMany qualifiche_operatori via id_operatori
  qualifiche_operatoris!: qualifiche_operatori[];
  getQualifiche_operatoris!: Sequelize.HasManyGetAssociationsMixin<qualifiche_operatori>;
  setQualifiche_operatoris!: Sequelize.HasManySetAssociationsMixin<qualifiche_operatori, qualifiche_operatoriId>;
  addQualifiche_operatori!: Sequelize.HasManyAddAssociationMixin<qualifiche_operatori, qualifiche_operatoriId>;
  addQualifiche_operatoris!: Sequelize.HasManyAddAssociationsMixin<qualifiche_operatori, qualifiche_operatoriId>;
  createQualifiche_operatori!: Sequelize.HasManyCreateAssociationMixin<qualifiche_operatori>;
  removeQualifiche_operatori!: Sequelize.HasManyRemoveAssociationMixin<qualifiche_operatori, qualifiche_operatoriId>;
  removeQualifiche_operatoris!: Sequelize.HasManyRemoveAssociationsMixin<qualifiche_operatori, qualifiche_operatoriId>;
  hasQualifiche_operatori!: Sequelize.HasManyHasAssociationMixin<qualifiche_operatori, qualifiche_operatoriId>;
  hasQualifiche_operatoris!: Sequelize.HasManyHasAssociationsMixin<qualifiche_operatori, qualifiche_operatoriId>;
  countQualifiche_operatoris!: Sequelize.HasManyCountAssociationsMixin;
  // ana_operatori hasMany settore_operatori via id_operatore
  settore_operatoris!: settore_operatori[];
  getSettore_operatoris!: Sequelize.HasManyGetAssociationsMixin<settore_operatori>;
  setSettore_operatoris!: Sequelize.HasManySetAssociationsMixin<settore_operatori, settore_operatoriId>;
  addSettore_operatori!: Sequelize.HasManyAddAssociationMixin<settore_operatori, settore_operatoriId>;
  addSettore_operatoris!: Sequelize.HasManyAddAssociationsMixin<settore_operatori, settore_operatoriId>;
  createSettore_operatori!: Sequelize.HasManyCreateAssociationMixin<settore_operatori>;
  removeSettore_operatori!: Sequelize.HasManyRemoveAssociationMixin<settore_operatori, settore_operatoriId>;
  removeSettore_operatoris!: Sequelize.HasManyRemoveAssociationsMixin<settore_operatori, settore_operatoriId>;
  hasSettore_operatori!: Sequelize.HasManyHasAssociationMixin<settore_operatori, settore_operatoriId>;
  hasSettore_operatoris!: Sequelize.HasManyHasAssociationsMixin<settore_operatori, settore_operatoriId>;
  countSettore_operatoris!: Sequelize.HasManyCountAssociationsMixin;
  // ana_operatori hasMany timetable via id_operatore
  timetables!: timetable[];
  getTimetables!: Sequelize.HasManyGetAssociationsMixin<timetable>;
  setTimetables!: Sequelize.HasManySetAssociationsMixin<timetable, timetableId>;
  addTimetable!: Sequelize.HasManyAddAssociationMixin<timetable, timetableId>;
  addTimetables!: Sequelize.HasManyAddAssociationsMixin<timetable, timetableId>;
  createTimetable!: Sequelize.HasManyCreateAssociationMixin<timetable>;
  removeTimetable!: Sequelize.HasManyRemoveAssociationMixin<timetable, timetableId>;
  removeTimetables!: Sequelize.HasManyRemoveAssociationsMixin<timetable, timetableId>;
  hasTimetable!: Sequelize.HasManyHasAssociationMixin<timetable, timetableId>;
  hasTimetables!: Sequelize.HasManyHasAssociationsMixin<timetable, timetableId>;
  countTimetables!: Sequelize.HasManyCountAssociationsMixin;
  // ana_operatori hasMany timetable via operatore_ins
  operatore_ins_timetables!: timetable[];
  getOperatore_ins_timetables!: Sequelize.HasManyGetAssociationsMixin<timetable>;
  setOperatore_ins_timetables!: Sequelize.HasManySetAssociationsMixin<timetable, timetableId>;
  addOperatore_ins_timetable!: Sequelize.HasManyAddAssociationMixin<timetable, timetableId>;
  addOperatore_ins_timetables!: Sequelize.HasManyAddAssociationsMixin<timetable, timetableId>;
  createOperatore_ins_timetable!: Sequelize.HasManyCreateAssociationMixin<timetable>;
  removeOperatore_ins_timetable!: Sequelize.HasManyRemoveAssociationMixin<timetable, timetableId>;
  removeOperatore_ins_timetables!: Sequelize.HasManyRemoveAssociationsMixin<timetable, timetableId>;
  hasOperatore_ins_timetable!: Sequelize.HasManyHasAssociationMixin<timetable, timetableId>;
  hasOperatore_ins_timetables!: Sequelize.HasManyHasAssociationsMixin<timetable, timetableId>;
  countOperatore_ins_timetables!: Sequelize.HasManyCountAssociationsMixin;
  // ana_operatori hasMany todo via operatore_ins
  todos!: todo[];
  getTodos!: Sequelize.HasManyGetAssociationsMixin<todo>;
  setTodos!: Sequelize.HasManySetAssociationsMixin<todo, todoId>;
  addTodo!: Sequelize.HasManyAddAssociationMixin<todo, todoId>;
  addTodos!: Sequelize.HasManyAddAssociationsMixin<todo, todoId>;
  createTodo!: Sequelize.HasManyCreateAssociationMixin<todo>;
  removeTodo!: Sequelize.HasManyRemoveAssociationMixin<todo, todoId>;
  removeTodos!: Sequelize.HasManyRemoveAssociationsMixin<todo, todoId>;
  hasTodo!: Sequelize.HasManyHasAssociationMixin<todo, todoId>;
  hasTodos!: Sequelize.HasManyHasAssociationsMixin<todo, todoId>;
  countTodos!: Sequelize.HasManyCountAssociationsMixin;
  // ana_operatori belongsTo el_dipendenti via id_el_dipendenti
  id_el_dipendenti_el_dipendenti!: el_dipendenti;
  getId_el_dipendenti_el_dipendenti!: Sequelize.BelongsToGetAssociationMixin<el_dipendenti>;
  setId_el_dipendenti_el_dipendenti!: Sequelize.BelongsToSetAssociationMixin<el_dipendenti, el_dipendentiId>;
  createId_el_dipendenti_el_dipendenti!: Sequelize.BelongsToCreateAssociationMixin<el_dipendenti>;
  // ana_operatori belongsTo el_ruoli via id_ruolo
  id_ruolo_el_ruoli!: el_ruoli;
  getId_ruolo_el_ruoli!: Sequelize.BelongsToGetAssociationMixin<el_ruoli>;
  setId_ruolo_el_ruoli!: Sequelize.BelongsToSetAssociationMixin<el_ruoli, el_ruoliId>;
  createId_ruolo_el_ruoli!: Sequelize.BelongsToCreateAssociationMixin<el_ruoli>;

  static initModel(sequelize: Sequelize.Sequelize): typeof ana_operatori {
    return ana_operatori.init({
    id_operatore: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    cod_operatore: {
      type: DataTypes.STRING(20),
      allowNull: false,
      unique: "ana_operatori_pk"
    },
    nome: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    cognome: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    note: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    id_ruolo: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'el_ruoli',
        key: 'id_ruolo'
      }
    },
    usr: {
      type: DataTypes.STRING(45),
      allowNull: true,
      unique: "ana_operatori_pk2"
    },
    psw: {
      type: DataTypes.CHAR(128),
      allowNull: true,
      defaultValue: ""
    },
    stato: {
      type: DataTypes.ENUM('0','1'),
      allowNull: false,
      defaultValue: "0",
      comment: " "
    },
    data_attivazione: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    data_disattivazione: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    orelav_giorno: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 8
    },
    last_login: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('current_timestamp')
    },
    ip_login: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    id_el_dipendenti: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'el_dipendenti',
        key: 'id_dipendente'
      }
    }
  }, {
    sequelize,
    tableName: 'ana_operatori',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_operatore" },
        ]
      },
      {
        name: "ana_operatori_pk",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "cod_operatore" },
        ]
      },
      {
        name: "ana_operatori_pk2",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "usr" },
        ]
      },
      {
        name: "FK_ana_operatori_2",
        using: "BTREE",
        fields: [
          { name: "id_ruolo" },
        ]
      },
      {
        name: "ana_operatori_el_dipendenti_id_dipendente_fk",
        using: "BTREE",
        fields: [
          { name: "id_el_dipendenti" },
        ]
      },
    ]
  });
  }
}
