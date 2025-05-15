import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { acquisti, acquistiId } from './acquisti';
import type { acquisti_commesse, acquisti_commesseId } from './acquisti_commesse';
import type { commesse_associate, commesse_associateId } from './commesse_associate';
import type { commesse_sb, commesse_sbId } from './commesse_sb';
import type { crediti_commesse, crediti_commesseId } from './crediti_commesse';
import type { credito_utilizzato, credito_utilizzatoId } from './credito_utilizzato';
import type { dogane, doganeId } from './dogane';
import type { fatturazione_commesse, fatturazione_commesseId } from './fatturazione_commesse';
import type { monitoraggio_oda, monitoraggio_odaId } from './monitoraggio_oda';
import type { operatori_task, operatori_taskId } from './operatori_task';
import type { task_fatturazione, task_fatturazioneId } from './task_fatturazione';
import type { task_programmazione, task_programmazioneId } from './task_programmazione';
import type { timetable, timetableId } from './timetable';

export interface commesseAttributes {
  id_commessa: number;
  data_fine_pre?: string;
  data_chiusura?: string;
  stato: '0' | '1' | '2' | '3';
  note_commessa?: string;
  cod_commessa: string;
  id_cliente_anagrafica?: number;
  budget_conferma: number;
  data_conferma: string;
  id_operatore: number;
  periodo?: string;
  data_consegna?: string;
  numero_letture?: number;
  portale_comm: number;
  bolletta: number;
  numero_letture_acq?: 'ACS' | 'AFS' | 'ACS/AFS' | '0';
  data_lettura?: string;
  materiale_lettura: number;
  note_lettura?: string;
  data_eseguita?: string;
  data_lettura_acq?: string;
  data_eseguita_acq?: string;
  note_obbligatorie: number;
  inbozza?: number;
  revisionata?: number;
  sal1?: number;
  sal2?: number;
  saldo?: number;
  codice_sal1?: '6890' | '6908' | '6921' | '6922' | '6926' | '7711 - N.T.' | '7711 - T.' | '7711' | '7718' | '7719' | '7716';
  codice_sal2?: '6890' | '6908' | '6921' | '6922' | '6926' | '7711 - N.T.' | '7711 - T.' | '7711' | '7718' | '7719' | '7716';
  codice_saldo?: '6890' | '6908' | '6921' | '6922' | '6926' | '7711 - N.T.' | '7711 - T.' | '7711' | '7718' | '7719' | '7716';
  data_sal1?: string;
  data_sal2?: string;
  data_saldo?: string;
  anni_sal1?: number;
  anni_sal2?: number;
  anni_saldo?: number;
  ha_cassetto_fiscale?: number;
  totale_ivato?: number;
  credito_imposta?: number;
  data_credito_110?: string;
  anni_credito_110?: number;
  codice_credito_110?: '6890' | '6908' | '6921' | '6922' | '6926' | '7711 - N.T.' | '7711 - T.' | '7711' | '7718' | '7719' | '7716' | '6925';
  saldo_credito_110?: number;
  continuo_letture: number;
}

export type commessePk = "id_commessa";
export type commesseId = commesse[commessePk];
export type commesseOptionalAttributes = "id_commessa" | "data_fine_pre" | "data_chiusura" | "stato" | "note_commessa" | "id_cliente_anagrafica" | "budget_conferma" | "periodo" | "data_consegna" | "numero_letture" | "portale_comm" | "bolletta" | "numero_letture_acq" | "data_lettura" | "materiale_lettura" | "note_lettura" | "data_eseguita" | "data_lettura_acq" | "data_eseguita_acq" | "note_obbligatorie" | "inbozza" | "revisionata" | "sal1" | "sal2" | "saldo" | "codice_sal1" | "codice_sal2" | "codice_saldo" | "data_sal1" | "data_sal2" | "data_saldo" | "anni_sal1" | "anni_sal2" | "anni_saldo" | "ha_cassetto_fiscale" | "totale_ivato" | "credito_imposta" | "data_credito_110" | "anni_credito_110" | "codice_credito_110" | "saldo_credito_110" | "continuo_letture";
export type commesseCreationAttributes = Optional<commesseAttributes, commesseOptionalAttributes>;

