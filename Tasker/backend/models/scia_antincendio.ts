import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface scia_antincendioAttributes {
  id_commessa: number;
  attivita_principale?: string;
  note_attivita_princ?: string;
  op_ins_attivita_princ?: string;
  materiale?: 'Richiesto' | 'Ok';
  note_materiale?: string;
  op_ins_materiale?: number;
  moduli_bol_cl_val_prog?: 'Inviati' | 'Ok';
  note_moduli_bol_cl_val_prog?: string;
  op_ins_moduli_bol_cl_val_prog?: number;
  relazione_val_prog?: number;
  note_relazione_val_prog?: string;
  op_ins_relazione_val_prog?: number;
  tavole_val_prog?: number;
  note_tavole_val_prog?: string;
  op_ins_tavole_val_prog?: number;
  consegna_vvf?: string;
  note_consegna_vvf?: string;
  op_ins_consegna_vvf?: number;
  stato_eventuali_integrazioni?: 'Non serve' | 'Ok';
  eventuali_integrazioni?: string;
  note_eventuali_integrazioni?: string;
  op_ins_eventuali_integrazioni?: number;
  moduli_bol_cl_scia?: 'Inviati' | 'Ok';
  note_moduli_bol_cl_scia?: string;
  op_ins_moduli_bol_cl_scia?: number;
  accesso_atti?: 'Ok' | 'Non serve' | 'Da fare' | 'Richiesta VVF' | 'Richiesta genio civile';
  note_accesso_atti?: string;
  op_ins_accesso_atti?: number;
  relazione_scia?: 'Ok' | 'Da integrare';
  note_relazione_scia?: string;
  op_ins_relazione_scia?: number;
  tavole_scia?: 'Ok' | 'Da integrare';
  note_tavole_scia?: string;
  op_ins_tavole_scia?: number;
  cert_rei?: 'Ok' | 'Da fare' | 'In attesa accesso atti genio civile' | 'In attesa strutturista';
  note_cert_rei?: string;
  op_ins_cert_rei?: number;
  dico_ie?: 'Ok' | 'Da richiedere' | 'Non serve' | 'Richiesto';
  note_dico_ie?: string;
  op_ins_dico_ie?: number;
  dico_im?: 'Ok' | 'Da richiedere' | 'Non serve' | 'Richiesto';
  note_dico_im?: string;
  op_ins_dico_im?: number;
  dico_prot_attiva?: 'Ok' | 'Da richiedere' | 'Non serve' | 'Richiesto';
  note_dico_prot_attiva?: string;
  op_ins_dico_prot_attiva?: number;
  consegna_scia?: string;
  note_consegna_scia?: string;
  op_ins_consegna_scia?: number;
  stato_richiesta_integrazioni?: 'No' | 'Si';
  richiesta_integrazioni?: string;
  note_richiesta_integrazioni?: string;
  op_ins_richiesta_integrazioni?: number;
  stato_valutazione_prog: number;
  stato_scia: number;
  prox_rinnovo?: string;
  note_prox_rinnovo?: string;
  op_ins_prox_rinnovo?: number;
}

export type scia_antincendioPk = "id_commessa";
export type scia_antincendioId = scia_antincendio[scia_antincendioPk];
export type scia_antincendioOptionalAttributes = "id_commessa" | "attivita_principale" | "note_attivita_princ" | "op_ins_attivita_princ" | "materiale" | "note_materiale" | "op_ins_materiale" | "moduli_bol_cl_val_prog" | "note_moduli_bol_cl_val_prog" | "op_ins_moduli_bol_cl_val_prog" | "relazione_val_prog" | "note_relazione_val_prog" | "op_ins_relazione_val_prog" | "tavole_val_prog" | "note_tavole_val_prog" | "op_ins_tavole_val_prog" | "consegna_vvf" | "note_consegna_vvf" | "op_ins_consegna_vvf" | "stato_eventuali_integrazioni" | "eventuali_integrazioni" | "note_eventuali_integrazioni" | "op_ins_eventuali_integrazioni" | "moduli_bol_cl_scia" | "note_moduli_bol_cl_scia" | "op_ins_moduli_bol_cl_scia" | "accesso_atti" | "note_accesso_atti" | "op_ins_accesso_atti" | "relazione_scia" | "note_relazione_scia" | "op_ins_relazione_scia" | "tavole_scia" | "note_tavole_scia" | "op_ins_tavole_scia" | "cert_rei" | "note_cert_rei" | "op_ins_cert_rei" | "dico_ie" | "note_dico_ie" | "op_ins_dico_ie" | "dico_im" | "note_dico_im" | "op_ins_dico_im" | "dico_prot_attiva" | "note_dico_prot_attiva" | "op_ins_dico_prot_attiva" | "consegna_scia" | "note_consegna_scia" | "op_ins_consegna_scia" | "stato_richiesta_integrazioni" | "richiesta_integrazioni" | "note_richiesta_integrazioni" | "op_ins_richiesta_integrazioni" | "stato_valutazione_prog" | "stato_scia" | "prox_rinnovo" | "note_prox_rinnovo" | "op_ins_prox_rinnovo";
export type scia_antincendioCreationAttributes = Optional<scia_antincendioAttributes, scia_antincendioOptionalAttributes>;

