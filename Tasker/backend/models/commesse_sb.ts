import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { commesse, commesseId } from './commesse';

export interface commesse_sbAttributes {
  id: number;
  id_commessa?: number;
  pre_planimetrie?: 'si' | 'no';
  pre_dati_caldaia?: 'si' | 'no';
  pre_sopralluoghi: string;
  pre_note_planimetrie?: string;
  pre_computo?: number;
  old_pre_scadenza_computo: string;
  pre_modello_termo?: number;
  pre_scadenza_lavorazioni: string;
  pre_revisione?: number;
  pre_salto_classi?: 'si' | 'no';
  pre_conform?: 'si' | 'no' | 'no_incarico' | 'daintegrare' | 'ext' | 'si_con_sanatoria';
  pre_isolamento_old?: 'si' | 'no';
  pre_note_conform?: string;
  sec_ditta_involucro?: string;
  sec_note_ditta_involucro?: string;
  sec_computo?: number;
  sec_note_computo?: string;
  sec_conform?: 'si' | 'no' | 'non fare';
  sec_note_conform?: string;
  sec_assemblea?: string;
  sec_note_assemblea?: string;
  sec_sopralluoghi?: string;
  sec_note_sopralluoghi?: string;
  sec_esecuzione?: string;
  sec_note_esecuzione?: string;
  sec_legge?: 'si' | 'no';
  sec_note_legge?: string;
  sec_cila?: string;
  sec_note_cila?: string;
  sec_psc?: 'si' | 'no';
  sec_note_psc?: string;
  sec_prog?: 'si' | 'no' | 'non fare';
  sec_note_prog?: string;
  sec_dico?: string;
  sec_note_dico?: string;
  sec_cong_edili?: number;
  sec_note_cong_edili?: string;
  sec_cong_imp?: number;
  sec_note_cong_imp?: string;
  sec_ape?: string;
  sec_note_ape?: string;
  sec_scadenza?: string;
  sec_note_scadenza?: string;
  sec_registrazione?: string;
  sec_note_registrazione?: string;
  pre_note_dati_caldaia?: string;
  pre_note_salto_classi?: string;
  pre_note_isolamento_old?: string;
  pre_comune?: string;
  pre_note_sopralluoghi?: string;
  pre_note_computo?: string;
  pre_note_scadenza_computo?: string;
  pre_note_termo?: string;
  pre_note_scadenza_termo?: string;
  pre_note_revisione?: string;
  pre_computo_stato: '0' | '1' | '2';
  pre_modello_termo_stato: '0' | '1' | '2';
  sec_computo_stato: string;
  sec_cong_imp_stato: string;
  sec_cong_edili_stato: string;
  pre_accesso_atti: number;
  pre_note_atti?: string;
  pre_accesso_atti_stato: string;
  pre_richiesta_materiali: number;
  pre_note_ric_mat?: string;
  pre_ric_mat_completata?: string;
  pre_sopra_ogni_unita: string;
  pre_comp_impianti: string;
  pre_scadenza_lavorazioni_stato: string;
  pre_comp_impianti_stato: string;
  sec_importo_lavori?: number;
  sec_imp_lav_riferimenti?: string;
  pre_app_sec_step?: 'si' | 'no';
  pre_note_sec_step?: string;
  pre_data_sec_step?: string;
  pre_note_ces?: string;
  pre_ces?: 'si' | 'no' | 'standby';
  pre_data_app_comune_atti?: string;
  pre_data_rich_atti?: string;
  pre_note_data_app_com_atti?: string;
  pre_op_ins_comune?: number;
  pre_op_ins_rich_mat?: number;
  pre_op_ins_plan?: number;
  pre_op_ins_dati_cald?: number;
  pre_op_ins_sopral?: number;
  pre_op_ins_scad_lav?: number;
  pre_op_ins_comp_impianti?: number;
  pre_op_ins_mod_term?: number;
  pre_op_ins_rev?: number;
  pre_op_ins_comp?: number;
  pre_op_ins_atti?: number;
  pre_op_ins_conf_urb?: number;
  pre_op_ins_salto_classi?: number;
  pre_op_ins_sec_step?: number;
  pre_op_ins_ces?: number;
  pre_op_ins_tipo_impianto?: number;
  pre_comp_impianti_stato_dettagliato?: 'da_fare' | 'da_revisionare' | 'revisionato' | 'non_fare';
  pre_revisione_comp_edi?: number;
  pre_computo_stato_dettagliato?: 'da_revisionare' | 'revisionato' | 'problemi';
  pre_mod_termo_stato_dettagliato?: 'revisionato' | 'da_revisionare' | 'problemi';
  pre_revisione_comp_imp?: number;
  pre_comp_imp_stato_dettagliato?: 'revisionato' | 'da_revisionare' | 'problemi';
  pre_computo_imp?: number;
  pre_note_comp_imp?: string;
  pre_invio_dati_cl?: number;
  pre_invio_dati_cl_stato?: string;
  pre_data_invio_dati_cl?: string;
  pre_note_invio_dati_cl?: string;
  pre_op_invio_dati_cl?: number;
  pre_stato_sb: 'in_corso' | 'archiviata (generico)' | 'archiviata - lavoro prosegue' | 'archiviata - esito negativo' | 'stand-by';
  sec_stato_sb: 'in_corso' | 'archiviata' | 'stand-by';
  pre_op_ins_stato_sb?: number;
  sec_op_ins_stato_sb?: number;
  sec_professionista?: string;
  sec_note_professionista?: string;
  sec_ditta_impianti?: string;
  sec_note_ditta_impianti?: string;
  sec_contratto?: 'si' | 'no';
  sec_note_contratto?: string;
  sec_prog_imp?: 'in corso' | 'fatto' | 'da fare' | 'non fare';
  sec_note_prog_imp?: string;
  sec_prog_inv?: 'in corso' | 'fatto' | 'non fare';
  sec_note_prog_inv?: string;
  sec_sopralluoghi_new?: 'in corso' | 'fatto' | 'non fare';
  sec_note_sopralluoghi_new?: string;
  sec_op_ins_prog_imp?: number;
  sec_op_ins_prog_inv?: number;
  sec_op_ins_ditta_inv?: number;
  sec_op_ins_ditta_imp?: number;
  sec_op_ins_profess?: number;
  sec_op_ins_contr?: number;
  sec_op_ins_soprall?: number;
  sec_op_ins_legg_10?: number;
  sec_op_ins_cila?: number;
  sec_op_ins_psc?: number;
  sec_op_ins_ape?: number;
  sec_op_ins_scadenza?: number;
  sec_op_ins_registrazione?: number;
  sec_avanzamento_lav?: string;
  sec_note_avanzamento_lav?: string;
  sec_op_ins_avanz_lav?: number;
  sec_prog_psc?: string;
  sec_prog_legge_10?: string;
  sec_prog_prog_imp?: string;
  sec_prog_sopralluoghi?: string;
  sec_stato_scadenza?: 'si' | 'no';
  sec_stato_cila?: number;
  sec_prog_cila?: string;
  sec_prog_prog_inv?: string;
  sec_stato_avanz_lav?: number;
  sec_prog_fv?: 'in corso' | 'fatto' | 'non fare';
  sec_prog_prog_fv?: string;
  sec_note_prog_fv?: string;
  sec_op_ins_prog_fv?: number;
  sec_op_ins_prat_allac?: number;
  sec_prat_allac?: 'non_fare' | 'fatto' | 'in_corso';
  sec_data_inizio_lavori?: string;
  sec_note_data_inizio_lavori?: string;
  sec_op_ins_data_inizio_lavori?: number;
  sec_op_ins_altre_prat_ed?: number;
  sec_stato_altre_prat_ed?: number;
  sec_prog_altre_prat_ed?: string;
  sec_note_altre_prat_ed?: string;
  sec_altre_prat_ed?: string;
  sec_op_ins_cila_invariante?: number;
  sec_stato_cila_invariante?: number;
  sec_prog_cila_invariante?: string;
  sec_note_cila_invariante?: string;
  sec_cila_invariante?: string;
  sec_data_fine_lavori?: string;
  sec_note_data_fine_lavori?: string;
  sec_op_ins_data_fine_lavori?: number;
  sec_op_ins_lex10ab?: number;
  sec_stato_lex10ab?: number;
  sec_prog_lex10ab?: string;
  sec_note_lex10ab?: string;
  sec_lex10ab?: string;
  sec_osp_pres_pratica?: 'Completato' | 'Non fare';
  sec_osp_prog_pres_pratica?: string;
  sec_osp_note_pres_pratica?: string;
  sec_osp_op_ins_pres_pratica?: number;
  sec_osp_inizio_occ?: string;
  sec_osp_note_inizio_occ?: string;
  sec_osp_op_ins_inizio_occ?: number;
}