export class commesse extends Model<commesseAttributes, commesseCreationAttributes> implements commesseAttributes {
  id_commessa!: number;
  data_fine_pre?: string;
  data_chiusura?: string;
  stato!: '0' | '1' | '2' | '3';
  note_commessa?: string;
  cod_commessa!: string;
  id_cliente_anagrafica?: number;
  budget_conferma!: number;
  data_conferma!: string;
  id_operatore!: number;
  periodo?: string;
  data_consegna?: string;
  numero_letture?: number;
  portale_comm!: number;
  bolletta!: number;
  numero_letture_acq?: 'ACS' | 'AFS' | 'ACS/AFS' | '0';
  data_lettura?: string;
  materiale_lettura!: number;
  note_lettura?: string;
  data_eseguita?: string;
  data_lettura_acq?: string;
  data_eseguita_acq?: string;
  note_obbligatorie!: number;
  inbozza?: number;
  revisionata?: number;
  sal1?: number;
  sal2?: number;
  saldo?: number;
  codice_sal1?: '6890' | '6908' | '6921' | '6922' | '6926' | '7711 - N.T.' | '7711 - T.' | '7711' | '7718' | '7719' | '7716';
  codice_sal2?: '6890' | '6908' | '6921' | '6922' | '6926' | '7711 - N.T.' | '7711 - T.' | '7711' | '7718' | '7719' | '7716';
  codice_saldo?: '6890' | '6908' | '6921' | '6922' | '6926' | '7711 - N.T.' | '7711 - T.' | '7711' | '7718' | '7719' | '7716';
  data_sal1?: string;
  data_sal2?: string;
  data_saldo?: string;
  anni_sal1?: number;
  anni_sal2?: number;
  anni_saldo?: number;
  ha_cassetto_fiscale?: number;
  totale_ivato?: number;
  credito_imposta?: number;
  data_credito_110?: string;
  anni_credito_110?: number;
  codice_credito_110?: '6890' | '6908' | '6921' | '6922' | '6926' | '7711 - N.T.' | '7711 - T.' | '7711' | '7718' | '7719' | '7716' | '6925';
  saldo_credito_110?: number;
  continuo_letture!: number;

