import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface fotovoltaicoAttributes {
  id_fotovoltaico: number;
  id_commessa: number;
  tipo_incarico?: 'ordinario' | 'ord_agg_accumulo' | 'schemi_ele' | 'sempl' | 'siad_sost_inverter' | 'siad_sost_contatore' | 'siad_sost_pann' | 'ver_spi' | 'cambio_iban' | 'cambio_tito';
  cod_rintracciabilita_prat?: string;
  usr_terna?: string;
  psw_terna?: string;
  usr_gse?: string;
  psw_gse?: string;
  dc_data?: string;
  dc_enum?: 'da_fare' | 'in_attesa';
  ap_data?: string;
  ap_enum?: 'da_fare' | 'in_attesa';
  terna_r_v_upnr_data?: string;
  terna_r_v_upnr_enum?: 'da_fare' | 'upnr' | 'in_attesa';
  reg_ese_data?: string;
  reg_ese_enum?: 'da_fare' | 'in_attesa';
  data_acc_re_data?: string;
  data_acc_re_enum?: 'da_fare' | 'in_attesa';
  inizio_fine_iter_aut_data?: string;
  inizio_fine_iter_aut_enum?: 'da_fare_ii' | 'da_fare_fi' | 'in_attesa_ii' | 'in_attesa_fi';
  inizio_fine_lav_data?: string;
  inizio_fine_lav_enum?: 'da_fare_il' | 'da_fare_fl' | 'in_attesa_il' | 'in_attesa_fl';
  contratto_gse_data?: string;
  contratto_gse_enum?: 'da_fare' | 'in_attesa';
  enea_data?: string;
  enea_enum?: 'da_fare?' | 'da_fare!' | 'non_serve' | 'in_attesa?' | 'in_attesa!';
  data_attivazione?: string;
  invio_doc_cl_data?: string;
  invio_doc_cl_enum?: 'Da fare' | 'In attesa';
  not_doc_mancante?: string;
  tipologia?: 'comunita_energetica' | '110_non_ssp' | 'conto_energia';
  op_ins_tipo_incarico?: number;
  op_ins_cod_rintracciabilita_prat?: number;
  op_ins_credenziali_terna?: number;
  op_ins_credenziali_gse?: number;
  op_ins_dc?: number;
  op_ins_ap?: number;
  op_ins_terna_r_v_upnr?: number;
  op_ins_reg_ese?: number;
  op_ins_data_acc_re?: number;
  op_ins_inizio_fine_iter_aut?: number;
  op_ins_inizio_fine_lav?: number;
  op_ins_contratto_gse?: number;
  op_ins_enea?: number;
  op_ins_data_attivazione?: number;
  op_ins_invio_doc_cl_data?: number;
  op_ins_not_doc_mancante?: number;
  op_ins_tipologia?: number;
  stato_attivita: 'lavoro_completato' | 'in_lavorazione';
  note_usr_terna?: string;
  note_psw_terna?: string;
  note_usr_gse?: string;
  note_psw_gse?: string;
  note_cod_rintracciabilita_prat?: string;
  usr_e_distribuzione?: string;
  psw_e_distribuzione?: string;
  op_ins_credenziali_e_distribuzione?: string;
  id_installatore?: number;
  op_ins_installatore?: number;
  note_installatore?: string;
  potenza?: number;
  energia_anno?: number;
  accumulo?: 'presente' | 'assente';
  comune?: string;
  provincia?: string;
  cap?: number;
  via?: string;
  numero_civico?: string;
  op_ins_potenza?: number;
  op_ins_indirizzo?: number;
}

export type fotovoltaicoPk = "id_fotovoltaico";
export type fotovoltaicoId = fotovoltaico[fotovoltaicoPk];
export type fotovoltaicoOptionalAttributes = "id_fotovoltaico" | "tipo_incarico" | "cod_rintracciabilita_prat" | "usr_terna" | "psw_terna" | "usr_gse" | "psw_gse" | "dc_data" | "dc_enum" | "ap_data" | "ap_enum" | "terna_r_v_upnr_data" | "terna_r_v_upnr_enum" | "reg_ese_data" | "reg_ese_enum" | "data_acc_re_data" | "data_acc_re_enum" | "inizio_fine_iter_aut_data" | "inizio_fine_iter_aut_enum" | "inizio_fine_lav_data" | "inizio_fine_lav_enum" | "contratto_gse_data" | "contratto_gse_enum" | "enea_data" | "enea_enum" | "data_attivazione" | "invio_doc_cl_data" | "invio_doc_cl_enum" | "not_doc_mancante" | "tipologia" | "op_ins_tipo_incarico" | "op_ins_cod_rintracciabilita_prat" | "op_ins_credenziali_terna" | "op_ins_credenziali_gse" | "op_ins_dc" | "op_ins_ap" | "op_ins_terna_r_v_upnr" | "op_ins_reg_ese" | "op_ins_data_acc_re" | "op_ins_inizio_fine_iter_aut" | "op_ins_inizio_fine_lav" | "op_ins_contratto_gse" | "op_ins_enea" | "op_ins_data_attivazione" | "op_ins_invio_doc_cl_data" | "op_ins_not_doc_mancante" | "op_ins_tipologia" | "stato_attivita" | "note_usr_terna" | "note_psw_terna" | "note_usr_gse" | "note_psw_gse" | "note_cod_rintracciabilita_prat" | "usr_e_distribuzione" | "psw_e_distribuzione" | "op_ins_credenziali_e_distribuzione" | "id_installatore" | "op_ins_installatore" | "note_installatore" | "potenza" | "energia_anno" | "accumulo" | "comune" | "provincia" | "cap" | "via" | "numero_civico" | "op_ins_potenza" | "op_ins_indirizzo";
export type fotovoltaicoCreationAttributes = Optional<fotovoltaicoAttributes, fotovoltaicoOptionalAttributes>;

