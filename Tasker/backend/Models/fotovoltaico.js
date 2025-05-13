const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('fotovoltaico', {
    id_fotovoltaico: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    id_commessa: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    tipo_incarico: {
      type: DataTypes.ENUM('ordinario','ord_agg_accumulo','schemi_ele','sempl','siad_sost_inverter','siad_sost_contatore','siad_sost_pann','ver_spi','cambio_iban','cambio_tito'),
      allowNull: true
    },
    cod_rintracciabilita_prat: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    usr_terna: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    psw_terna: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    usr_gse: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    psw_gse: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    dc_data: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    dc_enum: {
      type: DataTypes.ENUM('da_fare','in_attesa'),
      allowNull: true
    },
    ap_data: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    ap_enum: {
      type: DataTypes.ENUM('da_fare','in_attesa'),
      allowNull: true
    },
    terna_r_v_upnr_data: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    terna_r_v_upnr_enum: {
      type: DataTypes.ENUM('da_fare','upnr','in_attesa'),
      allowNull: true
    },
    reg_ese_data: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    reg_ese_enum: {
      type: DataTypes.ENUM('da_fare','in_attesa'),
      allowNull: true
    },
    data_acc_re_data: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    data_acc_re_enum: {
      type: DataTypes.ENUM('da_fare','in_attesa'),
      allowNull: true
    },
    inizio_fine_iter_aut_data: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    inizio_fine_iter_aut_enum: {
      type: DataTypes.ENUM('da_fare_ii','da_fare_fi','in_attesa_ii','in_attesa_fi'),
      allowNull: true
    },
    inizio_fine_lav_data: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    inizio_fine_lav_enum: {
      type: DataTypes.ENUM('da_fare_il','da_fare_fl','in_attesa_il','in_attesa_fl'),
      allowNull: true
    },
    contratto_gse_data: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    contratto_gse_enum: {
      type: DataTypes.ENUM('da_fare','in_attesa'),
      allowNull: true
    },
    enea_data: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    enea_enum: {
      type: DataTypes.ENUM('da_fare?','da_fare!','non_serve','in_attesa?','in_attesa!'),
      allowNull: true
    },
    data_attivazione: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    invio_doc_cl_data: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    invio_doc_cl_enum: {
      type: DataTypes.ENUM('Da fare','In attesa'),
      allowNull: true
    },
    not_doc_mancante: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    tipologia: {
      type: DataTypes.ENUM('comunita_energetica','110_non_ssp','conto_energia'),
      allowNull: true
    },
    op_ins_tipo_incarico: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    op_ins_cod_rintracciabilita_prat: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    op_ins_credenziali_terna: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    op_ins_credenziali_gse: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    op_ins_dc: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    op_ins_ap: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    op_ins_terna_r_v_upnr: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    op_ins_reg_ese: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    op_ins_data_acc_re: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    op_ins_inizio_fine_iter_aut: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    op_ins_inizio_fine_lav: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    op_ins_contratto_gse: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    op_ins_enea: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    op_ins_data_attivazione: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    op_ins_invio_doc_cl_data: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    op_ins_not_doc_mancante: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    op_ins_tipologia: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    stato_attivita: {
      type: DataTypes.ENUM('lavoro_completato','in_lavorazione'),
      allowNull: false,
      defaultValue: "in_lavorazione"
    },
    note_usr_terna: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    note_psw_terna: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    note_usr_gse: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    note_psw_gse: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    note_cod_rintracciabilita_prat: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    usr_e_distribuzione: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    psw_e_distribuzione: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    op_ins_credenziali_e_distribuzione: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    id_installatore: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    op_ins_installatore: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    note_installatore: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    potenza: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    energia_anno: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    accumulo: {
      type: DataTypes.ENUM('presente','assente'),
      allowNull: true
    },
    comune: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    provincia: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    cap: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    via: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    numero_civico: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    op_ins_potenza: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    op_ins_indirizzo: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'fotovoltaico',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_fotovoltaico" },
        ]
      },
      {
        name: "id_commessa_FK",
        using: "BTREE",
        fields: [
          { name: "id_commessa" },
        ]
      },
    ]
  });
};