  // commesse belongsToMany acquisti via id_commessa and id_acquisto
  id_acquisto_acquistis!: acquisti[];
  getId_acquisto_acquistis!: Sequelize.BelongsToManyGetAssociationsMixin<acquisti>;
  setId_acquisto_acquistis!: Sequelize.BelongsToManySetAssociationsMixin<acquisti, acquistiId>;
  addId_acquisto_acquisti!: Sequelize.BelongsToManyAddAssociationMixin<acquisti, acquistiId>;
  addId_acquisto_acquistis!: Sequelize.BelongsToManyAddAssociationsMixin<acquisti, acquistiId>;
  createId_acquisto_acquisti!: Sequelize.BelongsToManyCreateAssociationMixin<acquisti>;
  removeId_acquisto_acquisti!: Sequelize.BelongsToManyRemoveAssociationMixin<acquisti, acquistiId>;
  removeId_acquisto_acquistis!: Sequelize.BelongsToManyRemoveAssociationsMixin<acquisti, acquistiId>;
  hasId_acquisto_acquisti!: Sequelize.BelongsToManyHasAssociationMixin<acquisti, acquistiId>;
  hasId_acquisto_acquistis!: Sequelize.BelongsToManyHasAssociationsMixin<acquisti, acquistiId>;
  countId_acquisto_acquistis!: Sequelize.BelongsToManyCountAssociationsMixin;
  // commesse belongsToMany acquisti via id_commessa and id_oda
  id_oda_acquistis!: acquisti[];
  getId_oda_acquistis!: Sequelize.BelongsToManyGetAssociationsMixin<acquisti>;
  setId_oda_acquistis!: Sequelize.BelongsToManySetAssociationsMixin<acquisti, acquistiId>;
  addId_oda_acquisti!: Sequelize.BelongsToManyAddAssociationMixin<acquisti, acquistiId>;
  addId_oda_acquistis!: Sequelize.BelongsToManyAddAssociationsMixin<acquisti, acquistiId>;
  createId_oda_acquisti!: Sequelize.BelongsToManyCreateAssociationMixin<acquisti>;
  removeId_oda_acquisti!: Sequelize.BelongsToManyRemoveAssociationMixin<acquisti, acquistiId>;
  removeId_oda_acquistis!: Sequelize.BelongsToManyRemoveAssociationsMixin<acquisti, acquistiId>;
  hasId_oda_acquisti!: Sequelize.BelongsToManyHasAssociationMixin<acquisti, acquistiId>;
  hasId_oda_acquistis!: Sequelize.BelongsToManyHasAssociationsMixin<acquisti, acquistiId>;
  countId_oda_acquistis!: Sequelize.BelongsToManyCountAssociationsMixin;
  // commesse hasMany acquisti_commesse via id_commessa
  acquisti_commesses!: acquisti_commesse[];
  getAcquisti_commesses!: Sequelize.HasManyGetAssociationsMixin<acquisti_commesse>;
  setAcquisti_commesses!: Sequelize.HasManySetAssociationsMixin<acquisti_commesse, acquisti_commesseId>;
  addAcquisti_commess!: Sequelize.HasManyAddAssociationMixin<acquisti_commesse, acquisti_commesseId>;
  addAcquisti_commesses!: Sequelize.HasManyAddAssociationsMixin<acquisti_commesse, acquisti_commesseId>;
  createAcquisti_commess!: Sequelize.HasManyCreateAssociationMixin<acquisti_commesse>;
  removeAcquisti_commess!: Sequelize.HasManyRemoveAssociationMixin<acquisti_commesse, acquisti_commesseId>;
  removeAcquisti_commesses!: Sequelize.HasManyRemoveAssociationsMixin<acquisti_commesse, acquisti_commesseId>;
  hasAcquisti_commess!: Sequelize.HasManyHasAssociationMixin<acquisti_commesse, acquisti_commesseId>;
  hasAcquisti_commesses!: Sequelize.HasManyHasAssociationsMixin<acquisti_commesse, acquisti_commesseId>;
  countAcquisti_commesses!: Sequelize.HasManyCountAssociationsMixin;
  // commesse belongsToMany commesse via id_commessa_padre and id_commessa_assoc
  id_commessa_assoc_commesses!: commesse[];
  getId_commessa_assoc_commesses!: Sequelize.BelongsToManyGetAssociationsMixin<commesse>;
  setId_commessa_assoc_commesses!: Sequelize.BelongsToManySetAssociationsMixin<commesse, commesseId>;
  addId_commessa_assoc_commess!: Sequelize.BelongsToManyAddAssociationMixin<commesse, commesseId>;
  addId_commessa_assoc_commesses!: Sequelize.BelongsToManyAddAssociationsMixin<commesse, commesseId>;
  createId_commessa_assoc_commess!: Sequelize.BelongsToManyCreateAssociationMixin<commesse>;
  removeId_commessa_assoc_commess!: Sequelize.BelongsToManyRemoveAssociationMixin<commesse, commesseId>;
  removeId_commessa_assoc_commesses!: Sequelize.BelongsToManyRemoveAssociationsMixin<commesse, commesseId>;
  hasId_commessa_assoc_commess!: Sequelize.BelongsToManyHasAssociationMixin<commesse, commesseId>;
  hasId_commessa_assoc_commesses!: Sequelize.BelongsToManyHasAssociationsMixin<commesse, commesseId>;
  countId_commessa_assoc_commesses!: Sequelize.BelongsToManyCountAssociationsMixin;
  // commesse belongsToMany commesse via id_commessa_assoc and id_commessa_padre
  id_commessa_padre_commesses!: commesse[];
  getId_commessa_padre_commesses!: Sequelize.BelongsToManyGetAssociationsMixin<commesse>;
  setId_commessa_padre_commesses!: Sequelize.BelongsToManySetAssociationsMixin<commesse, commesseId>;
  addId_commessa_padre_commess!: Sequelize.BelongsToManyAddAssociationMixin<commesse, commesseId>;
  addId_commessa_padre_commesses!: Sequelize.BelongsToManyAddAssociationsMixin<commesse, commesseId>;
  createId_commessa_padre_commess!: Sequelize.BelongsToManyCreateAssociationMixin<commesse>;
  removeId_commessa_padre_commess!: Sequelize.BelongsToManyRemoveAssociationMixin<commesse, commesseId>;
  removeId_commessa_padre_commesses!: Sequelize.BelongsToManyRemoveAssociationsMixin<commesse, commesseId>;
  hasId_commessa_padre_commess!: Sequelize.BelongsToManyHasAssociationMixin<commesse, commesseId>;
  hasId_commessa_padre_commesses!: Sequelize.BelongsToManyHasAssociationsMixin<commesse, commesseId>;
  countId_commessa_padre_commesses!: Sequelize.BelongsToManyCountAssociationsMixin;
  // commesse hasMany commesse_associate via id_commessa_padre
  commesse_associates!: commesse_associate[];
  getCommesse_associates!: Sequelize.HasManyGetAssociationsMixin<commesse_associate>;
  setCommesse_associates!: Sequelize.HasManySetAssociationsMixin<commesse_associate, commesse_associateId>;
  addCommesse_associate!: Sequelize.HasManyAddAssociationMixin<commesse_associate, commesse_associateId>;
  addCommesse_associates!: Sequelize.HasManyAddAssociationsMixin<commesse_associate, commesse_associateId>;
  createCommesse_associate!: Sequelize.HasManyCreateAssociationMixin<commesse_associate>;
  removeCommesse_associate!: Sequelize.HasManyRemoveAssociationMixin<commesse_associate, commesse_associateId>;
  removeCommesse_associates!: Sequelize.HasManyRemoveAssociationsMixin<commesse_associate, commesse_associateId>;
  hasCommesse_associate!: Sequelize.HasManyHasAssociationMixin<commesse_associate, commesse_associateId>;
  hasCommesse_associates!: Sequelize.HasManyHasAssociationsMixin<commesse_associate, commesse_associateId>;
  countCommesse_associates!: Sequelize.HasManyCountAssociationsMixin;
  // commesse hasMany commesse_associate via id_commessa_assoc
  id_commessa_assoc_commesse_associates!: commesse_associate[];
  getId_commessa_assoc_commesse_associates!: Sequelize.HasManyGetAssociationsMixin<commesse_associate>;
  setId_commessa_assoc_commesse_associates!: Sequelize.HasManySetAssociationsMixin<commesse_associate, commesse_associateId>;
  addId_commessa_assoc_commesse_associate!: Sequelize.HasManyAddAssociationMixin<commesse_associate, commesse_associateId>;
  addId_commessa_assoc_commesse_associates!: Sequelize.HasManyAddAssociationsMixin<commesse_associate, commesse_associateId>;
  createId_commessa_assoc_commesse_associate!: Sequelize.HasManyCreateAssociationMixin<commesse_associate>;
  removeId_commessa_assoc_commesse_associate!: Sequelize.HasManyRemoveAssociationMixin<commesse_associate, commesse_associateId>;
  removeId_commessa_assoc_commesse_associates!: Sequelize.HasManyRemoveAssociationsMixin<commesse_associate, commesse_associateId>;
  hasId_commessa_assoc_commesse_associate!: Sequelize.HasManyHasAssociationMixin<commesse_associate, commesse_associateId>;
  hasId_commessa_assoc_commesse_associates!: Sequelize.HasManyHasAssociationsMixin<commesse_associate, commesse_associateId>;
  countId_commessa_assoc_commesse_associates!: Sequelize.HasManyCountAssociationsMixin;
  // commesse hasMany commesse_sb via id_commessa
  commesse_sbs!: commesse_sb[];
  getCommesse_sbs!: Sequelize.HasManyGetAssociationsMixin<commesse_sb>;
  setCommesse_sbs!: Sequelize.HasManySetAssociationsMixin<commesse_sb, commesse_sbId>;
  addCommesse_sb!: Sequelize.HasManyAddAssociationMixin<commesse_sb, commesse_sbId>;
  addCommesse_sbs!: Sequelize.HasManyAddAssociationsMixin<commesse_sb, commesse_sbId>;
  createCommesse_sb!: Sequelize.HasManyCreateAssociationMixin<commesse_sb>;
  removeCommesse_sb!: Sequelize.HasManyRemoveAssociationMixin<commesse_sb, commesse_sbId>;
  removeCommesse_sbs!: Sequelize.HasManyRemoveAssociationsMixin<commesse_sb, commesse_sbId>;
  hasCommesse_sb!: Sequelize.HasManyHasAssociationMixin<commesse_sb, commesse_sbId>;
  hasCommesse_sbs!: Sequelize.HasManyHasAssociationsMixin<commesse_sb, commesse_sbId>;
  countCommesse_sbs!: Sequelize.HasManyCountAssociationsMixin;
  // commesse hasMany crediti_commesse via id_commessa
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
  // commesse hasMany credito_utilizzato via id_commessa
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
  // commesse hasMany dogane via id_commessa
  doganes!: dogane[];
  getDoganes!: Sequelize.HasManyGetAssociationsMixin<dogane>;
  setDoganes!: Sequelize.HasManySetAssociationsMixin<dogane, doganeId>;
  addDogane!: Sequelize.HasManyAddAssociationMixin<dogane, doganeId>;
  addDoganes!: Sequelize.HasManyAddAssociationsMixin<dogane, doganeId>;
  createDogane!: Sequelize.HasManyCreateAssociationMixin<dogane>;
  removeDogane!: Sequelize.HasManyRemoveAssociationMixin<dogane, doganeId>;
  removeDoganes!: Sequelize.HasManyRemoveAssociationsMixin<dogane, doganeId>;
  hasDogane!: Sequelize.HasManyHasAssociationMixin<dogane, doganeId>;
  hasDoganes!: Sequelize.HasManyHasAssociationsMixin<dogane, doganeId>;
  countDoganes!: Sequelize.HasManyCountAssociationsMixin;
  // commesse hasMany fatturazione_commesse via id_commessa
  fatturazione_commesses!: fatturazione_commesse[];
  getFatturazione_commesses!: Sequelize.HasManyGetAssociationsMixin<fatturazione_commesse>;
  setFatturazione_commesses!: Sequelize.HasManySetAssociationsMixin<fatturazione_commesse, fatturazione_commesseId>;
  addFatturazione_commess!: Sequelize.HasManyAddAssociationMixin<fatturazione_commesse, fatturazione_commesseId>;
  addFatturazione_commesses!: Sequelize.HasManyAddAssociationsMixin<fatturazione_commesse, fatturazione_commesseId>;
  createFatturazione_commess!: Sequelize.HasManyCreateAssociationMixin<fatturazione_commesse>;
  removeFatturazione_commess!: Sequelize.HasManyRemoveAssociationMixin<fatturazione_commesse, fatturazione_commesseId>;
  removeFatturazione_commesses!: Sequelize.HasManyRemoveAssociationsMixin<fatturazione_commesse, fatturazione_commesseId>;
  hasFatturazione_commess!: Sequelize.HasManyHasAssociationMixin<fatturazione_commesse, fatturazione_commesseId>;
  hasFatturazione_commesses!: Sequelize.HasManyHasAssociationsMixin<fatturazione_commesse, fatturazione_commesseId>;
  countFatturazione_commesses!: Sequelize.HasManyCountAssociationsMixin;
  // commesse hasMany monitoraggio_oda via id_commessa
  monitoraggio_odas!: monitoraggio_oda[];
  getMonitoraggio_odas!: Sequelize.HasManyGetAssociationsMixin<monitoraggio_oda>;
  setMonitoraggio_odas!: Sequelize.HasManySetAssociationsMixin<monitoraggio_oda, monitoraggio_odaId>;
  addMonitoraggio_oda!: Sequelize.HasManyAddAssociationMixin<monitoraggio_oda, monitoraggio_odaId>;
  addMonitoraggio_odas!: Sequelize.HasManyAddAssociationsMixin<monitoraggio_oda, monitoraggio_odaId>;
  createMonitoraggio_oda!: Sequelize.HasManyCreateAssociationMixin<monitoraggio_oda>;
  removeMonitoraggio_oda!: Sequelize.HasManyRemoveAssociationMixin<monitoraggio_oda, monitoraggio_odaId>;
  removeMonitoraggio_odas!: Sequelize.HasManyRemoveAssociationsMixin<monitoraggio_oda, monitoraggio_odaId>;
  hasMonitoraggio_oda!: Sequelize.HasManyHasAssociationMixin<monitoraggio_oda, monitoraggio_odaId>;
  hasMonitoraggio_odas!: Sequelize.HasManyHasAssociationsMixin<monitoraggio_oda, monitoraggio_odaId>;
  countMonitoraggio_odas!: Sequelize.HasManyCountAssociationsMixin;
  // commesse hasMany operatori_task via id_commessa
  operatori_tasks!: operatori_task[];
  getOperatori_tasks!: Sequelize.HasManyGetAssociationsMixin<operatori_task>;
  setOperatori_tasks!: Sequelize.HasManySetAssociationsMixin<operatori_task, operatori_taskId>;
  addOperatori_task!: Sequelize.HasManyAddAssociationMixin<operatori_task, operatori_taskId>;
  addOperatori_tasks!: Sequelize.HasManyAddAssociationsMixin<operatori_task, operatori_taskId>;
  createOperatori_task!: Sequelize.HasManyCreateAssociationMixin<operatori_task>;
  removeOperatori_task!: Sequelize.HasManyRemoveAssociationMixin<operatori_task, operatori_taskId>;
  removeOperatori_tasks!: Sequelize.HasManyRemoveAssociationsMixin<operatori_task, operatori_taskId>;
  hasOperatori_task!: Sequelize.HasManyHasAssociationMixin<operatori_task, operatori_taskId>;
  hasOperatori_tasks!: Sequelize.HasManyHasAssociationsMixin<operatori_task, operatori_taskId>;
  countOperatori_tasks!: Sequelize.HasManyCountAssociationsMixin;
  // commesse hasMany task_fatturazione via id_commessa
  task_fatturaziones!: task_fatturazione[];
  getTask_fatturaziones!: Sequelize.HasManyGetAssociationsMixin<task_fatturazione>;
  setTask_fatturaziones!: Sequelize.HasManySetAssociationsMixin<task_fatturazione, task_fatturazioneId>;
  addTask_fatturazione!: Sequelize.HasManyAddAssociationMixin<task_fatturazione, task_fatturazioneId>;
  addTask_fatturaziones!: Sequelize.HasManyAddAssociationsMixin<task_fatturazione, task_fatturazioneId>;
  createTask_fatturazione!: Sequelize.HasManyCreateAssociationMixin<task_fatturazione>;
  removeTask_fatturazione!: Sequelize.HasManyRemoveAssociationMixin<task_fatturazione, task_fatturazioneId>;
  removeTask_fatturaziones!: Sequelize.HasManyRemoveAssociationsMixin<task_fatturazione, task_fatturazioneId>;
  hasTask_fatturazione!: Sequelize.HasManyHasAssociationMixin<task_fatturazione, task_fatturazioneId>;
  hasTask_fatturaziones!: Sequelize.HasManyHasAssociationsMixin<task_fatturazione, task_fatturazioneId>;
  countTask_fatturaziones!: Sequelize.HasManyCountAssociationsMixin;
  // commesse hasMany task_programmazione via id_commessa
  task_programmaziones!: task_programmazione[];
  getTask_programmaziones!: Sequelize.HasManyGetAssociationsMixin<task_programmazione>;
  setTask_programmaziones!: Sequelize.HasManySetAssociationsMixin<task_programmazione, task_programmazioneId>;
  addTask_programmazione!: Sequelize.HasManyAddAssociationMixin<task_programmazione, task_programmazioneId>;
  addTask_programmaziones!: Sequelize.HasManyAddAssociationsMixin<task_programmazione, task_programmazioneId>;
  createTask_programmazione!: Sequelize.HasManyCreateAssociationMixin<task_programmazione>;
  removeTask_programmazione!: Sequelize.HasManyRemoveAssociationMixin<task_programmazione, task_programmazioneId>;
  removeTask_programmaziones!: Sequelize.HasManyRemoveAssociationsMixin<task_programmazione, task_programmazioneId>;
  hasTask_programmazione!: Sequelize.HasManyHasAssociationMixin<task_programmazione, task_programmazioneId>;
  hasTask_programmaziones!: Sequelize.HasManyHasAssociationsMixin<task_programmazione, task_programmazioneId>;
  countTask_programmaziones!: Sequelize.HasManyCountAssociationsMixin;
  // commesse hasMany timetable via id_commessa
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

