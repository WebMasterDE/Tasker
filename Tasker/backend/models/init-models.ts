import type { Sequelize } from "sequelize";
import { acquisti as _acquisti } from "./acquisti";
import type { acquistiAttributes, acquistiCreationAttributes } from "./acquisti";
import { acquisti_commesse as _acquisti_commesse } from "./acquisti_commesse";
import type { acquisti_commesseAttributes, acquisti_commesseCreationAttributes } from "./acquisti_commesse";
import { ana_operatori as _ana_operatori } from "./ana_operatori";
import type { ana_operatoriAttributes, ana_operatoriCreationAttributes } from "./ana_operatori";
import { ana_tipologie as _ana_tipologie } from "./ana_tipologie";
import type { ana_tipologieAttributes, ana_tipologieCreationAttributes } from "./ana_tipologie";
import { anagrafiche as _anagrafiche } from "./anagrafiche";
import type { anagraficheAttributes, anagraficheCreationAttributes } from "./anagrafiche";
import { archives as _archives } from "./archives";
import type { archivesAttributes, archivesCreationAttributes } from "./archives";
import { associazioni_ditte_dogane as _associazioni_ditte_dogane } from "./associazioni_ditte_dogane";
import type { associazioni_ditte_doganeAttributes, associazioni_ditte_doganeCreationAttributes } from "./associazioni_ditte_dogane";
import { cdm_associazioni as _cdm_associazioni } from "./cdm_associazioni";
import type { cdm_associazioniAttributes, cdm_associazioniCreationAttributes } from "./cdm_associazioni";
import { cdm_campi as _cdm_campi } from "./cdm_campi";
import type { cdm_campiAttributes, cdm_campiCreationAttributes } from "./cdm_campi";
import { cdm_competenze as _cdm_competenze } from "./cdm_competenze";
import type { cdm_competenzeAttributes, cdm_competenzeCreationAttributes } from "./cdm_competenze";
import { cdm_letture as _cdm_letture } from "./cdm_letture";
import type { cdm_lettureAttributes, cdm_lettureCreationAttributes } from "./cdm_letture";
import { cdm_marche as _cdm_marche } from "./cdm_marche";
import type { cdm_marcheAttributes, cdm_marcheCreationAttributes } from "./cdm_marche";
import { codici_importo_commessa as _codici_importo_commessa } from "./codici_importo_commessa";
import type { codici_importo_commessaAttributes, codici_importo_commessaCreationAttributes } from "./codici_importo_commessa";
import { commesse as _commesse } from "./commesse";
import type { commesseAttributes, commesseCreationAttributes } from "./commesse";
import { commesse_associate as _commesse_associate } from "./commesse_associate";
import type { commesse_associateAttributes, commesse_associateCreationAttributes } from "./commesse_associate";
import { commesse_sb as _commesse_sb } from "./commesse_sb";
import type { commesse_sbAttributes, commesse_sbCreationAttributes } from "./commesse_sb";
import { condomini as _condomini } from "./condomini";
import type { condominiAttributes, condominiCreationAttributes } from "./condomini";
import { contract_of_employment as _contract_of_employment } from "./contract_of_employment";
import type { contract_of_employmentAttributes, contract_of_employmentCreationAttributes } from "./contract_of_employment";
import { costo_operatori as _costo_operatori } from "./costo_operatori";
import type { costo_operatoriAttributes, costo_operatoriCreationAttributes } from "./costo_operatori";
import { crediti_commesse as _crediti_commesse } from "./crediti_commesse";
import type { crediti_commesseAttributes, crediti_commesseCreationAttributes } from "./crediti_commesse";
import { credito_debito as _credito_debito } from "./credito_debito";
import type { credito_debitoAttributes, credito_debitoCreationAttributes } from "./credito_debito";
import { credito_utilizzato as _credito_utilizzato } from "./credito_utilizzato";
import type { credito_utilizzatoAttributes, credito_utilizzatoCreationAttributes } from "./credito_utilizzato";
import { ditte_dogane as _ditte_dogane } from "./ditte_dogane";
import type { ditte_doganeAttributes, ditte_doganeCreationAttributes } from "./ditte_dogane";
import { docs_fornitori as _docs_fornitori } from "./docs_fornitori";
import type { docs_fornitoriAttributes, docs_fornitoriCreationAttributes } from "./docs_fornitori";
import { dogane as _dogane } from "./dogane";
import type { doganeAttributes, doganeCreationAttributes } from "./dogane";
import { dogane_des as _dogane_des } from "./dogane_des";
import type { dogane_desAttributes, dogane_desCreationAttributes } from "./dogane_des";
import { domande as _domande } from "./domande";
import type { domandeAttributes, domandeCreationAttributes } from "./domande";
import { domande_soddisfazione_cl as _domande_soddisfazione_cl } from "./domande_soddisfazione_cl";
import type { domande_soddisfazione_clAttributes, domande_soddisfazione_clCreationAttributes } from "./domande_soddisfazione_cl";
import { el_categorie as _el_categorie } from "./el_categorie";
import type { el_categorieAttributes, el_categorieCreationAttributes } from "./el_categorie";
import { el_classificazioni as _el_classificazioni } from "./el_classificazioni";
import type { el_classificazioniAttributes, el_classificazioniCreationAttributes } from "./el_classificazioni";
import { el_dipendenti as _el_dipendenti } from "./el_dipendenti";
import type { el_dipendentiAttributes, el_dipendentiCreationAttributes } from "./el_dipendenti";
import { el_personas as _el_personas } from "./el_personas";
import type { el_personasAttributes, el_personasCreationAttributes } from "./el_personas";
import { el_ruoli as _el_ruoli } from "./el_ruoli";
import type { el_ruoliAttributes, el_ruoliCreationAttributes } from "./el_ruoli";
import { el_servizi as _el_servizi } from "./el_servizi";
import type { el_serviziAttributes, el_serviziCreationAttributes } from "./el_servizi";
import { el_settori as _el_settori } from "./el_settori";
import type { el_settoriAttributes, el_settoriCreationAttributes } from "./el_settori";
import { el_sottocategorie as _el_sottocategorie } from "./el_sottocategorie";
import type { el_sottocategorieAttributes, el_sottocategorieCreationAttributes } from "./el_sottocategorie";
import { fatt_tipologie as _fatt_tipologie } from "./fatt_tipologie";
import type { fatt_tipologieAttributes, fatt_tipologieCreationAttributes } from "./fatt_tipologie";
import { fatturazione as _fatturazione } from "./fatturazione";
import type { fatturazioneAttributes, fatturazioneCreationAttributes } from "./fatturazione";
import { fatturazione_commesse as _fatturazione_commesse } from "./fatturazione_commesse";
import type { fatturazione_commesseAttributes, fatturazione_commesseCreationAttributes } from "./fatturazione_commesse";
import { fotovoltaico as _fotovoltaico } from "./fotovoltaico";
import type { fotovoltaicoAttributes, fotovoltaicoCreationAttributes } from "./fotovoltaico";
import { gruppo_operatori as _gruppo_operatori } from "./gruppo_operatori";
import type { gruppo_operatoriAttributes, gruppo_operatoriCreationAttributes } from "./gruppo_operatori";
import { gt_timetable as _gt_timetable } from "./gt_timetable";
import type { gt_timetableAttributes, gt_timetableCreationAttributes } from "./gt_timetable";
import { hours as _hours } from "./hours";
import type { hoursAttributes, hoursCreationAttributes } from "./hours";
import { impostazioni_utente as _impostazioni_utente } from "./impostazioni_utente";
import type { impostazioni_utenteAttributes, impostazioni_utenteCreationAttributes } from "./impostazioni_utente";
import { indicatori as _indicatori } from "./indicatori";
import type { indicatoriAttributes, indicatoriCreationAttributes } from "./indicatori";
import { indicatori_obiettivi as _indicatori_obiettivi } from "./indicatori_obiettivi";
import type { indicatori_obiettiviAttributes, indicatori_obiettiviCreationAttributes } from "./indicatori_obiettivi";
import { installatori as _installatori } from "./installatori";
import type { installatoriAttributes, installatoriCreationAttributes } from "./installatori";
import { ip_bloccati as _ip_bloccati } from "./ip_bloccati";
import type { ip_bloccatiAttributes, ip_bloccatiCreationAttributes } from "./ip_bloccati";
import { marche_sim as _marche_sim } from "./marche_sim";
import type { marche_simAttributes, marche_simCreationAttributes } from "./marche_sim";
import { metodi_lettura as _metodi_lettura } from "./metodi_lettura";
import type { metodi_letturaAttributes, metodi_letturaCreationAttributes } from "./metodi_lettura";
import { monitoraggio_oda as _monitoraggio_oda } from "./monitoraggio_oda";
import type { monitoraggio_odaAttributes, monitoraggio_odaCreationAttributes } from "./monitoraggio_oda";
import { operatori_commesse as _operatori_commesse } from "./operatori_commesse";
import type { operatori_commesseAttributes, operatori_commesseCreationAttributes } from "./operatori_commesse";
import { operatori_task as _operatori_task } from "./operatori_task";
import type { operatori_taskAttributes, operatori_taskCreationAttributes } from "./operatori_task";
import { overtime as _overtime } from "./overtime";
import type { overtimeAttributes, overtimeCreationAttributes } from "./overtime";
import { pagamenti as _pagamenti } from "./pagamenti";
import type { pagamentiAttributes, pagamentiCreationAttributes } from "./pagamenti";
import { pagamenti_task as _pagamenti_task } from "./pagamenti_task";
import type { pagamenti_taskAttributes, pagamenti_taskCreationAttributes } from "./pagamenti_task";
import { permessi_operatori as _permessi_operatori } from "./permessi_operatori";
import type { permessi_operatoriAttributes, permessi_operatoriCreationAttributes } from "./permessi_operatori";
import { pratiche_enea as _pratiche_enea } from "./pratiche_enea";
import type { pratiche_eneaAttributes, pratiche_eneaCreationAttributes } from "./pratiche_enea";
import { preventivi as _preventivi } from "./preventivi";
import type { preventiviAttributes, preventiviCreationAttributes } from "./preventivi";
import { preventivi_commesse as _preventivi_commesse } from "./preventivi_commesse";
import type { preventivi_commesseAttributes, preventivi_commesseCreationAttributes } from "./preventivi_commesse";
import { provvigioni as _provvigioni } from "./provvigioni";
import type { provvigioniAttributes, provvigioniCreationAttributes } from "./provvigioni";
import { qualifiche as _qualifiche } from "./qualifiche";
import type { qualificheAttributes, qualificheCreationAttributes } from "./qualifiche";
import { qualifiche_operatori as _qualifiche_operatori } from "./qualifiche_operatori";
import type { qualifiche_operatoriAttributes, qualifiche_operatoriCreationAttributes } from "./qualifiche_operatori";
import { rinnovo_cpi as _rinnovo_cpi } from "./rinnovo_cpi";
import type { rinnovo_cpiAttributes, rinnovo_cpiCreationAttributes } from "./rinnovo_cpi";
import { scia_antincendio as _scia_antincendio } from "./scia_antincendio";
import type { scia_antincendioAttributes, scia_antincendioCreationAttributes } from "./scia_antincendio";
import { servizi_classificazione as _servizi_classificazione } from "./servizi_classificazione";
import type { servizi_classificazioneAttributes, servizi_classificazioneCreationAttributes } from "./servizi_classificazione";
import { settore_operatori as _settore_operatori } from "./settore_operatori";
import type { settore_operatoriAttributes, settore_operatoriCreationAttributes } from "./settore_operatori";
import { shifts as _shifts } from "./shifts";
import type { shiftsAttributes, shiftsCreationAttributes } from "./shifts";
import { soddisfazione_cliente as _soddisfazione_cliente } from "./soddisfazione_cliente";
import type { soddisfazione_clienteAttributes, soddisfazione_clienteCreationAttributes } from "./soddisfazione_cliente";
import { storico_attivita_svolte as _storico_attivita_svolte } from "./storico_attivita_svolte";
import type { storico_attivita_svolteAttributes, storico_attivita_svolteCreationAttributes } from "./storico_attivita_svolte";
import { storico_ricariche_sim as _storico_ricariche_sim } from "./storico_ricariche_sim";
import type { storico_ricariche_simAttributes, storico_ricariche_simCreationAttributes } from "./storico_ricariche_sim";
import { subtask as _subtask } from "./subtask";
import type { subtaskAttributes, subtaskCreationAttributes } from "./subtask";
import { task_fatturazione as _task_fatturazione } from "./task_fatturazione";
import type { task_fatturazioneAttributes, task_fatturazioneCreationAttributes } from "./task_fatturazione";
import { task_programmazione as _task_programmazione } from "./task_programmazione";
import type { task_programmazioneAttributes, task_programmazioneCreationAttributes } from "./task_programmazione";
import { task_subtask as _task_subtask } from "./task_subtask";
import type { task_subtaskAttributes, task_subtaskCreationAttributes } from "./task_subtask";
import { tasks as _tasks } from "./tasks";
import type { tasksAttributes, tasksCreationAttributes } from "./tasks";
import { ticket as _ticket } from "./ticket";
import type { ticketAttributes, ticketCreationAttributes } from "./ticket";
import { ticket_commesse as _ticket_commesse } from "./ticket_commesse";
import type { ticket_commesseAttributes, ticket_commesseCreationAttributes } from "./ticket_commesse";
import { ticket_operatori as _ticket_operatori } from "./ticket_operatori";
import type { ticket_operatoriAttributes, ticket_operatoriCreationAttributes } from "./ticket_operatori";
import { timetable as _timetable } from "./timetable";
import type { timetableAttributes, timetableCreationAttributes } from "./timetable";
import { tipologia_cl_soddisfazione_cl as _tipologia_cl_soddisfazione_cl } from "./tipologia_cl_soddisfazione_cl";
import type { tipologia_cl_soddisfazione_clAttributes, tipologia_cl_soddisfazione_clCreationAttributes } from "./tipologia_cl_soddisfazione_cl";
import { tipologie_credito as _tipologie_credito } from "./tipologie_credito";
import type { tipologie_creditoAttributes, tipologie_creditoCreationAttributes } from "./tipologie_credito";
import { todo as _todo } from "./todo";
import type { todoAttributes, todoCreationAttributes } from "./todo";
import { users as _users } from "./users";
import type { usersAttributes, usersCreationAttributes } from "./users";
import { valori_qualita as _valori_qualita } from "./valori_qualita";
import type { valori_qualitaAttributes, valori_qualitaCreationAttributes } from "./valori_qualita";
import { valori_stagionali_ditte_dogane as _valori_stagionali_ditte_dogane } from "./valori_stagionali_ditte_dogane";
import type { valori_stagionali_ditte_doganeAttributes, valori_stagionali_ditte_doganeCreationAttributes } from "./valori_stagionali_ditte_dogane";

