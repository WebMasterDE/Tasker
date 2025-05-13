const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('commesse_sb', {
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
};