export class fotovoltaico extends Model<fotovoltaicoAttributes, fotovoltaicoCreationAttributes> implements fotovoltaicoAttributes {
  id_fotovoltaico!: number;
  id_commessa!: number;
  tipo_incarico?: 'ordinario' | 'ord_agg_accumulo' | 'schemi_ele' | 'sempl' | 'siad_sost_inverter' | 'siad_sost_contatore' | 'siad_sost_pann' | 'ver_spi' | 'cambio_iban' | 'cambio_tito';
  cod_rintracciabilita_prat?: string;
  usr_terna?: string;
  psw_terna?: string;
  usr_gse?: string;
  psw_gse?: string;
  dc_data?: string;
  dc_enum?: 'da_fare' | 'in_attesa';
  ap_data?: string;
  ap_enum?: 'da_fare' | 'in_attesa';
  terna_r_v_upnr_data?: string;
  terna_r_v_upnr_enum?: 'da_fare' | 'upnr' | 'in_attesa';
  reg_ese_data?: string;
  reg_ese_enum?: 'da_fare' | 'in_attesa';
  data_acc_re_data?: string;
  data_acc_re_enum?: 'da_fare' | 'in_attesa';
  inizio_fine_iter_aut_data?: string;
  inizio_fine_iter_aut_enum?: 'da_fare_ii' | 'da_fare_fi' | 'in_attesa_ii' | 'in_attesa_fi';
  inizio_fine_lav_data?: string;
  inizio_fine_lav_enum?: 'da_fare_il' | 'da_fare_fl' | 'in_attesa_il' | 'in_attesa_fl';
  contratto_gse_data?: string;
  contratto_gse_enum?: 'da_fare' | 'in_attesa';
  enea_data?: string;
  enea_enum?: 'da_fare?' | 'da_fare!' | 'non_serve' | 'in_attesa?' | 'in_attesa!';
  data_attivazione?: string;
  invio_doc_cl_data?: string;
  invio_doc_cl_enum?: 'Da fare' | 'In attesa';
  not_doc_mancante?: string;
  tipologia?: 'comunita_energetica' | '110_non_ssp' | 'conto_energia';
  op_ins_tipo_incarico?: number;
  op_ins_cod_rintracciabilita_prat?: number;
  op_ins_credenziali_terna?: number;
  op_ins_credenziali_gse?: number;
  op_ins_dc?: number;
  op_ins_ap?: number;
  op_ins_terna_r_v_upnr?: number;
  op_ins_reg_ese?: number;
  op_ins_data_acc_re?: number;
  op_ins_inizio_fine_iter_aut?: number;
  op_ins_inizio_fine_lav?: number;
  op_ins_contratto_gse?: number;
  op_ins_enea?: number;
  op_ins_data_attivazione?: number;
  op_ins_invio_doc_cl_data?: number;
  op_ins_not_doc_mancante?: number;
  op_ins_tipologia?: number;
  stato_attivita!: 'lavoro_completato' | 'in_lavorazione';
  note_usr_terna?: string;
  note_psw_terna?: string;
  note_usr_gse?: string;
  note_psw_gse?: string;
  note_cod_rintracciabilita_prat?: string;
  usr_e_distribuzione?: string;
  psw_e_distribuzione?: string;
  op_ins_credenziali_e_distribuzione?: string;
  id_installatore?: number;
  op_ins_installatore?: number;
  note_installatore?: string;
  potenza?: number;
  energia_anno?: number;
  accumulo?: 'presente' | 'assente';
  comune?: string;
  provincia?: string;
  cap?: number;
  via?: string;
  numero_civico?: string;
  op_ins_potenza?: number;
  op_ins_indirizzo?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof fotovoltaico {
    return fotovoltaico.init({
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
  }
}
