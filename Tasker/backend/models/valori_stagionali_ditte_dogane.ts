import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface valori_stagionali_ditte_doganeAttributes {
  id_ditta: number;
  anno: number;
  richiesta_letture_dic_dog?: 'Da richiedere' | 'Non fare' | 'Richiesta';
  stato_data_dic_dog?: 'Da fare';
  data_dic_dog?: string;
  note_dic_dog?: string;
  stato_data_scad_ric_nuovo_reg?: 'Da fare' | 'Non fare';
  data_scad_ric_nuovo_reg?: string;
  stato_data_consegna_ric_nuovo_reg?: 'Da fare' | 'Non fare';
  data_consegna_ric_nuovo_reg?: string;
  note_ric_nuovo_reg?: string;
  stato_data_pag_dir_licenza?: 'Da fare' | 'Non fare';
  data_pag_dir_licenza?: string;
  note_pag_dir_licenza?: string;
  data_scadenza_taratura_cont?: string;
  stato_data_consegna_taratura_cont?: 'Da fare' | 'Non fare';
  data_consegna_taratura_cont?: string;
  note_taratura_cont?: string;
  data_scadenza_taratura_spi?: string;
  stato_data_consegna_taratura_spi?: 'Da fare' | 'Non fare';
  data_consegna_taratura_spi?: string;
  note_taratura_spi?: string;
  data_invio_fuel_mix?: string;
  stato_data_invio_fuel_mix?: 'Da fare' | 'Non fare';
  note_fuel_mix?: string;
  regime_commerciale?: 'Cessione Totale' | 'Cessione Parziale';
}

export type valori_stagionali_ditte_doganePk = "id_ditta" | "anno";
export type valori_stagionali_ditte_doganeId = valori_stagionali_ditte_dogane[valori_stagionali_ditte_doganePk];
export type valori_stagionali_ditte_doganeOptionalAttributes = "anno" | "richiesta_letture_dic_dog" | "stato_data_dic_dog" | "data_dic_dog" | "note_dic_dog" | "stato_data_scad_ric_nuovo_reg" | "data_scad_ric_nuovo_reg" | "stato_data_consegna_ric_nuovo_reg" | "data_consegna_ric_nuovo_reg" | "note_ric_nuovo_reg" | "stato_data_pag_dir_licenza" | "data_pag_dir_licenza" | "note_pag_dir_licenza" | "data_scadenza_taratura_cont" | "stato_data_consegna_taratura_cont" | "data_consegna_taratura_cont" | "note_taratura_cont" | "data_scadenza_taratura_spi" | "stato_data_consegna_taratura_spi" | "data_consegna_taratura_spi" | "note_taratura_spi" | "data_invio_fuel_mix" | "stato_data_invio_fuel_mix" | "note_fuel_mix" | "regime_commerciale";
export type valori_stagionali_ditte_doganeCreationAttributes = Optional<valori_stagionali_ditte_doganeAttributes, valori_stagionali_ditte_doganeOptionalAttributes>;

export class valori_stagionali_ditte_dogane extends Model<valori_stagionali_ditte_doganeAttributes, valori_stagionali_ditte_doganeCreationAttributes> implements valori_stagionali_ditte_doganeAttributes {
  id_ditta!: number;
  anno!: number;
  richiesta_letture_dic_dog?: 'Da richiedere' | 'Non fare' | 'Richiesta';
  stato_data_dic_dog?: 'Da fare';
  data_dic_dog?: string;
  note_dic_dog?: string;
  stato_data_scad_ric_nuovo_reg?: 'Da fare' | 'Non fare';
  data_scad_ric_nuovo_reg?: string;
  stato_data_consegna_ric_nuovo_reg?: 'Da fare' | 'Non fare';
  data_consegna_ric_nuovo_reg?: string;
  note_ric_nuovo_reg?: string;
  stato_data_pag_dir_licenza?: 'Da fare' | 'Non fare';
  data_pag_dir_licenza?: string;
  note_pag_dir_licenza?: string;
  data_scadenza_taratura_cont?: string;
  stato_data_consegna_taratura_cont?: 'Da fare' | 'Non fare';
  data_consegna_taratura_cont?: string;
  note_taratura_cont?: string;
  data_scadenza_taratura_spi?: string;
  stato_data_consegna_taratura_spi?: 'Da fare' | 'Non fare';
  data_consegna_taratura_spi?: string;
  note_taratura_spi?: string;
  data_invio_fuel_mix?: string;
  stato_data_invio_fuel_mix?: 'Da fare' | 'Non fare';
  note_fuel_mix?: string;
  regime_commerciale?: 'Cessione Totale' | 'Cessione Parziale';


  static initModel(sequelize: Sequelize.Sequelize): typeof valori_stagionali_ditte_dogane {
    return valori_stagionali_ditte_dogane.init({
    id_ditta: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    anno: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    richiesta_letture_dic_dog: {
      type: DataTypes.ENUM('Da richiedere','Non fare','Richiesta'),
      allowNull: true
    },
    stato_data_dic_dog: {
      type: DataTypes.ENUM('Da fare'),
      allowNull: true
    },
    data_dic_dog: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    note_dic_dog: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    stato_data_scad_ric_nuovo_reg: {
      type: DataTypes.ENUM('Da fare','Non fare'),
      allowNull: true
    },
    data_scad_ric_nuovo_reg: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    stato_data_consegna_ric_nuovo_reg: {
      type: DataTypes.ENUM('Da fare','Non fare'),
      allowNull: true
    },
    data_consegna_ric_nuovo_reg: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    note_ric_nuovo_reg: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    stato_data_pag_dir_licenza: {
      type: DataTypes.ENUM('Da fare','Non fare'),
      allowNull: true
    },
    data_pag_dir_licenza: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    note_pag_dir_licenza: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    data_scadenza_taratura_cont: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    stato_data_consegna_taratura_cont: {
      type: DataTypes.ENUM('Da fare','Non fare'),
      allowNull: true
    },
    data_consegna_taratura_cont: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    note_taratura_cont: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    data_scadenza_taratura_spi: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    stato_data_consegna_taratura_spi: {
      type: DataTypes.ENUM('Da fare','Non fare'),
      allowNull: true
    },
    data_consegna_taratura_spi: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    note_taratura_spi: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    data_invio_fuel_mix: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    stato_data_invio_fuel_mix: {
      type: DataTypes.ENUM('Da fare','Non fare'),
      allowNull: true
    },
    note_fuel_mix: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    regime_commerciale: {
      type: DataTypes.ENUM('Cessione Totale','Cessione Parziale'),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'valori_stagionali_ditte_dogane',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_ditta" },
          { name: "anno" },
        ]
      },
    ]
  });
  }
}