export type commesse_sbPk = "id";
export type commesse_sbId = commesse_sb[commesse_sbPk];
export type commesse_sbOptionalAttributes = "id" | "id_commessa" | "pre_planimetrie" | "pre_dati_caldaia" | "pre_sopralluoghi" | "pre_note_planimetrie" | "pre_computo" | "old_pre_scadenza_computo" | "pre_modello_termo" | "pre_scadenza_lavorazioni" | "pre_revisione" | "pre_salto_classi" | "pre_conform" | "pre_isolamento_old" | "pre_note_conform" | "sec_ditta_involucro" | "sec_note_ditta_involucro" | "sec_computo" | "sec_note_computo" | "sec_conform" | "sec_note_conform" | "sec_assemblea" | "sec_note_assemblea" | "sec_sopralluoghi" | "sec_note_sopralluoghi" | "sec_esecuzione" | "sec_note_esecuzione" | "sec_legge" | "sec_note_legge" | "sec_cila" | "sec_note_cila" | "sec_psc" | "sec_note_psc" | "sec_prog" | "sec_note_prog" | "sec_dico" | "sec_note_dico" | "sec_cong_edili" | "sec_note_cong_edili" | "sec_cong_imp" | "sec_note_cong_imp" | "sec_ape" | "sec_note_ape" | "sec_scadenza" | "sec_note_scadenza" | "sec_registrazione" | "sec_note_registrazione" | "pre_note_dati_caldaia" | "pre_note_salto_classi" | "pre_note_isolamento_old" | "pre_comune" | "pre_note_sopralluoghi" | "pre_note_computo" | "pre_note_scadenza_computo" | "pre_note_termo" | "pre_note_scadenza_termo" | "pre_note_revisione" | "pre_computo_stato" | "pre_modello_termo_stato" | "sec_computo_stato" | "sec_cong_imp_stato" | "sec_cong_edili_stato" | "pre_accesso_atti" | "pre_note_atti" | "pre_accesso_atti_stato" | "pre_richiesta_materiali" | "pre_note_ric_mat" | "pre_ric_mat_completata" | "pre_sopra_ogni_unita" | "pre_comp_impianti" | "pre_scadenza_lavorazioni_stato" | "pre_comp_impianti_stato" | "sec_importo_lavori" | "sec_imp_lav_riferimenti" | "pre_app_sec_step" | "pre_note_sec_step" | "pre_data_sec_step" | "pre_note_ces" | "pre_ces" | "pre_data_app_comune_atti" | "pre_data_rich_atti" | "pre_note_data_app_com_atti" | "pre_op_ins_comune" | "pre_op_ins_rich_mat" | "pre_op_ins_plan" | "pre_op_ins_dati_cald" | "pre_op_ins_sopral" | "pre_op_ins_scad_lav" | "pre_op_ins_comp_impianti" | "pre_op_ins_mod_term" | "pre_op_ins_rev" | "pre_op_ins_comp" | "pre_op_ins_atti" | "pre_op_ins_conf_urb" | "pre_op_ins_salto_classi" | "pre_op_ins_sec_step" | "pre_op_ins_ces" | "pre_op_ins_tipo_impianto" | "pre_comp_impianti_stato_dettagliato" | "pre_revisione_comp_edi" | "pre_computo_stato_dettagliato" | "pre_mod_termo_stato_dettagliato" | "pre_revisione_comp_imp" | "pre_comp_imp_stato_dettagliato" | "pre_computo_imp" | "pre_note_comp_imp" | "pre_invio_dati_cl" | "pre_invio_dati_cl_stato" | "pre_data_invio_dati_cl" | "pre_note_invio_dati_cl" | "pre_op_invio_dati_cl" | "pre_stato_sb" | "sec_stato_sb" | "pre_op_ins_stato_sb" | "sec_op_ins_stato_sb" | "sec_professionista" | "sec_note_professionista" | "sec_ditta_impianti" | "sec_note_ditta_impianti" | "sec_contratto" | "sec_note_contratto" | "sec_prog_imp" | "sec_note_prog_imp" | "sec_prog_inv" | "sec_note_prog_inv" | "sec_sopralluoghi_new" | "sec_note_sopralluoghi_new" | "sec_op_ins_prog_imp" | "sec_op_ins_prog_inv" | "sec_op_ins_ditta_inv" | "sec_op_ins_ditta_imp" | "sec_op_ins_profess" | "sec_op_ins_contr" | "sec_op_ins_soprall" | "sec_op_ins_legg_10" | "sec_op_ins_cila" | "sec_op_ins_psc" | "sec_op_ins_ape" | "sec_op_ins_scadenza" | "sec_op_ins_registrazione" | "sec_avanzamento_lav" | "sec_note_avanzamento_lav" | "sec_op_ins_avanz_lav" | "sec_prog_psc" | "sec_prog_legge_10" | "sec_prog_prog_imp" | "sec_prog_sopralluoghi" | "sec_stato_scadenza" | "sec_stato_cila" | "sec_prog_cila" | "sec_prog_prog_inv" | "sec_stato_avanz_lav" | "sec_prog_fv" | "sec_prog_prog_fv" | "sec_note_prog_fv" | "sec_op_ins_prog_fv" | "sec_op_ins_prat_allac" | "sec_prat_allac" | "sec_data_inizio_lavori" | "sec_note_data_inizio_lavori" | "sec_op_ins_data_inizio_lavori" | "sec_op_ins_altre_prat_ed" | "sec_stato_altre_prat_ed" | "sec_prog_altre_prat_ed" | "sec_note_altre_prat_ed" | "sec_altre_prat_ed" | "sec_op_ins_cila_invariante" | "sec_stato_cila_invariante" | "sec_prog_cila_invariante" | "sec_note_cila_invariante" | "sec_cila_invariante" | "sec_data_fine_lavori" | "sec_note_data_fine_lavori" | "sec_op_ins_data_fine_lavori" | "sec_op_ins_lex10ab" | "sec_stato_lex10ab" | "sec_prog_lex10ab" | "sec_note_lex10ab" | "sec_lex10ab" | "sec_osp_pres_pratica" | "sec_osp_prog_pres_pratica" | "sec_osp_note_pres_pratica" | "sec_osp_op_ins_pres_pratica" | "sec_osp_inizio_occ" | "sec_osp_note_inizio_occ" | "sec_osp_op_ins_inizio_occ";
export type commesse_sbCreationAttributes = Optional<commesse_sbAttributes, commesse_sbOptionalAttributes>;