export {
  _acquisti as acquisti,
  _acquisti_commesse as acquisti_commesse,
  _ana_operatori as ana_operatori,
  _ana_tipologie as ana_tipologie,
  _anagrafiche as anagrafiche,
  _archives as archives,
  _associazioni_ditte_dogane as associazioni_ditte_dogane,
  _cdm_associazioni as cdm_associazioni,
  _cdm_campi as cdm_campi,
  _cdm_competenze as cdm_competenze,
  _cdm_letture as cdm_letture,
  _cdm_marche as cdm_marche,
  _codici_importo_commessa as codici_importo_commessa,
  _commesse as commesse,
  _commesse_associate as commesse_associate,
  _commesse_sb as commesse_sb,
  _condomini as condomini,
  _contract_of_employment as contract_of_employment,
  _costo_operatori as costo_operatori,
  _crediti_commesse as crediti_commesse,
  _credito_debito as credito_debito,
  _credito_utilizzato as credito_utilizzato,
  _ditte_dogane as ditte_dogane,
  _docs_fornitori as docs_fornitori,
  _dogane as dogane,
  _dogane_des as dogane_des,
  _domande as domande,
  _domande_soddisfazione_cl as domande_soddisfazione_cl,
  _el_categorie as el_categorie,
  _el_classificazioni as el_classificazioni,
  _el_dipendenti as el_dipendenti,
  _el_personas as el_personas,
  _el_ruoli as el_ruoli,
  _el_servizi as el_servizi,
  _el_settori as el_settori,
  _el_sottocategorie as el_sottocategorie,
  _fatt_tipologie as fatt_tipologie,
  _fatturazione as fatturazione,
  _fatturazione_commesse as fatturazione_commesse,
  _fotovoltaico as fotovoltaico,
  _gruppo_operatori as gruppo_operatori,
  _gt_timetable as gt_timetable,
  _hours as hours,
  _impostazioni_utente as impostazioni_utente,
  _indicatori as indicatori,
  _indicatori_obiettivi as indicatori_obiettivi,
  _installatori as installatori,
  _ip_bloccati as ip_bloccati,
  _marche_sim as marche_sim,
  _metodi_lettura as metodi_lettura,
  _monitoraggio_oda as monitoraggio_oda,
  _operatori_commesse as operatori_commesse,
  _operatori_task as operatori_task,
  _overtime as overtime,
  _pagamenti as pagamenti,
  _pagamenti_task as pagamenti_task,
  _permessi_operatori as permessi_operatori,
  _pratiche_enea as pratiche_enea,
  _preventivi as preventivi,
  _preventivi_commesse as preventivi_commesse,
  _provvigioni as provvigioni,
  _qualifiche as qualifiche,
  _qualifiche_operatori as qualifiche_operatori,
  _rinnovo_cpi as rinnovo_cpi,
  _scia_antincendio as scia_antincendio,
  _servizi_classificazione as servizi_classificazione,
  _settore_operatori as settore_operatori,
  _shifts as shifts,
  _soddisfazione_cliente as soddisfazione_cliente,
  _storico_attivita_svolte as storico_attivita_svolte,
  _storico_ricariche_sim as storico_ricariche_sim,
  _subtask as subtask,
  _task_fatturazione as task_fatturazione,
  _task_programmazione as task_programmazione,
  _task_subtask as task_subtask,
  _tasks as tasks,
  _ticket as ticket,
  _ticket_commesse as ticket_commesse,
  _ticket_operatori as ticket_operatori,
  _timetable as timetable,
  _tipologia_cl_soddisfazione_cl as tipologia_cl_soddisfazione_cl,
  _tipologie_credito as tipologie_credito,
  _todo as todo,
  _users as users,
  _valori_qualita as valori_qualita,
  _valori_stagionali_ditte_dogane as valori_stagionali_ditte_dogane,
};