export class scia_antincendio extends Model<scia_antincendioAttributes, scia_antincendioCreationAttributes> implements scia_antincendioAttributes {
  id_commessa!: number;
  attivita_principale?: string;
  note_attivita_princ?: string;
  op_ins_attivita_princ?: string;
  materiale?: 'Richiesto' | 'Ok';
  note_materiale?: string;
  op_ins_materiale?: number;
  moduli_bol_cl_val_prog?: 'Inviati' | 'Ok';
  note_moduli_bol_cl_val_prog?: string;
  op_ins_moduli_bol_cl_val_prog?: number;
  relazione_val_prog?: number;
  note_relazione_val_prog?: string;
  op_ins_relazione_val_prog?: number;
  tavole_val_prog?: number;
  note_tavole_val_prog?: string;
  op_ins_tavole_val_prog?: number;
  consegna_vvf?: string;
  note_consegna_vvf?: string;
  op_ins_consegna_vvf?: number;
  stato_eventuali_integrazioni?: 'Non serve' | 'Ok';
  eventuali_integrazioni?: string;
  note_eventuali_integrazioni?: string;
  op_ins_eventuali_integrazioni?: number;
  moduli_bol_cl_scia?: 'Inviati' | 'Ok';
  note_moduli_bol_cl_scia?: string;
  op_ins_moduli_bol_cl_scia?: number;
  accesso_atti?: 'Ok' | 'Non serve' | 'Da fare' | 'Richiesta VVF' | 'Richiesta genio civile';
  note_accesso_atti?: string;
  op_ins_accesso_atti?: number;
  relazione_scia?: 'Ok' | 'Da integrare';
  note_relazione_scia?: string;
  op_ins_relazione_scia?: number;
  tavole_scia?: 'Ok' | 'Da integrare';
  note_tavole_scia?: string;
  op_ins_tavole_scia?: number;
  cert_rei?: 'Ok' | 'Da fare' | 'In attesa accesso atti genio civile' | 'In attesa strutturista';
  note_cert_rei?: string;
  op_ins_cert_rei?: number;
  dico_ie?: 'Ok' | 'Da richiedere' | 'Non serve' | 'Richiesto';
  note_dico_ie?: string;
  op_ins_dico_ie?: number;
  dico_im?: 'Ok' | 'Da richiedere' | 'Non serve' | 'Richiesto';
  note_dico_im?: string;
  op_ins_dico_im?: number;
  dico_prot_attiva?: 'Ok' | 'Da richiedere' | 'Non serve' | 'Richiesto';
  note_dico_prot_attiva?: string;
  op_ins_dico_prot_attiva?: number;
  consegna_scia?: string;
  note_consegna_scia?: string;
  op_ins_consegna_scia?: number;
  stato_richiesta_integrazioni?: 'No' | 'Si';
  richiesta_integrazioni?: string;
  note_richiesta_integrazioni?: string;
  op_ins_richiesta_integrazioni?: number;
  stato_valutazione_prog!: number;
  stato_scia!: number;
  prox_rinnovo?: string;
  note_prox_rinnovo?: string;
  op_ins_prox_rinnovo?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof scia_antincendio {
    return scia_antincendio.init({
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
  }
}