export class commesse_sb extends Model<commesse_sbAttributes, commesse_sbCreationAttributes> implements commesse_sbAttributes {
  id!: number;
  id_commessa?: number;
  pre_planimetrie?: 'si' | 'no';
  pre_dati_caldaia?: 'si' | 'no';
  pre_sopralluoghi!: string;
  pre_note_planimetrie?: string;
  pre_computo?: number;
  old_pre_scadenza_computo!: string;
  pre_modello_termo?: number;
  pre_scadenza_lavorazioni!: string;
  pre_revisione?: number;
  pre_salto_classi?: 'si' | 'no';
  pre_conform?: 'si' | 'no' | 'no_incarico' | 'daintegrare' | 'ext' | 'si_con_sanatoria';
  pre_isolamento_old?: 'si' | 'no';
  pre_note_conform?: string;
  sec_ditta_involucro?: string;
  sec_note_ditta_involucro?: string;
  sec_computo?: number;
  sec_note_computo?: string;
  sec_conform?: 'si' | 'no' | 'non fare';
  sec_note_conform?: string;
  sec_assemblea?: string;
  sec_note_assemblea?: string;
  sec_sopralluoghi?: string;
  sec_note_sopralluoghi?: string;
  sec_esecuzione?: string;
  sec_note_esecuzione?: string;
  sec_legge?: 'si' | 'no';
  sec_note_legge?: string;
  sec_cila?: string;
  sec_note_cila?: string;
  sec_psc?: 'si' | 'no';
  sec_note_psc?: string;
  sec_prog?: 'si' | 'no' | 'non fare';
  sec_note_prog?: string;
  sec_dico?: string;
  sec_note_dico?: string;
  sec_cong_edili?: number;
  sec_note_cong_edili?: string;
  sec_cong_imp?: number;
  sec_note_cong_imp?: string;
  sec_ape?: string;
  sec_note_ape?: string;
  sec_scadenza?: string;
  sec_note_scadenza?: string;
  sec_registrazione?: string;
  sec_note_registrazione?: string;
  pre_note_dati_caldaia?: string;
  pre_note_salto_classi?: string;
  pre_note_isolamento_old?: string;
  pre_comune?: string;
  pre_note_sopralluoghi?: string;
  pre_note_computo?: string;
  pre_note_scadenza_computo?: string;
  pre_note_termo?: string;
  pre_note_scadenza_termo?: string;
  pre_note_revisione?: string;
  pre_computo_stato!: '0' | '1' | '2';
  pre_modello_termo_stato!: '0' | '1' | '2';
  sec_computo_stato!: string;
  sec_cong_imp_stato!: string;
  sec_cong_edili_stato!: string;
  pre_accesso_atti!: number;
  pre_note_atti?: string;
  pre_accesso_atti_stato!: string;
  pre_richiesta_materiali!: number;
  pre_note_ric_mat?: string;
  pre_ric_mat_completata?: string;
  pre_sopra_ogni_unita!: string;
  pre_comp_impianti!: string;
  pre_scadenza_lavorazioni_stato!: string;
  pre_comp_impianti_stato!: string;
  sec_importo_lavori?: number;
  sec_imp_lav_riferimenti?: string;
  pre_app_sec_step?: 'si' | 'no';
  pre_note_sec_step?: string;
  pre_data_sec_step?: string;
  pre_note_ces?: string;
  pre_ces?: 'si' | 'no' | 'standby';
  pre_data_app_comune_atti?: string;
  pre_data_rich_atti?: string;
  pre_note_data_app_com_atti?: string;
  pre_op_ins_comune?: number;
  pre_op_ins_rich_mat?: number;
  pre_op_ins_plan?: number;
  pre_op_ins_dati_cald?: number;
  pre_op_ins_sopral?: number;
  pre_op_ins_scad_lav?: number;
  pre_op_ins_comp_impianti?: number;
  pre_op_ins_mod_term?: number;
  pre_op_ins_rev?: number;
  pre_op_ins_comp?: number;
  pre_op_ins_atti?: number;
  pre_op_ins_conf_urb?: number;
  pre_op_ins_salto_classi?: number;
  pre_op_ins_sec_step?: number;
  pre_op_ins_ces?: number;
  pre_op_ins_tipo_impianto?: number;
  pre_comp_impianti_stato_dettagliato?: 'da_fare' | 'da_revisionare' | 'revisionato' | 'non_fare';
  pre_revisione_comp_edi?: number;
  pre_computo_stato_dettagliato?: 'da_revisionare' | 'revisionato' | 'problemi';
  pre_mod_termo_stato_dettagliato?: 'revisionato' | 'da_revisionare' | 'problemi';
  pre_revisione_comp_imp?: number;
  pre_comp_imp_stato_dettagliato?: 'revisionato' | 'da_revisionare' | 'problemi';
  pre_computo_imp?: number;
  pre_note_comp_imp?: string;
  pre_invio_dati_cl?: number;
  pre_invio_dati_cl_stato?: string;
  pre_data_invio_dati_cl?: string;
  pre_note_invio_dati_cl?: string;
  pre_op_invio_dati_cl?: number;
  pre_stato_sb!: 'in_corso' | 'archiviata (generico)' | 'archiviata - lavoro prosegue' | 'archiviata - esito negativo' | 'stand-by';
  sec_stato_sb!: 'in_corso' | 'archiviata' | 'stand-by';
  pre_op_ins_stato_sb?: number;
  sec_op_ins_stato_sb?: number;
  sec_professionista?: string;
  sec_note_professionista?: string;
  sec_ditta_impianti?: string;
  sec_note_ditta_impianti?: string;
  sec_contratto?: 'si' | 'no';
  sec_note_contratto?: string;
  sec_prog_imp?: 'in corso' | 'fatto' | 'da fare' | 'non fare';
  sec_note_prog_imp?: string;
  sec_prog_inv?: 'in corso' | 'fatto' | 'non fare';
  sec_note_prog_inv?: string;
  sec_sopralluoghi_new?: 'in corso' | 'fatto' | 'non fare';
  sec_note_sopralluoghi_new?: string;
  sec_op_ins_prog_imp?: number;
  sec_op_ins_prog_inv?: number;
  sec_op_ins_ditta_inv?: number;
  sec_op_ins_ditta_imp?: number;
  sec_op_ins_profess?: number;
  sec_op_ins_contr?: number;
  sec_op_ins_soprall?: number;
  sec_op_ins_legg_10?: number;
  sec_op_ins_cila?: number;
  sec_op_ins_psc?: number;
  sec_op_ins_ape?: number;
  sec_op_ins_scadenza?: number;
  sec_op_ins_registrazione?: number;
  sec_avanzamento_lav?: string;
  sec_note_avanzamento_lav?: string;
  sec_op_ins_avanz_lav?: number;
  sec_prog_psc?: string;
  sec_prog_legge_10?: string;
  sec_prog_prog_imp?: string;
  sec_prog_sopralluoghi?: string;
  sec_stato_scadenza?: 'si' | 'no';
  sec_stato_cila?: number;
  sec_prog_cila?: string;
  sec_prog_prog_inv?: string;
  sec_stato_avanz_lav?: number;
  sec_prog_fv?: 'in corso' | 'fatto' | 'non fare';
  sec_prog_prog_fv?: string;
  sec_note_prog_fv?: string;
  sec_op_ins_prog_fv?: number;
  sec_op_ins_prat_allac?: number;
  sec_prat_allac?: 'non_fare' | 'fatto' | 'in_corso';
  sec_data_inizio_lavori?: string;
  sec_note_data_inizio_lavori?: string;
  sec_op_ins_data_inizio_lavori?: number;
  sec_op_ins_altre_prat_ed?: number;
  sec_stato_altre_prat_ed?: number;
  sec_prog_altre_prat_ed?: string;
  sec_note_altre_prat_ed?: string;
  sec_altre_prat_ed?: string;
  sec_op_ins_cila_invariante?: number;
  sec_stato_cila_invariante?: number;
  sec_prog_cila_invariante?: string;
  sec_note_cila_invariante?: string;
  sec_cila_invariante?: string;
  sec_data_fine_lavori?: string;
  sec_note_data_fine_lavori?: string;
  sec_op_ins_data_fine_lavori?: number;
  sec_op_ins_lex10ab?: number;
  sec_stato_lex10ab?: number;
  sec_prog_lex10ab?: string;
  sec_note_lex10ab?: string;
  sec_lex10ab?: string;
  sec_osp_pres_pratica?: 'Completato' | 'Non fare';
  sec_osp_prog_pres_pratica?: string;
  sec_osp_note_pres_pratica?: string;
  sec_osp_op_ins_pres_pratica?: number;
  sec_osp_inizio_occ?: string;
  sec_osp_note_inizio_occ?: string;
  sec_osp_op_ins_inizio_occ?: number;