export type {
  acquistiAttributes,
  acquistiCreationAttributes,
  acquisti_commesseAttributes,
  acquisti_commesseCreationAttributes,
  ana_operatoriAttributes,
  ana_operatoriCreationAttributes,
  ana_tipologieAttributes,
  ana_tipologieCreationAttributes,
  anagraficheAttributes,
  anagraficheCreationAttributes,
  archivesAttributes,
  archivesCreationAttributes,
  associazioni_ditte_doganeAttributes,
  associazioni_ditte_doganeCreationAttributes,
  cdm_associazioniAttributes,
  cdm_associazioniCreationAttributes,
  cdm_campiAttributes,
  cdm_campiCreationAttributes,
  cdm_competenzeAttributes,
  cdm_competenzeCreationAttributes,
  cdm_lettureAttributes,
  cdm_lettureCreationAttributes,
  cdm_marcheAttributes,
  cdm_marcheCreationAttributes,
  codici_importo_commessaAttributes,
  codici_importo_commessaCreationAttributes,
  commesseAttributes,
  commesseCreationAttributes,
  commesse_associateAttributes,
  commesse_associateCreationAttributes,
  commesse_sbAttributes,
  commesse_sbCreationAttributes,
  condominiAttributes,
  condominiCreationAttributes,
  contract_of_employmentAttributes,
  contract_of_employmentCreationAttributes,
  costo_operatoriAttributes,
  costo_operatoriCreationAttributes,
  crediti_commesseAttributes,
  crediti_commesseCreationAttributes,
  credito_debitoAttributes,
  credito_debitoCreationAttributes,
  credito_utilizzatoAttributes,
  credito_utilizzatoCreationAttributes,
  ditte_doganeAttributes,
  ditte_doganeCreationAttributes,
  docs_fornitoriAttributes,
  docs_fornitoriCreationAttributes,
  doganeAttributes,
  doganeCreationAttributes,
  dogane_desAttributes,
  dogane_desCreationAttributes,
  domandeAttributes,
  domandeCreationAttributes,
  domande_soddisfazione_clAttributes,
  domande_soddisfazione_clCreationAttributes,
  el_categorieAttributes,
  el_categorieCreationAttributes,
  el_classificazioniAttributes,
  el_classificazioniCreationAttributes,
  el_dipendentiAttributes,
  el_dipendentiCreationAttributes,
  el_personasAttributes,
  el_personasCreationAttributes,
  el_ruoliAttributes,
  el_ruoliCreationAttributes,
  el_serviziAttributes,
  el_serviziCreationAttributes,
  el_settoriAttributes,
  el_settoriCreationAttributes,
  el_sottocategorieAttributes,
  el_sottocategorieCreationAttributes,
  fatt_tipologieAttributes,
  fatt_tipologieCreationAttributes,
  fatturazioneAttributes,
  fatturazioneCreationAttributes,
  fatturazione_commesseAttributes,
  fatturazione_commesseCreationAttributes,
  fotovoltaicoAttributes,
  fotovoltaicoCreationAttributes,
  gruppo_operatoriAttributes,
  gruppo_operatoriCreationAttributes,
  gt_timetableAttributes,
  gt_timetableCreationAttributes,
  hoursAttributes,
  hoursCreationAttributes,
  impostazioni_utenteAttributes,
  impostazioni_utenteCreationAttributes,
  indicatoriAttributes,
  indicatoriCreationAttributes,
  indicatori_obiettiviAttributes,
  indicatori_obiettiviCreationAttributes,
  installatoriAttributes,
  installatoriCreationAttributes,
  ip_bloccatiAttributes,
  ip_bloccatiCreationAttributes,
  marche_simAttributes,
  marche_simCreationAttributes,
  metodi_letturaAttributes,
  metodi_letturaCreationAttributes,
  monitoraggio_odaAttributes,
  monitoraggio_odaCreationAttributes,
  operatori_commesseAttributes,
  operatori_commesseCreationAttributes,
  operatori_taskAttributes,
  operatori_taskCreationAttributes,
  overtimeAttributes,
  overtimeCreationAttributes,
  pagamentiAttributes,
  pagamentiCreationAttributes,
  pagamenti_taskAttributes,
  pagamenti_taskCreationAttributes,
  permessi_operatoriAttributes,
  permessi_operatoriCreationAttributes,
  pratiche_eneaAttributes,
  pratiche_eneaCreationAttributes,
  preventiviAttributes,
  preventiviCreationAttributes,
  preventivi_commesseAttributes,
  preventivi_commesseCreationAttributes,
  provvigioniAttributes,
  provvigioniCreationAttributes,
  qualificheAttributes,
  qualificheCreationAttributes,
  qualifiche_operatoriAttributes,
  qualifiche_operatoriCreationAttributes,
  rinnovo_cpiAttributes,
  rinnovo_cpiCreationAttributes,
  scia_antincendioAttributes,
  scia_antincendioCreationAttributes,
  servizi_classificazioneAttributes,
  servizi_classificazioneCreationAttributes,
  settore_operatoriAttributes,
  settore_operatoriCreationAttributes,
  shiftsAttributes,
  shiftsCreationAttributes,
  soddisfazione_clienteAttributes,
  soddisfazione_clienteCreationAttributes,
  storico_attivita_svolteAttributes,
  storico_attivita_svolteCreationAttributes,
  storico_ricariche_simAttributes,
  storico_ricariche_simCreationAttributes,
  subtaskAttributes,
  subtaskCreationAttributes,
  task_fatturazioneAttributes,
  task_fatturazioneCreationAttributes,
  task_programmazioneAttributes,
  task_programmazioneCreationAttributes,
  task_subtaskAttributes,
  task_subtaskCreationAttributes,
  tasksAttributes,
  tasksCreationAttributes,
  ticketAttributes,
  ticketCreationAttributes,
  ticket_commesseAttributes,
  ticket_commesseCreationAttributes,
  ticket_operatoriAttributes,
  ticket_operatoriCreationAttributes,
  timetableAttributes,
  timetableCreationAttributes,
  tipologia_cl_soddisfazione_clAttributes,
  tipologia_cl_soddisfazione_clCreationAttributes,
  tipologie_creditoAttributes,
  tipologie_creditoCreationAttributes,
  todoAttributes,
  todoCreationAttributes,
  usersAttributes,
  usersCreationAttributes,
  valori_qualitaAttributes,
  valori_qualitaCreationAttributes,
  valori_stagionali_ditte_doganeAttributes,
  valori_stagionali_ditte_doganeCreationAttributes,
};

