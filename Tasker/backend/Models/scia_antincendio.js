const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('scia_antincendio', {
    id_commessa: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    attivita_principale: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    note_attivita_princ: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    op_ins_attivita_princ: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    materiale: {
      type: DataTypes.ENUM('Richiesto','Ok'),
      allowNull: true
    },
    note_materiale: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    op_ins_materiale: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    moduli_bol_cl_val_prog: {
      type: DataTypes.ENUM('Inviati','Ok'),
      allowNull: true
    },
    note_moduli_bol_cl_val_prog: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    op_ins_moduli_bol_cl_val_prog: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    relazione_val_prog: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    note_relazione_val_prog: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    op_ins_relazione_val_prog: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    tavole_val_prog: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    note_tavole_val_prog: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    op_ins_tavole_val_prog: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    consegna_vvf: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    note_consegna_vvf: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    op_ins_consegna_vvf: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    stato_eventuali_integrazioni: {
      type: DataTypes.ENUM('Non serve','Ok'),
      allowNull: true
    },
    eventuali_integrazioni: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    note_eventuali_integrazioni: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    op_ins_eventuali_integrazioni: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    moduli_bol_cl_scia: {
      type: DataTypes.ENUM('Inviati','Ok'),
      allowNull: true
    },
    note_moduli_bol_cl_scia: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    op_ins_moduli_bol_cl_scia: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    accesso_atti: {
      type: DataTypes.ENUM('Ok','Non serve','Da fare','Richiesta VVF','Richiesta genio civile'),
      allowNull: true
    },
    note_accesso_atti: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    op_ins_accesso_atti: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    relazione_scia: {
      type: DataTypes.ENUM('Ok','Da integrare'),
      allowNull: true
    },
    note_relazione_scia: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    op_ins_relazione_scia: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    tavole_scia: {
      type: DataTypes.ENUM('Ok','Da integrare'),
      allowNull: true
    },
    note_tavole_scia: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    op_ins_tavole_scia: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    cert_rei: {
      type: DataTypes.ENUM('Ok','Da fare','In attesa accesso atti genio civile','In attesa strutturista'),
      allowNull: true
    },
    note_cert_rei: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    op_ins_cert_rei: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    dico_ie: {
      type: DataTypes.ENUM('Ok','Da richiedere','Non serve','Richiesto'),
      allowNull: true
    },
    note_dico_ie: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    op_ins_dico_ie: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    dico_im: {
      type: DataTypes.ENUM('Ok','Da richiedere','Non serve','Richiesto'),
      allowNull: true
    },
    note_dico_im: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    op_ins_dico_im: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    dico_prot_attiva: {
      type: DataTypes.ENUM('Ok','Da richiedere','Non serve','Richiesto'),
      allowNull: true
    },
    note_dico_prot_attiva: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    op_ins_dico_prot_attiva: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    consegna_scia: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    note_consegna_scia: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    op_ins_consegna_scia: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    stato_richiesta_integrazioni: {
      type: DataTypes.ENUM('No','Si'),
      allowNull: true
    },
    richiesta_integrazioni: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    note_richiesta_integrazioni: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    op_ins_richiesta_integrazioni: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    stato_valutazione_prog: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1
    },
    stato_scia: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1
    },
    prox_rinnovo: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    note_prox_rinnovo: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    op_ins_prox_rinnovo: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'scia_antincendio',
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
    ]
  });
};
