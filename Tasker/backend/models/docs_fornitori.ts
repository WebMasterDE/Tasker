import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface docs_fornitoriAttributes {
  id_ana_fornitore: number;
  az_durc_date?: string;
  az_durc_stato?: 'si' | 'richiesto' | 'non_richiesto' | 'vuoto';
  az_vis_cam_date?: string;
  az_vis_cam_stato?: 'si' | 'richiesto' | 'non_richiesto' | 'vuoto';
  az_bil_ult_3_anni_stato?: 'si' | 'richiesto' | 'non_richiesto' | 'vuoto';
  az_ab_pers_spec_stato?: 'si' | 'richiesto' | 'non_richiesto' | 'vuoto';
  az_cert_stato?: 'si' | 'richiesto' | 'non_richiesto' | 'vuoto';
  az_ci_cf_leg_rapp_stato?: 'si' | 'richiesto' | 'non_richiesto' | 'vuoto';
  az_rc_v_terzi_date?: string;
  az_rc_v_terzi_stato?: 'si' | 'richiesto' | 'non_richiesto' | 'vuoto';
  lp_cv_stato?: 'si' | 'richiesto' | 'non_richiesto' | 'vuoto';
  lp_att_form_spec_stato?: 'si' | 'richiesto' | 'non_richiesto' | 'vuoto';
  lp_autod_iscr_ord_stato?: 'si' | 'richiesto' | 'non_richiesto' | 'vuoto';
  lp_reg_contr_date?: string;
  lp_reg_contr_stato?: 'si' | 'richiesto' | 'non_richiesto' | 'vuoto';
  lp_rc_pro_date?: string;
  lp_rc_pro_stato?: 'si' | 'richiesto' | 'non_richiesto' | 'vuoto';
  lp_rc_ass_date?: string;
  lp_rc_ass_stato?: 'si' | 'richiesto' | 'non_richiesto' | 'vuoto';
  az_durc_note?: string;
  az_vis_cam_note?: string;
  az_bil_ult_3_anni_note?: string;
  az_ab_pers_spec_note?: string;
  az_cert_note?: string;
  az_ci_cf_leg_rapp_note?: string;
  az_rc_v_terzi_note?: string;
  lp_cv_note?: string;
  lp_att_form_spec_note?: string;
  lp_autod_iscr_ord_note?: string;
  lp_reg_contr_note?: string;
  lp_rc_pro_note?: string;
  lp_rc_ass_note?: string;
  lp_disc_incar_date?: string;
  lp_disc_incar_stato?: 'si' | 'richiesto' | 'non_richiesto' | 'vuoto';
  lp_disc_incar_note?: string;
}

export type docs_fornitoriPk = "id_ana_fornitore";
export type docs_fornitoriId = docs_fornitori[docs_fornitoriPk];
export type docs_fornitoriOptionalAttributes = "az_durc_date" | "az_durc_stato" | "az_vis_cam_date" | "az_vis_cam_stato" | "az_bil_ult_3_anni_stato" | "az_ab_pers_spec_stato" | "az_cert_stato" | "az_ci_cf_leg_rapp_stato" | "az_rc_v_terzi_date" | "az_rc_v_terzi_stato" | "lp_cv_stato" | "lp_att_form_spec_stato" | "lp_autod_iscr_ord_stato" | "lp_reg_contr_date" | "lp_reg_contr_stato" | "lp_rc_pro_date" | "lp_rc_pro_stato" | "lp_rc_ass_date" | "lp_rc_ass_stato" | "az_durc_note" | "az_vis_cam_note" | "az_bil_ult_3_anni_note" | "az_ab_pers_spec_note" | "az_cert_note" | "az_ci_cf_leg_rapp_note" | "az_rc_v_terzi_note" | "lp_cv_note" | "lp_att_form_spec_note" | "lp_autod_iscr_ord_note" | "lp_reg_contr_note" | "lp_rc_pro_note" | "lp_rc_ass_note" | "lp_disc_incar_date" | "lp_disc_incar_stato" | "lp_disc_incar_note";
export type docs_fornitoriCreationAttributes = Optional<docs_fornitoriAttributes, docs_fornitoriOptionalAttributes>;

