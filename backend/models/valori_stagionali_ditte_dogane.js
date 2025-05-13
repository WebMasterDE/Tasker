const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('valori_stagionali_ditte_dogane', {
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
};