export function initModels(sequelizeTasker: Sequelize,sequelizeDiven: Sequelize) {
  const acquisti = _acquisti.initModel(sequelizeDiven);
  const acquisti_commesse = _acquisti_commesse.initModel(sequelizeDiven);
  const ana_operatori = _ana_operatori.initModel(sequelizeDiven);
  const ana_tipologie = _ana_tipologie.initModel(sequelizeDiven);
  const anagrafiche = _anagrafiche.initModel(sequelizeDiven);
  const archives = _archives.initModel(sequelizeTasker);
  const associazioni_ditte_dogane = _associazioni_ditte_dogane.initModel(sequelizeDiven);
  const cdm_associazioni = _cdm_associazioni.initModel(sequelizeDiven);
  const cdm_campi = _cdm_campi.initModel(sequelizeDiven);
  const cdm_competenze = _cdm_competenze.initModel(sequelizeDiven);
  const cdm_letture = _cdm_letture.initModel(sequelizeDiven);
  const cdm_marche = _cdm_marche.initModel(sequelizeDiven);
  const codici_importo_commessa = _codici_importo_commessa.initModel(sequelizeDiven);
  const commesse = _commesse.initModel(sequelizeDiven);
  const commesse_associate = _commesse_associate.initModel(sequelizeDiven);
  const commesse_sb = _commesse_sb.initModel(sequelizeDiven);
  const condomini = _condomini.initModel(sequelizeDiven);
  const contract_of_employment = _contract_of_employment.initModel(sequelizeTasker);
  const costo_operatori = _costo_operatori.initModel(sequelizeDiven);
  const crediti_commesse = _crediti_commesse.initModel(sequelizeDiven);
  const credito_debito = _credito_debito.initModel(sequelizeDiven);
  const credito_utilizzato = _credito_utilizzato.initModel(sequelizeDiven);
  const ditte_dogane = _ditte_dogane.initModel(sequelizeDiven);
  const docs_fornitori = _docs_fornitori.initModel(sequelizeDiven);
  const dogane = _dogane.initModel(sequelizeDiven);
  const dogane_des = _dogane_des.initModel(sequelizeDiven);
  const domande = _domande.initModel(sequelizeDiven);
  const domande_soddisfazione_cl = _domande_soddisfazione_cl.initModel(sequelizeDiven);
  const el_categorie = _el_categorie.initModel(sequelizeDiven);
  const el_classificazioni = _el_classificazioni.initModel(sequelizeDiven);
  const el_dipendenti = _el_dipendenti.initModel(sequelizeDiven);
  const el_personas = _el_personas.initModel(sequelizeDiven);
  const el_ruoli = _el_ruoli.initModel(sequelizeDiven);
  const el_servizi = _el_servizi.initModel(sequelizeDiven);
  const el_settori = _el_settori.initModel(sequelizeDiven);
  const el_sottocategorie = _el_sottocategorie.initModel(sequelizeDiven);
  const fatt_tipologie = _fatt_tipologie.initModel(sequelizeDiven);
  const fatturazione = _fatturazione.initModel(sequelizeDiven);
  const fatturazione_commesse = _fatturazione_commesse.initModel(sequelizeDiven);
  const fotovoltaico = _fotovoltaico.initModel(sequelizeDiven);
  const gruppo_operatori = _gruppo_operatori.initModel(sequelizeDiven);
  const gt_timetable = _gt_timetable.initModel(sequelizeDiven);
  const hours = _hours.initModel(sequelizeTasker);
  const impostazioni_utente = _impostazioni_utente.initModel(sequelizeDiven);
  const indicatori = _indicatori.initModel(sequelizeDiven);
  const indicatori_obiettivi = _indicatori_obiettivi.initModel(sequelizeDiven);
  const installatori = _installatori.initModel(sequelizeDiven);
  const ip_bloccati = _ip_bloccati.initModel(sequelizeDiven);
  const marche_sim = _marche_sim.initModel(sequelizeDiven);
  const metodi_lettura = _metodi_lettura.initModel(sequelizeDiven);
  const monitoraggio_oda = _monitoraggio_oda.initModel(sequelizeDiven);
  const operatori_commesse = _operatori_commesse.initModel(sequelizeDiven);
  const operatori_task = _operatori_task.initModel(sequelizeDiven);
  const overtime = _overtime.initModel(sequelizeTasker);
  const pagamenti = _pagamenti.initModel(sequelizeDiven);
  const pagamenti_task = _pagamenti_task.initModel(sequelizeDiven);
  const permessi_operatori = _permessi_operatori.initModel(sequelizeDiven);
  const pratiche_enea = _pratiche_enea.initModel(sequelizeDiven);
  const preventivi = _preventivi.initModel(sequelizeDiven);
  const preventivi_commesse = _preventivi_commesse.initModel(sequelizeDiven);
  const provvigioni = _provvigioni.initModel(sequelizeDiven);
  const qualifiche = _qualifiche.initModel(sequelizeDiven);
  const qualifiche_operatori = _qualifiche_operatori.initModel(sequelizeDiven);
  const rinnovo_cpi = _rinnovo_cpi.initModel(sequelizeDiven);
  const scia_antincendio = _scia_antincendio.initModel(sequelizeDiven);
  const servizi_classificazione = _servizi_classificazione.initModel(sequelizeDiven);
  const settore_operatori = _settore_operatori.initModel(sequelizeDiven);
  const shifts = _shifts.initModel(sequelizeTasker);
  const soddisfazione_cliente = _soddisfazione_cliente.initModel(sequelizeDiven);
  const storico_attivita_svolte = _storico_attivita_svolte.initModel(sequelizeDiven);
  const storico_ricariche_sim = _storico_ricariche_sim.initModel(sequelizeDiven);
  const subtask = _subtask.initModel(sequelizeTasker);
  const task_fatturazione = _task_fatturazione.initModel(sequelizeDiven);
  const task_programmazione = _task_programmazione.initModel(sequelizeDiven);
  const task_subtask = _task_subtask.initModel(sequelizeTasker);
  const tasks = _tasks.initModel(sequelizeTasker);
  const ticket = _ticket.initModel(sequelizeDiven);
  const ticket_commesse = _ticket_commesse.initModel(sequelizeDiven);
  const ticket_operatori = _ticket_operatori.initModel(sequelizeDiven);
  const timetable = _timetable.initModel(sequelizeDiven);
  const tipologia_cl_soddisfazione_cl = _tipologia_cl_soddisfazione_cl.initModel(sequelizeDiven);
  const tipologie_credito = _tipologie_credito.initModel(sequelizeDiven);
  const todo = _todo.initModel(sequelizeDiven);
  const users = _users.initModel(sequelizeTasker);
  const valori_qualita = _valori_qualita.initModel(sequelizeDiven);
  const valori_stagionali_ditte_dogane = _valori_stagionali_ditte_dogane.initModel(sequelizeDiven);

  acquisti.belongsToMany(commesse, { as: 'id_commessa_commesses', through: acquisti_commesse, foreignKey: "id_acquisto", otherKey: "id_commessa" });
  acquisti.belongsToMany(commesse, { as: 'id_commessa_commesse_monitoraggio_odas', through: monitoraggio_oda, foreignKey: "id_oda", otherKey: "id_commessa" });
  ana_operatori.belongsToMany(el_settori, { as: 'id_settore_el_settoris', through: settore_operatori, foreignKey: "id_operatore", otherKey: "id_settore" });
  ana_operatori.belongsToMany(gruppo_operatori, { as: 'id_gruppo_gruppo_operatoris', through: permessi_operatori, foreignKey: "id_operatore", otherKey: "id_gruppo" });
  ana_operatori.belongsToMany(qualifiche, { as: 'id_qualifica_qualifiches', through: qualifiche_operatori, foreignKey: "id_operatori", otherKey: "id_qualifica" });
  commesse.belongsToMany(acquisti, { as: 'id_acquisto_acquistis', through: acquisti_commesse, foreignKey: "id_commessa", otherKey: "id_acquisto" });
  commesse.belongsToMany(acquisti, { as: 'id_oda_acquistis', through: monitoraggio_oda, foreignKey: "id_commessa", otherKey: "id_oda" });
  commesse.belongsToMany(commesse, { as: 'id_commessa_assoc_commesses', through: commesse_associate, foreignKey: "id_commessa_padre", otherKey: "id_commessa_assoc" });
  commesse.belongsToMany(commesse, { as: 'id_commessa_padre_commesses', through: commesse_associate, foreignKey: "id_commessa_assoc", otherKey: "id_commessa_padre" });
  el_classificazioni.belongsToMany(el_servizi, { as: 'id_servizio_el_servizis', through: servizi_classificazione, foreignKey: "id_classificazione", otherKey: "id_servizio" });
  el_servizi.belongsToMany(el_classificazioni, { as: 'id_classificazione_el_classificazionis', through: servizi_classificazione, foreignKey: "id_servizio", otherKey: "id_classificazione" });
  el_settori.belongsToMany(ana_operatori, { as: 'id_operatore_ana_operatori_settore_operatoris', through: settore_operatori, foreignKey: "id_settore", otherKey: "id_operatore" });
  gruppo_operatori.belongsToMany(ana_operatori, { as: 'id_operatore_ana_operatoris', through: permessi_operatori, foreignKey: "id_gruppo", otherKey: "id_operatore" });
  pagamenti.belongsToMany(task_fatturazione, { as: 'id_task_task_fatturaziones', through: pagamenti_task, foreignKey: "id_pagamento", otherKey: "id_task" });
  qualifiche.belongsToMany(ana_operatori, { as: 'id_operatori_ana_operatoris', through: qualifiche_operatori, foreignKey: "id_qualifica", otherKey: "id_operatori" });
  subtask.belongsToMany(tasks, { as: 'id_task_tasks', through: task_subtask, foreignKey: "id_subtask", otherKey: "id_task" });
  task_fatturazione.belongsToMany(pagamenti, { as: 'id_pagamento_pagamentis', through: pagamenti_task, foreignKey: "id_task", otherKey: "id_pagamento" });
  tasks.belongsToMany(subtask, { as: 'id_subtask_subtasks', through: task_subtask, foreignKey: "id_task", otherKey: "id_subtask" });
  acquisti_commesse.belongsTo(acquisti, { as: "id_acquisto_acquisti", foreignKey: "id_acquisto"});
  acquisti.hasMany(acquisti_commesse, { as: "acquisti_commesses", foreignKey: "id_acquisto"});
  fatturazione_commesse.belongsTo(acquisti, { as: "id_acquisto_acquisti", foreignKey: "id_acquisto"});
  acquisti.hasMany(fatturazione_commesse, { as: "fatturazione_commesses", foreignKey: "id_acquisto"});
  monitoraggio_oda.belongsTo(acquisti, { as: "id_oda_acquisti", foreignKey: "id_oda"});
  acquisti.hasMany(monitoraggio_oda, { as: "monitoraggio_odas", foreignKey: "id_oda"});
  cdm_letture.belongsTo(ana_operatori, { as: "operatore_ins_ana_operatori", foreignKey: "operatore_ins"});
  ana_operatori.hasMany(cdm_letture, { as: "cdm_lettures", foreignKey: "operatore_ins"});
  costo_operatori.belongsTo(ana_operatori, { as: "id_operatore_ana_operatori", foreignKey: "id_operatore"});
  ana_operatori.hasMany(costo_operatori, { as: "costo_operatoris", foreignKey: "id_operatore"});
  ip_bloccati.belongsTo(ana_operatori, { as: "user", foreignKey: "userId"});
  ana_operatori.hasMany(ip_bloccati, { as: "ip_bloccatis", foreignKey: "userId"});
  permessi_operatori.belongsTo(ana_operatori, { as: "id_operatore_ana_operatori", foreignKey: "id_operatore"});
  ana_operatori.hasMany(permessi_operatori, { as: "permessi_operatoris", foreignKey: "id_operatore"});
  preventivi.belongsTo(ana_operatori, { as: "id_operatore_ana_operatori", foreignKey: "id_operatore"});
  ana_operatori.hasMany(preventivi, { as: "preventivis", foreignKey: "id_operatore"});
  provvigioni.belongsTo(ana_operatori, { as: "id_operatore_ana_operatori", foreignKey: "id_operatore"});
  ana_operatori.hasMany(provvigioni, { as: "provvigionis", foreignKey: "id_operatore"});
  qualifiche_operatori.belongsTo(ana_operatori, { as: "id_operatori_ana_operatori", foreignKey: "id_operatori"});
  ana_operatori.hasMany(qualifiche_operatori, { as: "qualifiche_operatoris", foreignKey: "id_operatori"});
  settore_operatori.belongsTo(ana_operatori, { as: "id_operatore_ana_operatori", foreignKey: "id_operatore"});
  ana_operatori.hasMany(settore_operatori, { as: "settore_operatoris", foreignKey: "id_operatore"});
  timetable.belongsTo(ana_operatori, { as: "id_operatore_ana_operatori", foreignKey: "id_operatore"});
  ana_operatori.hasMany(timetable, { as: "timetables", foreignKey: "id_operatore"});
  timetable.belongsTo(ana_operatori, { as: "operatore_ins_ana_operatori", foreignKey: "operatore_ins"});
  ana_operatori.hasMany(timetable, { as: "operatore_ins_timetables", foreignKey: "operatore_ins"});
  todo.belongsTo(ana_operatori, { as: "operatore_ins_ana_operatori", foreignKey: "operatore_ins"});
  ana_operatori.hasMany(todo, { as: "todos", foreignKey: "operatore_ins"});
  anagrafiche.belongsTo(ana_tipologie, { as: "id_tipologia_ana_tipologie", foreignKey: "id_tipologia"});
  ana_tipologie.hasMany(anagrafiche, { as: "anagrafiches", foreignKey: "id_tipologia"});
  associazioni_ditte_dogane.belongsTo(anagrafiche, { as: "id_committente_anagrafiche", foreignKey: "id_committente"});
  anagrafiche.hasMany(associazioni_ditte_dogane, { as: "associazioni_ditte_doganes", foreignKey: "id_committente"});
  associazioni_ditte_dogane.belongsTo(anagrafiche, { as: "id_cliente_anagrafiche", foreignKey: "id_cliente"});
  anagrafiche.hasMany(associazioni_ditte_dogane, { as: "id_cliente_associazioni_ditte_doganes", foreignKey: "id_cliente"});
  cdm_competenze.belongsTo(anagrafiche, { as: "id_ana_letture_anagrafiche", foreignKey: "id_ana_letture"});
  anagrafiche.hasMany(cdm_competenze, { as: "cdm_competenzes", foreignKey: "id_ana_letture"});
  cdm_competenze.belongsTo(anagrafiche, { as: "id_ana_fatt_letture_anagrafiche", foreignKey: "id_ana_fatt_letture"});
  anagrafiche.hasMany(cdm_competenze, { as: "id_ana_fatt_letture_cdm_competenzes", foreignKey: "id_ana_fatt_letture"});
  cdm_competenze.belongsTo(anagrafiche, { as: "id_ana_bollette_anagrafiche", foreignKey: "id_ana_bollette"});
  anagrafiche.hasMany(cdm_competenze, { as: "id_ana_bollette_cdm_competenzes", foreignKey: "id_ana_bollette"});
  cdm_competenze.belongsTo(anagrafiche, { as: "id_ana_fatt_bollette_anagrafiche", foreignKey: "id_ana_fatt_bollette"});
  anagrafiche.hasMany(cdm_competenze, { as: "id_ana_fatt_bollette_cdm_competenzes", foreignKey: "id_ana_fatt_bollette"});
  cdm_competenze.belongsTo(anagrafiche, { as: "id_ana_condominio_anagrafiche", foreignKey: "id_ana_condominio"});
  anagrafiche.hasMany(cdm_competenze, { as: "id_ana_condominio_cdm_competenzes", foreignKey: "id_ana_condominio"});
  cdm_letture.belongsTo(anagrafiche, { as: "id_ana_condominio_anagrafiche", foreignKey: "id_ana_condominio"});
  anagrafiche.hasMany(cdm_letture, { as: "cdm_lettures", foreignKey: "id_ana_condominio"});
  condomini.belongsTo(anagrafiche, { as: "id_ana_condominio_anagrafiche", foreignKey: "id_ana_condominio"});
  anagrafiche.hasOne(condomini, { as: "condomini", foreignKey: "id_ana_condominio"});
  preventivi.belongsTo(anagrafiche, { as: "id_referente_anagrafica_anagrafiche", foreignKey: "id_referente_anagrafica"});
  anagrafiche.hasMany(preventivi, { as: "preventivis", foreignKey: "id_referente_anagrafica"});
  cdm_letture.belongsTo(cdm_campi, { as: "id_campo_cdm_campi", foreignKey: "id_campo"});
  cdm_campi.hasMany(cdm_letture, { as: "cdm_lettures", foreignKey: "id_campo"});
  condomini.belongsTo(cdm_marche, { as: "id_marca_cdm_marche", foreignKey: "id_marca"});
  cdm_marche.hasMany(condomini, { as: "condominis", foreignKey: "id_marca"});
  crediti_commesse.belongsTo(codici_importo_commessa, { as: "codice_codici_importo_commessa", foreignKey: "codice"});
  codici_importo_commessa.hasMany(crediti_commesse, { as: "crediti_commesses", foreignKey: "codice"});
  acquisti_commesse.belongsTo(commesse, { as: "id_commessa_commesse", foreignKey: "id_commessa"});
  commesse.hasMany(acquisti_commesse, { as: "acquisti_commesses", foreignKey: "id_commessa"});
  commesse_associate.belongsTo(commesse, { as: "id_commessa_padre_commesse", foreignKey: "id_commessa_padre"});
  commesse.hasMany(commesse_associate, { as: "commesse_associates", foreignKey: "id_commessa_padre"});
  commesse_associate.belongsTo(commesse, { as: "id_commessa_assoc_commesse", foreignKey: "id_commessa_assoc"});
  commesse.hasMany(commesse_associate, { as: "id_commessa_assoc_commesse_associates", foreignKey: "id_commessa_assoc"});
  commesse_sb.belongsTo(commesse, { as: "id_commessa_commesse", foreignKey: "id_commessa"});
  commesse.hasMany(commesse_sb, { as: "commesse_sbs", foreignKey: "id_commessa"});
  crediti_commesse.belongsTo(commesse, { as: "id_commessa_commesse", foreignKey: "id_commessa"});
  commesse.hasMany(crediti_commesse, { as: "crediti_commesses", foreignKey: "id_commessa"});
  credito_utilizzato.belongsTo(commesse, { as: "id_commessa_commesse", foreignKey: "id_commessa"});
  commesse.hasMany(credito_utilizzato, { as: "credito_utilizzatos", foreignKey: "id_commessa"});
  dogane.belongsTo(commesse, { as: "id_commessa_commesse", foreignKey: "id_commessa"});
  commesse.hasMany(dogane, { as: "doganes", foreignKey: "id_commessa"});
  fatturazione_commesse.belongsTo(commesse, { as: "id_commessa_commesse", foreignKey: "id_commessa"});
  commesse.hasMany(fatturazione_commesse, { as: "fatturazione_commesses", foreignKey: "id_commessa"});
  monitoraggio_oda.belongsTo(commesse, { as: "id_commessa_commesse", foreignKey: "id_commessa"});
  commesse.hasMany(monitoraggio_oda, { as: "monitoraggio_odas", foreignKey: "id_commessa"});
  operatori_task.belongsTo(commesse, { as: "id_commessa_commesse", foreignKey: "id_commessa"});
  commesse.hasMany(operatori_task, { as: "operatori_tasks", foreignKey: "id_commessa"});
  task_fatturazione.belongsTo(commesse, { as: "id_commessa_commesse", foreignKey: "id_commessa"});
  commesse.hasMany(task_fatturazione, { as: "task_fatturaziones", foreignKey: "id_commessa"});
  task_programmazione.belongsTo(commesse, { as: "id_commessa_commesse", foreignKey: "id_commessa"});
  commesse.hasMany(task_programmazione, { as: "task_programmaziones", foreignKey: "id_commessa"});
  timetable.belongsTo(commesse, { as: "id_commessa_commesse", foreignKey: "id_commessa"});
  commesse.hasMany(timetable, { as: "timetables", foreignKey: "id_commessa"});
  storico_ricariche_sim.belongsTo(condomini, { as: "id_condominio_condomini", foreignKey: "id_condominio"});
  condomini.hasMany(storico_ricariche_sim, { as: "storico_ricariche_sims", foreignKey: "id_condominio"});
  credito_utilizzato.belongsTo(crediti_commesse, { as: "id_credito_crediti_commesse", foreignKey: "id_credito"});
  crediti_commesse.hasMany(credito_utilizzato, { as: "credito_utilizzatos", foreignKey: "id_credito"});
  el_classificazioni.belongsTo(el_categorie, { as: "id_categoria_el_categorie", foreignKey: "id_categoria"});
  el_categorie.hasMany(el_classificazioni, { as: "el_classificazionis", foreignKey: "id_categoria"});
  servizi_classificazione.belongsTo(el_classificazioni, { as: "id_classificazione_el_classificazioni", foreignKey: "id_classificazione"});
  el_classificazioni.hasMany(servizi_classificazione, { as: "servizi_classificaziones", foreignKey: "id_classificazione"});
  task_fatturazione.belongsTo(el_classificazioni, { as: "id_classificazione_el_classificazioni", foreignKey: "id_classificazione"});
  el_classificazioni.hasMany(task_fatturazione, { as: "task_fatturaziones", foreignKey: "id_classificazione"});
  task_programmazione.belongsTo(el_classificazioni, { as: "id_classificazione_el_classificazioni", foreignKey: "id_classificazione"});
  el_classificazioni.hasMany(task_programmazione, { as: "task_programmaziones", foreignKey: "id_classificazione"});
  ana_operatori.belongsTo(el_dipendenti, { as: "id_el_dipendenti_el_dipendenti", foreignKey: "id_el_dipendenti"});
  el_dipendenti.hasMany(ana_operatori, { as: "ana_operatoris", foreignKey: "id_el_dipendenti"});
  anagrafiche.belongsTo(el_personas, { as: "id_personas_el_persona", foreignKey: "id_personas"});
  el_personas.hasMany(anagrafiche, { as: "anagrafiches", foreignKey: "id_personas"});
  ana_operatori.belongsTo(el_ruoli, { as: "id_ruolo_el_ruoli", foreignKey: "id_ruolo"});
  el_ruoli.hasMany(ana_operatori, { as: "ana_operatoris", foreignKey: "id_ruolo"});
  operatori_task.belongsTo(el_ruoli, { as: "id_ruolo_el_ruoli", foreignKey: "id_ruolo"});
  el_ruoli.hasMany(operatori_task, { as: "operatori_tasks", foreignKey: "id_ruolo"});
  servizi_classificazione.belongsTo(el_servizi, { as: "id_servizio_el_servizi", foreignKey: "id_servizio"});
  el_servizi.hasMany(servizi_classificazione, { as: "servizi_classificaziones", foreignKey: "id_servizio"});
  settore_operatori.belongsTo(el_settori, { as: "id_settore_el_settori", foreignKey: "id_settore"});
  el_settori.hasMany(settore_operatori, { as: "settore_operatoris", foreignKey: "id_settore"});
  task_fatturazione.belongsTo(el_settori, { as: "id_settore_el_settori", foreignKey: "id_settore"});
  el_settori.hasMany(task_fatturazione, { as: "task_fatturaziones", foreignKey: "id_settore"});
  task_programmazione.belongsTo(el_settori, { as: "id_settore_el_settori", foreignKey: "id_settore"});
  el_settori.hasMany(task_programmazione, { as: "task_programmaziones", foreignKey: "id_settore"});
  el_classificazioni.belongsTo(el_sottocategorie, { as: "id_sottocategoria_el_sottocategorie", foreignKey: "id_sottocategoria"});
  el_sottocategorie.hasMany(el_classificazioni, { as: "el_classificazionis", foreignKey: "id_sottocategoria"});
  fatturazione_commesse.belongsTo(fatturazione, { as: "id_fattura_fatturazione", foreignKey: "id_fattura"});
  fatturazione.hasMany(fatturazione_commesse, { as: "fatturazione_commesses", foreignKey: "id_fattura"});
  permessi_operatori.belongsTo(gruppo_operatori, { as: "id_gruppo_gruppo_operatori", foreignKey: "id_gruppo"});
  gruppo_operatori.hasMany(permessi_operatori, { as: "permessi_operatoris", foreignKey: "id_gruppo"});
  overtime.belongsTo(hours, { as: "Id_hour_hour", foreignKey: "Id_hour"});
  hours.hasMany(overtime, { as: "overtimes", foreignKey: "Id_hour"});
  condomini.belongsTo(marche_sim, { as: "marca_SIM_marche_sim", foreignKey: "marca_SIM"});
  marche_sim.hasMany(condomini, { as: "condominis", foreignKey: "marca_SIM"});
  condomini.belongsTo(metodi_lettura, { as: "metodo_lettura_metodi_lettura", foreignKey: "metodo_lettura"});
  metodi_lettura.hasMany(condomini, { as: "condominis", foreignKey: "metodo_lettura"});
  pagamenti_task.belongsTo(pagamenti, { as: "id_pagamento_pagamenti", foreignKey: "id_pagamento"});
  pagamenti.hasMany(pagamenti_task, { as: "pagamenti_tasks", foreignKey: "id_pagamento"});
  qualifiche_operatori.belongsTo(qualifiche, { as: "id_qualifica_qualifiche", foreignKey: "id_qualifica"});
  qualifiche.hasMany(qualifiche_operatori, { as: "qualifiche_operatoris", foreignKey: "id_qualifica"});
  hours.belongsTo(subtask, { as: "id_subtask_subtask", foreignKey: "id_subtask"});
  subtask.hasMany(hours, { as: "hours", foreignKey: "id_subtask"});
  task_subtask.belongsTo(subtask, { as: "id_subtask_subtask", foreignKey: "id_subtask"});
  subtask.hasMany(task_subtask, { as: "task_subtasks", foreignKey: "id_subtask"});
  fatturazione_commesse.belongsTo(task_fatturazione, { as: "id_task_task_fatturazione", foreignKey: "id_task"});
  task_fatturazione.hasMany(fatturazione_commesse, { as: "fatturazione_commesses", foreignKey: "id_task"});
  pagamenti_task.belongsTo(task_fatturazione, { as: "id_task_task_fatturazione", foreignKey: "id_task"});
  task_fatturazione.hasMany(pagamenti_task, { as: "pagamenti_tasks", foreignKey: "id_task"});
  hours.belongsTo(tasks, { as: "Id_task_task", foreignKey: "Id_task"});
  tasks.hasMany(hours, { as: "hours", foreignKey: "Id_task"});
  task_subtask.belongsTo(tasks, { as: "id_task_task", foreignKey: "id_task"});
  tasks.hasMany(task_subtask, { as: "task_subtasks", foreignKey: "id_task"});
  crediti_commesse.belongsTo(tipologie_credito, { as: "id_tipologia_tipologie_credito", foreignKey: "id_tipologia"});
  tipologie_credito.hasMany(crediti_commesse, { as: "crediti_commesses", foreignKey: "id_tipologia"});
  contract_of_employment.belongsTo(users, { as: "Id_user_user", foreignKey: "Id_user"});
  users.hasMany(contract_of_employment, { as: "contract_of_employments", foreignKey: "Id_user"});
  hours.belongsTo(users, { as: "Id_user_user", foreignKey: "Id_user"});
  users.hasMany(hours, { as: "hours", foreignKey: "Id_user"});
  overtime.belongsTo(users, { as: "Id_user_user", foreignKey: "Id_user"});
  users.hasMany(overtime, { as: "overtimes", foreignKey: "Id_user"});
  shifts.belongsTo(users, { as: "Id_user_user", foreignKey: "Id_user"});
  users.hasMany(shifts, { as: "shifts", foreignKey: "Id_user"});

  return {
    acquisti: acquisti,
    acquisti_commesse: acquisti_commesse,
    ana_operatori: ana_operatori,
    ana_tipologie: ana_tipologie,
    anagrafiche: anagrafiche,
    archives: archives,
    associazioni_ditte_dogane: associazioni_ditte_dogane,
    cdm_associazioni: cdm_associazioni,
    cdm_campi: cdm_campi,
    cdm_competenze: cdm_competenze,
    cdm_letture: cdm_letture,
    cdm_marche: cdm_marche,
    codici_importo_commessa: codici_importo_commessa,
    commesse: commesse,
    commesse_associate: commesse_associate,
    commesse_sb: commesse_sb,
    condomini: condomini,
    contract_of_employment: contract_of_employment,
    costo_operatori: costo_operatori,
    crediti_commesse: crediti_commesse,
    credito_debito: credito_debito,
    credito_utilizzato: credito_utilizzato,
    ditte_dogane: ditte_dogane,
    docs_fornitori: docs_fornitori,
    dogane: dogane,
    dogane_des: dogane_des,
    domande: domande,
    domande_soddisfazione_cl: domande_soddisfazione_cl,
    el_categorie: el_categorie,
    el_classificazioni: el_classificazioni,
    el_dipendenti: el_dipendenti,
    el_personas: el_personas,
    el_ruoli: el_ruoli,
    el_servizi: el_servizi,
    el_settori: el_settori,
    el_sottocategorie: el_sottocategorie,
    fatt_tipologie: fatt_tipologie,
    fatturazione: fatturazione,
    fatturazione_commesse: fatturazione_commesse,
    fotovoltaico: fotovoltaico,
    gruppo_operatori: gruppo_operatori,
    gt_timetable: gt_timetable,
    hours: hours,
    impostazioni_utente: impostazioni_utente,
    indicatori: indicatori,
    indicatori_obiettivi: indicatori_obiettivi,
    installatori: installatori,
    ip_bloccati: ip_bloccati,
    marche_sim: marche_sim,
    metodi_lettura: metodi_lettura,
    monitoraggio_oda: monitoraggio_oda,
    operatori_commesse: operatori_commesse,
    operatori_task: operatori_task,
    overtime: overtime,
    pagamenti: pagamenti,
    pagamenti_task: pagamenti_task,
    permessi_operatori: permessi_operatori,
    pratiche_enea: pratiche_enea,
    preventivi: preventivi,
    preventivi_commesse: preventivi_commesse,
    provvigioni: provvigioni,
    qualifiche: qualifiche,
    qualifiche_operatori: qualifiche_operatori,
    rinnovo_cpi: rinnovo_cpi,
    scia_antincendio: scia_antincendio,
    servizi_classificazione: servizi_classificazione,
    settore_operatori: settore_operatori,
    shifts: shifts,
    soddisfazione_cliente: soddisfazione_cliente,
    storico_attivita_svolte: storico_attivita_svolte,
    storico_ricariche_sim: storico_ricariche_sim,
    subtask: subtask,
    task_fatturazione: task_fatturazione,
    task_programmazione: task_programmazione,
    task_subtask: task_subtask,
    tasks: tasks,
    ticket: ticket,
    ticket_commesse: ticket_commesse,
    ticket_operatori: ticket_operatori,
    timetable: timetable,
    tipologia_cl_soddisfazione_cl: tipologia_cl_soddisfazione_cl,
    tipologie_credito: tipologie_credito,
    todo: todo,
    users: users,
    valori_qualita: valori_qualita,
    valori_stagionali_ditte_dogane: valori_stagionali_ditte_dogane,
  };
}
