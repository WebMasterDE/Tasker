var DataTypes = require("sequelize").DataTypes;
var _acquisti = require("./acquisti");
var _acquisti_commesse = require("./acquisti_commesse");
var _ana_operatori = require("./ana_operatori");
var _ana_tipologie = require("./ana_tipologie");
var _anagrafiche = require("./anagrafiche");
var _archives = require("./archives");
var _associazioni_ditte_dogane = require("./associazioni_ditte_dogane");
var _cdm_associazioni = require("./cdm_associazioni");
var _cdm_campi = require("./cdm_campi");
var _cdm_competenze = require("./cdm_competenze");
var _cdm_letture = require("./cdm_letture");
var _cdm_marche = require("./cdm_marche");
var _codici_importo_commessa = require("./codici_importo_commessa");
var _commesse = require("./commesse");
var _commesse_associate = require("./commesse_associate");
var _commesse_sb = require("./commesse_sb");
var _condomini = require("./condomini");
var _contract_of_employment = require("./contract_of_employment");
var _costo_operatori = require("./costo_operatori");
var _crediti_commesse = require("./crediti_commesse");
var _credito_debito = require("./credito_debito");
var _credito_utilizzato = require("./credito_utilizzato");
var _ditte_dogane = require("./ditte_dogane");
var _docs_fornitori = require("./docs_fornitori");
var _dogane = require("./dogane");
var _dogane_des = require("./dogane_des");
var _domande = require("./domande");
var _domande_soddisfazione_cl = require("./domande_soddisfazione_cl");
var _el_categorie = require("./el_categorie");
var _el_classificazioni = require("./el_classificazioni");
var _el_dipendenti = require("./el_dipendenti");
var _el_personas = require("./el_personas");
var _el_ruoli = require("./el_ruoli");
var _el_servizi = require("./el_servizi");
var _el_settori = require("./el_settori");
var _el_sottocategorie = require("./el_sottocategorie");
var _fatt_tipologie = require("./fatt_tipologie");
var _fatturazione = require("./fatturazione");
var _fatturazione_commesse = require("./fatturazione_commesse");
var _fotovoltaico = require("./fotovoltaico");
var _gruppo_operatori = require("./gruppo_operatori");
var _gt_timetable = require("./gt_timetable");
var _hours = require("./hours");
var _impostazioni_utente = require("./impostazioni_utente");
var _indicatori = require("./indicatori");
var _indicatori_obiettivi = require("./indicatori_obiettivi");
var _installatori = require("./installatori");
var _ip_bloccati = require("./ip_bloccati");
var _marche_sim = require("./marche_sim");
var _metodi_lettura = require("./metodi_lettura");
var _monitoraggio_oda = require("./monitoraggio_oda");
var _operatori_commesse = require("./operatori_commesse");
var _operatori_task = require("./operatori_task");
var _overtime = require("./overtime");
var _pagamenti = require("./pagamenti");
var _pagamenti_task = require("./pagamenti_task");
var _permessi_operatori = require("./permessi_operatori");
var _pratiche_enea = require("./pratiche_enea");
var _preventivi = require("./preventivi");
var _preventivi_commesse = require("./preventivi_commesse");
var _provvigioni = require("./provvigioni");
var _qualifiche = require("./qualifiche");
var _qualifiche_operatori = require("./qualifiche_operatori");
var _rinnovo_cpi = require("./rinnovo_cpi");
var _scia_antincendio = require("./scia_antincendio");
var _servizi_classificazione = require("./servizi_classificazione");
var _settore_operatori = require("./settore_operatori");
var _shifts = require("./shifts");
var _soddisfazione_cliente = require("./soddisfazione_cliente");
var _storico_attivita_svolte = require("./storico_attivita_svolte");
var _storico_ricariche_sim = require("./storico_ricariche_sim");
var _subtask = require("./subtask");
var _task_fatturazione = require("./task_fatturazione");
var _task_programmazione = require("./task_programmazione");
var _task_subtask = require("./task_subtask");
var _tasks = require("./tasks");
var _ticket = require("./ticket");
var _ticket_commesse = require("./ticket_commesse");
var _ticket_operatori = require("./ticket_operatori");
var _timetable = require("./timetable");
var _tipologia_cl_soddisfazione_cl = require("./tipologia_cl_soddisfazione_cl");
var _tipologie_credito = require("./tipologie_credito");
var _todo = require("./todo");
var _users = require("./users");
var _valori_qualita = require("./valori_qualita");
var _valori_stagionali_ditte_dogane = require("./valori_stagionali_ditte_dogane");