  // commesse_sb belongsTo commesse via id_commessa
  id_commessa_commesse!: commesse;
  getId_commessa_commesse!: Sequelize.BelongsToGetAssociationMixin<commesse>;
  setId_commessa_commesse!: Sequelize.BelongsToSetAssociationMixin<commesse, commesseId>;
  createId_commessa_commesse!: Sequelize.BelongsToCreateAssociationMixin<commesse>;

  static initModel(sequelize: Sequelize.Sequelize): typeof commesse_sb {
    return commesse_sb.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_commessa: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      references: {
        model: 'commesse',
        key: 'id_commessa'
      }
    },
    pre_planimetrie: {
      type: DataTypes.ENUM('si','no'),
      allowNull: true
    },
    pre_dati_caldaia: {
      type: DataTypes.ENUM('si','no'),
      allowNull: true
    },
    pre_sopralluoghi: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: "0000-00-00"
    },
    pre_note_planimetrie: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    pre_computo: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    old_pre_scadenza_computo: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: "0000-00-00"
    },
    pre_modello_termo: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    pre_scadenza_lavorazioni: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: "0000-00-00"
    },
    pre_revisione: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    pre_salto_classi: {
      type: DataTypes.ENUM('si','no'),
      allowNull: true
    },
    pre_conform: {
      type: DataTypes.ENUM('si','no','no_incarico','daintegrare','ext','si_con_sanatoria'),
      allowNull: true
    },
    pre_isolamento_old: {
      type: DataTypes.ENUM('si','no'),
      allowNull: true
    },
    pre_note_conform: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    sec_ditta_involucro: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    sec_note_ditta_involucro: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    sec_computo: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    sec_note_computo: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    sec_conform: {
      type: DataTypes.ENUM('si','no','non fare'),
      allowNull: true
    },
    sec_note_conform: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    sec_assemblea: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    sec_note_assemblea: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    sec_sopralluoghi: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    sec_note_sopralluoghi: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    sec_esecuzione: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    sec_note_esecuzione: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    sec_legge: {
      type: DataTypes.ENUM('si','no'),
      allowNull: true
    },
    sec_note_legge: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    sec_cila: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    sec_note_cila: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    sec_psc: {
      type: DataTypes.ENUM('si','no'),
      allowNull: true
    },
    sec_note_psc: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    sec_prog: {
      type: DataTypes.ENUM('si','no','non fare'),
      allowNull: true
    },
    sec_note_prog: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    sec_dico: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    sec_note_dico: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    sec_cong_edili: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    sec_note_cong_edili: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    sec_cong_imp: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    sec_note_cong_imp: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    sec_ape: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    sec_note_ape: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    sec_scadenza: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    sec_note_scadenza: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    sec_registrazione: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    sec_note_registrazione: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    pre_note_dati_caldaia: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    pre_note_salto_classi: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    pre_note_isolamento_old: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    pre_comune: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    pre_note_sopralluoghi: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    pre_note_computo: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    pre_note_scadenza_computo: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    pre_note_termo: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    pre_note_scadenza_termo: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    pre_note_revisione: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    pre_computo_stato: {
      type: DataTypes.ENUM('0','1','2'),
      allowNull: false,
      defaultValue: "0"
    },
    pre_modello_termo_stato: {
      type: DataTypes.ENUM('0','1','2'),
      allowNull: false,
      defaultValue: "0"
    },
    sec_computo_stato: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: ""
    },
    sec_cong_imp_stato: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: ""
    },
    sec_cong_edili_stato: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: ""
    },
    pre_accesso_atti: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    pre_note_atti: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    pre_accesso_atti_stato: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: ""
    },
    pre_richiesta_materiali: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    pre_note_ric_mat: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    pre_ric_mat_completata: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    pre_sopra_ogni_unita: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: ""
    },
    pre_comp_impianti: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: ""
    },
    pre_scadenza_lavorazioni_stato: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: ""
    },
    pre_comp_impianti_stato: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: ""
    },
    sec_importo_lavori: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    sec_imp_lav_riferimenti: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    pre_app_sec_step: {
      type: DataTypes.ENUM('si','no'),
      allowNull: true
    },
    pre_note_sec_step: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    pre_data_sec_step: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    pre_note_ces: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    pre_ces: {
      type: DataTypes.ENUM('si','no','standby'),
      allowNull: true
    },
    pre_data_app_comune_atti: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    pre_data_rich_atti: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    pre_note_data_app_com_atti: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    pre_op_ins_comune: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    pre_op_ins_rich_mat: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    pre_op_ins_plan: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    pre_op_ins_dati_cald: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    pre_op_ins_sopral: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    pre_op_ins_scad_lav: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    pre_op_ins_comp_impianti: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    pre_op_ins_mod_term: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    pre_op_ins_rev: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    pre_op_ins_comp: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    pre_op_ins_atti: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    pre_op_ins_conf_urb: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    pre_op_ins_salto_classi: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    pre_op_ins_sec_step: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    pre_op_ins_ces: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    pre_op_ins_tipo_impianto: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    pre_comp_impianti_stato_dettagliato: {
      type: DataTypes.ENUM('da_fare','da_revisionare','revisionato','non_fare'),
      allowNull: true
    },
    pre_revisione_comp_edi: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    pre_computo_stato_dettagliato: {
      type: DataTypes.ENUM('da_revisionare','revisionato','problemi'),
      allowNull: true
    },
    pre_mod_termo_stato_dettagliato: {
      type: DataTypes.ENUM('revisionato','da_revisionare','problemi'),
      allowNull: true
    },
    pre_revisione_comp_imp: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    pre_comp_imp_stato_dettagliato: {
      type: DataTypes.ENUM('revisionato','da_revisionare','problemi'),
      allowNull: true
    },
    pre_computo_imp: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    pre_note_comp_imp: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    pre_invio_dati_cl: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    pre_invio_dati_cl_stato: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    pre_data_invio_dati_cl: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    pre_note_invio_dati_cl: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    pre_op_invio_dati_cl: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    pre_stato_sb: {
      type: DataTypes.ENUM('in_corso','archiviata (generico)','archiviata - lavoro prosegue','archiviata - esito negativo','stand-by'),
      allowNull: false,
      defaultValue: "in_corso"
    },
    sec_stato_sb: {
      type: DataTypes.ENUM('in_corso','archiviata','stand-by'),
      allowNull: false,
      defaultValue: "in_corso"
    },
    pre_op_ins_stato_sb: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    sec_op_ins_stato_sb: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    sec_professionista: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    sec_note_professionista: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    sec_ditta_impianti: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    sec_note_ditta_impianti: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    sec_contratto: {
      type: DataTypes.ENUM('si','no'),
      allowNull: true
    },
    sec_note_contratto: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    sec_prog_imp: {
      type: DataTypes.ENUM('in corso','fatto','da fare','non fare'),
      allowNull: true
    },
    sec_note_prog_imp: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    sec_prog_inv: {
      type: DataTypes.ENUM('in corso','fatto','non fare'),
      allowNull: true
    },
    sec_note_prog_inv: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    sec_sopralluoghi_new: {
      type: DataTypes.ENUM('in corso','fatto','non fare'),
      allowNull: true
    },
    sec_note_sopralluoghi_new: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    sec_op_ins_prog_imp: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    sec_op_ins_prog_inv: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    sec_op_ins_ditta_inv: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    sec_op_ins_ditta_imp: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    sec_op_ins_profess: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    sec_op_ins_contr: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    sec_op_ins_soprall: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    sec_op_ins_legg_10: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    sec_op_ins_cila: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    sec_op_ins_psc: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    sec_op_ins_ape: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    sec_op_ins_scadenza: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    sec_op_ins_registrazione: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    sec_avanzamento_lav: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    sec_note_avanzamento_lav: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    sec_op_ins_avanz_lav: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    sec_prog_psc: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    sec_prog_legge_10: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    sec_prog_prog_imp: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    sec_prog_sopralluoghi: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    sec_stato_scadenza: {
      type: DataTypes.ENUM('si','no'),
      allowNull: true
    },
    sec_stato_cila: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    sec_prog_cila: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    sec_prog_prog_inv: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    sec_stato_avanz_lav: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    sec_prog_fv: {
      type: DataTypes.ENUM('in corso','fatto','non fare'),
      allowNull: true
    },
    sec_prog_prog_fv: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    sec_note_prog_fv: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    sec_op_ins_prog_fv: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    sec_op_ins_prat_allac: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    sec_prat_allac: {
      type: DataTypes.ENUM('non_fare','fatto','in_corso'),
      allowNull: true
    },
    sec_data_inizio_lavori: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    sec_note_data_inizio_lavori: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    sec_op_ins_data_inizio_lavori: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    sec_op_ins_altre_prat_ed: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    sec_stato_altre_prat_ed: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    sec_prog_altre_prat_ed: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    sec_note_altre_prat_ed: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    sec_altre_prat_ed: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    sec_op_ins_cila_invariante: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    sec_stato_cila_invariante: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    sec_prog_cila_invariante: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    sec_note_cila_invariante: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    sec_cila_invariante: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    sec_data_fine_lavori: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    sec_note_data_fine_lavori: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    sec_op_ins_data_fine_lavori: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    sec_op_ins_lex10ab: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    sec_stato_lex10ab: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    sec_prog_lex10ab: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    sec_note_lex10ab: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    sec_lex10ab: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    sec_osp_pres_pratica: {
      type: DataTypes.ENUM('Completato','Non fare'),
      allowNull: true
    },
    sec_osp_prog_pres_pratica: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    sec_osp_note_pres_pratica: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    sec_osp_op_ins_pres_pratica: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    sec_osp_inizio_occ: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    sec_osp_note_inizio_occ: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    sec_osp_op_ins_inizio_occ: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'commesse_sb',
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
        name: "Index_2",
        using: "BTREE",
        fields: [
          { name: "id_commessa" },
        ]
      },
    ]
  });
  }
}