  static initModel(sequelize: Sequelize.Sequelize): typeof commesse {
    return commesse.init({
    id_commessa: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    data_fine_pre: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    data_chiusura: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    stato: {
      type: DataTypes.ENUM('0','1','2','3'),
      allowNull: false,
      defaultValue: "0",
      comment: "'Aperta', 'Chiusa', 'Annullata', 'Sospesa'"
    },
    note_commessa: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    cod_commessa: {
      type: DataTypes.STRING(45),
      allowNull: false,
      unique: "Index_3"
    },
    id_cliente_anagrafica: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    budget_conferma: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
      defaultValue: 0.00
    },
    data_conferma: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    id_operatore: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    periodo: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    data_consegna: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    numero_letture: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    portale_comm: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    bolletta: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    numero_letture_acq: {
      type: DataTypes.ENUM('ACS','AFS','ACS/AFS','0'),
      allowNull: true
    },
    data_lettura: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    materiale_lettura: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    note_lettura: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    data_eseguita: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    data_lettura_acq: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    data_eseguita_acq: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    note_obbligatorie: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    inbozza: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    revisionata: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    sal1: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    sal2: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    saldo: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    codice_sal1: {
      type: DataTypes.ENUM('6890','6908','6921','6922','6926','7711 - N.T.','7711 - T.','7711','7718','7719','7716'),
      allowNull: true
    },
    codice_sal2: {
      type: DataTypes.ENUM('6890','6908','6921','6922','6926','7711 - N.T.','7711 - T.','7711','7718','7719','7716'),
      allowNull: true
    },
    codice_saldo: {
      type: DataTypes.ENUM('6890','6908','6921','6922','6926','7711 - N.T.','7711 - T.','7711','7718','7719','7716'),
      allowNull: true
    },
    data_sal1: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    data_sal2: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    data_saldo: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    anni_sal1: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    anni_sal2: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    anni_saldo: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ha_cassetto_fiscale: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 0
    },
    totale_ivato: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    credito_imposta: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    data_credito_110: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    anni_credito_110: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    codice_credito_110: {
      type: DataTypes.ENUM('6890','6908','6921','6922','6926','7711 - N.T.','7711 - T.','7711','7718','7719','7716','6925'),
      allowNull: true
    },
    saldo_credito_110: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    continuo_letture: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'commesse',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_commessa" },
        ]
      },
      {
        name: "Index_3",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "cod_commessa" },
        ]
      },
      {
        name: "FK_commesse_1",
        using: "BTREE",
        fields: [
          { name: "id_operatore" },
        ]
      },
      {
        name: "id_commessa",
        using: "BTREE",
        fields: [
          { name: "id_commessa" },
        ]
      },
      {
        name: "id_cliente_anagrafica",
        using: "BTREE",
        fields: [
          { name: "id_cliente_anagrafica" },
        ]
      },
    ]
  });
  }
}
