const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('docs_fornitori', {
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
};