export class docs_fornitori extends Model<docs_fornitoriAttributes, docs_fornitoriCreationAttributes> implements docs_fornitoriAttributes {
  id_ana_fornitore!: number;
  az_durc_date?: string;
  az_durc_stato?: 'si' | 'richiesto' | 'non_richiesto' | 'vuoto';
  az_vis_cam_date?: string;
  az_vis_cam_stato?: 'si' | 'richiesto' | 'non_richiesto' | 'vuoto';
  az_bil_ult_3_anni_stato?: 'si' | 'richiesto' | 'non_richiesto' | 'vuoto';
  az_ab_pers_spec_stato?: 'si' | 'richiesto' | 'non_richiesto' | 'vuoto';
  az_cert_stato?: 'si' | 'richiesto' | 'non_richiesto' | 'vuoto';
  az_ci_cf_leg_rapp_stato?: 'si' | 'richiesto' | 'non_richiesto' | 'vuoto';
  az_rc_v_terzi_date?: string;
  az_rc_v_terzi_stato?: 'si' | 'richiesto' | 'non_richiesto' | 'vuoto';
  lp_cv_stato?: 'si' | 'richiesto' | 'non_richiesto' | 'vuoto';
  lp_att_form_spec_stato?: 'si' | 'richiesto' | 'non_richiesto' | 'vuoto';
  lp_autod_iscr_ord_stato?: 'si' | 'richiesto' | 'non_richiesto' | 'vuoto';
  lp_reg_contr_date?: string;
  lp_reg_contr_stato?: 'si' | 'richiesto' | 'non_richiesto' | 'vuoto';
  lp_rc_pro_date?: string;
  lp_rc_pro_stato?: 'si' | 'richiesto' | 'non_richiesto' | 'vuoto';
  lp_rc_ass_date?: string;
  lp_rc_ass_stato?: 'si' | 'richiesto' | 'non_richiesto' | 'vuoto';
  az_durc_note?: string;
  az_vis_cam_note?: string;
  az_bil_ult_3_anni_note?: string;
  az_ab_pers_spec_note?: string;
  az_cert_note?: string;
  az_ci_cf_leg_rapp_note?: string;
  az_rc_v_terzi_note?: string;
  lp_cv_note?: string;
  lp_att_form_spec_note?: string;
  lp_autod_iscr_ord_note?: string;
  lp_reg_contr_note?: string;
  lp_rc_pro_note?: string;
  lp_rc_ass_note?: string;
  lp_disc_incar_date?: string;
  lp_disc_incar_stato?: 'si' | 'richiesto' | 'non_richiesto' | 'vuoto';
  lp_disc_incar_note?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof docs_fornitori {
    return docs_fornitori.init({
    id_ana_fornitore: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    az_durc_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    az_durc_stato: {
      type: DataTypes.ENUM('si','richiesto','non_richiesto','vuoto'),
      allowNull: true,
      defaultValue: "vuoto"
    },
    az_vis_cam_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    az_vis_cam_stato: {
      type: DataTypes.ENUM('si','richiesto','non_richiesto','vuoto'),
      allowNull: true,
      defaultValue: "vuoto"
    },
    az_bil_ult_3_anni_stato: {
      type: DataTypes.ENUM('si','richiesto','non_richiesto','vuoto'),
      allowNull: true,
      defaultValue: "vuoto"
    },
    az_ab_pers_spec_stato: {
      type: DataTypes.ENUM('si','richiesto','non_richiesto','vuoto'),
      allowNull: true,
      defaultValue: "vuoto"
    },
    az_cert_stato: {
      type: DataTypes.ENUM('si','richiesto','non_richiesto','vuoto'),
      allowNull: true,
      defaultValue: "vuoto"
    },
    az_ci_cf_leg_rapp_stato: {
      type: DataTypes.ENUM('si','richiesto','non_richiesto','vuoto'),
      allowNull: true,
      defaultValue: "vuoto"
    },
    az_rc_v_terzi_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    az_rc_v_terzi_stato: {
      type: DataTypes.ENUM('si','richiesto','non_richiesto','vuoto'),
      allowNull: true,
      defaultValue: "vuoto"
    },
    lp_cv_stato: {
      type: DataTypes.ENUM('si','richiesto','non_richiesto','vuoto'),
      allowNull: true,
      defaultValue: "vuoto"
    },
    lp_att_form_spec_stato: {
      type: DataTypes.ENUM('si','richiesto','non_richiesto','vuoto'),
      allowNull: true,
      defaultValue: "vuoto"
    },
    lp_autod_iscr_ord_stato: {
      type: DataTypes.ENUM('si','richiesto','non_richiesto','vuoto'),
      allowNull: true,
      defaultValue: "vuoto"
    },
    lp_reg_contr_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    lp_reg_contr_stato: {
      type: DataTypes.ENUM('si','richiesto','non_richiesto','vuoto'),
      allowNull: true,
      defaultValue: "vuoto"
    },
    lp_rc_pro_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    lp_rc_pro_stato: {
      type: DataTypes.ENUM('si','richiesto','non_richiesto','vuoto'),
      allowNull: true,
      defaultValue: "vuoto"
    },
    lp_rc_ass_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    lp_rc_ass_stato: {
      type: DataTypes.ENUM('si','richiesto','non_richiesto','vuoto'),
      allowNull: true,
      defaultValue: "vuoto"
    },
    az_durc_note: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    az_vis_cam_note: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    az_bil_ult_3_anni_note: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    az_ab_pers_spec_note: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    az_cert_note: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    az_ci_cf_leg_rapp_note: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    az_rc_v_terzi_note: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    lp_cv_note: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    lp_att_form_spec_note: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    lp_autod_iscr_ord_note: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    lp_reg_contr_note: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    lp_rc_pro_note: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    lp_rc_ass_note: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    lp_disc_incar_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    lp_disc_incar_stato: {
      type: DataTypes.ENUM('si','richiesto','non_richiesto','vuoto'),
      allowNull: true
    },
    lp_disc_incar_note: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'docs_fornitori',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_ana_fornitore" },
        ]
      },
    ]
  });
  }
}