function initModels(sequelize) {
  var acquisti = _acquisti(sequelize, DataTypes);
  var acquisti_commesse = _acquisti_commesse(sequelize, DataTypes);
  var ana_operatori = _ana_operatori(sequelize, DataTypes);
  var ana_tipologie = _ana_tipologie(sequelize, DataTypes);
  var anagrafiche = _anagrafiche(sequelize, DataTypes);
  var archives = _archives(sequelize, DataTypes);
  var associazioni_ditte_dogane = _associazioni_ditte_dogane(sequelize, DataTypes);
  var cdm_associazioni = _cdm_associazioni(sequelize, DataTypes);
  var cdm_campi = _cdm_campi(sequelize, DataTypes);
  var cdm_competenze = _cdm_competenze(sequelize, DataTypes);
  var cdm_letture = _cdm_letture(sequelize, DataTypes);
  var cdm_marche = _cdm_marche(sequelize, DataTypes);
  var codici_importo_commessa = _codici_importo_commessa(sequelize, DataTypes);
  var commesse = _commesse(sequelize, DataTypes);
  var commesse_associate = _commesse_associate(sequelize, DataTypes);
  var commesse_sb = _commesse_sb(sequelize, DataTypes);
  var condomini = _condomini(sequelize, DataTypes);
  var contract_of_employment = _contract_of_employment(sequelize, DataTypes);
  var costo_operatori = _costo_operatori(sequelize, DataTypes);
  var crediti_commesse = _crediti_commesse(sequelize, DataTypes);
  var credito_debito = _credito_debito(sequelize, DataTypes);
  var credito_utilizzato = _credito_utilizzato(sequelize, DataTypes);
  var ditte_dogane = _ditte_dogane(sequelize, DataTypes);
  var docs_fornitori = _docs_fornitori(sequelize, DataTypes);
  var dogane = _dogane(sequelize, DataTypes);
  var dogane_des = _dogane_des(sequelize, DataTypes);
  var domande = _domande(sequelize, DataTypes);
  var domande_soddisfazione_cl = _domande_soddisfazione_cl(sequelize, DataTypes);
  var el_categorie = _el_categorie(sequelize, DataTypes);
  var el_classificazioni = _el_classificazioni(sequelize, DataTypes);
  var el_dipendenti = _el_dipendenti(sequelize, DataTypes);
  var el_personas = _el_personas(sequelize, DataTypes);
  var el_ruoli = _el_ruoli(sequelize, DataTypes);
  var el_servizi = _el_servizi(sequelize, DataTypes);
  var el_settori = _el_settori(sequelize, DataTypes);
  var el_sottocategorie = _el_sottocategorie(sequelize, DataTypes);
  var fatt_tipologie = _fatt_tipologie(sequelize, DataTypes);
  var fatturazione = _fatturazione(sequelize, DataTypes);
  var fatturazione_commesse = _fatturazione_commesse(sequelize, DataTypes);
  var fotovoltaico = _fotovoltaico(sequelize, DataTypes);
  var gruppo_operatori = _gruppo_operatori(sequelize, DataTypes);
  var gt_timetable = _gt_timetable(sequelize, DataTypes);
  var hours = _hours(sequelize, DataTypes);
  var impostazioni_utente = _impostazioni_utente(sequelize, DataTypes);
  var indicatori = _indicatori(sequelize, DataTypes);
  var indicatori_obiettivi = _indicatori_obiettivi(sequelize, DataTypes);
  var installatori = _installatori(sequelize, DataTypes);
  var ip_bloccati = _ip_bloccati(sequelize, DataTypes);
  var marche_sim = _marche_sim(sequelize, DataTypes);
  var metodi_lettura = _metodi_lettura(sequelize, DataTypes);
  var monitoraggio_oda = _monitoraggio_oda(sequelize, DataTypes);
  var operatori_commesse = _operatori_commesse(sequelize, DataTypes);
  var operatori_task = _operatori_task(sequelize, DataTypes);
  var overtime = _overtime(sequelize, DataTypes);
  var pagamenti = _pagamenti(sequelize, DataTypes);
  var pagamenti_task = _pagamenti_task(sequelize, DataTypes);
  var permessi_operatori = _permessi_operatori(sequelize, DataTypes);
  var pratiche_enea = _pratiche_enea(sequelize, DataTypes);
  var preventivi = _preventivi(sequelize, DataTypes);
  var preventivi_commesse = _preventivi_commesse(sequelize, DataTypes);
  var provvigioni = _provvigioni(sequelize, DataTypes);
  var qualifiche = _qualifiche(sequelize, DataTypes);
  var qualifiche_operatori = _qualifiche_operatori(sequelize, DataTypes);
  var rinnovo_cpi = _rinnovo_cpi(sequelize, DataTypes);
  var scia_antincendio = _scia_antincendio(sequelize, DataTypes);
  var servizi_classificazione = _servizi_classificazione(sequelize, DataTypes);
  var settore_operatori = _settore_operatori(sequelize, DataTypes);
  var shifts = _shifts(sequelize, DataTypes);
  var soddisfazione_cliente = _soddisfazione_cliente(sequelize, DataTypes);
  var storico_attivita_svolte = _storico_attivita_svolte(sequelize, DataTypes);
  var storico_ricariche_sim = _storico_ricariche_sim(sequelize, DataTypes);
  var subtask = _subtask(sequelize, DataTypes);
  var task_fatturazione = _task_fatturazione(sequelize, DataTypes);
  var task_programmazione = _task_programmazione(sequelize, DataTypes);
  var task_subtask = _task_subtask(sequelize, DataTypes);
  var tasks = _tasks(sequelize, DataTypes);
  var ticket = _ticket(sequelize, DataTypes);
  var ticket_commesse = _ticket_commesse(sequelize, DataTypes);
  var ticket_operatori = _ticket_operatori(sequelize, DataTypes);
  var timetable = _timetable(sequelize, DataTypes);
  var tipologia_cl_soddisfazione_cl = _tipologia_cl_soddisfazione_cl(sequelize, DataTypes);
  var tipologie_credito = _tipologie_credito(sequelize, DataTypes);
  var todo = _todo(sequelize, DataTypes);
  var users = _users(sequelize, DataTypes);
  var valori_qualita = _valori_qualita(sequelize, DataTypes);
  var valori_stagionali_ditte_dogane = _valori_stagionali_ditte_dogane(sequelize, DataTypes);

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
    acquisti,
    acquisti_commesse,
    ana_operatori,
    ana_tipologie,
    anagrafiche,
    archives,
    associazioni_ditte_dogane,
    cdm_associazioni,
    cdm_campi,
    cdm_competenze,
    cdm_letture,
    cdm_marche,
    codici_importo_commessa,
    commesse,
    commesse_associate,
    commesse_sb,
    condomini,
    contract_of_employment,
    costo_operatori,
    crediti_commesse,
    credito_debito,
    credito_utilizzato,
    ditte_dogane,
    docs_fornitori,
    dogane,
    dogane_des,
    domande,
    domande_soddisfazione_cl,
    el_categorie,
    el_classificazioni,
    el_dipendenti,
    el_personas,
    el_ruoli,
    el_servizi,
    el_settori,
    el_sottocategorie,
    fatt_tipologie,
    fatturazione,
    fatturazione_commesse,
    fotovoltaico,
    gruppo_operatori,
    gt_timetable,
    hours,
    impostazioni_utente,
    indicatori,
    indicatori_obiettivi,
    installatori,
    ip_bloccati,
    marche_sim,
    metodi_lettura,
    monitoraggio_oda,
    operatori_commesse,
    operatori_task,
    overtime,
    pagamenti,
    pagamenti_task,
    permessi_operatori,
    pratiche_enea,
    preventivi,
    preventivi_commesse,
    provvigioni,
    qualifiche,
    qualifiche_operatori,
    rinnovo_cpi,
    scia_antincendio,
    servizi_classificazione,
    settore_operatori,
    shifts,
    soddisfazione_cliente,
    storico_attivita_svolte,
    storico_ricariche_sim,
    subtask,
    task_fatturazione,
    task_programmazione,
    task_subtask,
    tasks,
    ticket,
    ticket_commesse,
    ticket_operatori,
    timetable,
    tipologia_cl_soddisfazione_cl,
    tipologie_credito,
    todo,
    users,
    valori_qualita,
    valori_stagionali_ditte_dogane,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
