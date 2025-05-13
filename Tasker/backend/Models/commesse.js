const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('commesse', {
    id_commessa: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    data_fine_pre: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    data_chiusura: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    stato: {
      type: DataTypes.ENUM('0','1','2','3'),
      allowNull: false,
      defaultValue: "0",
      comment: "'Aperta', 'Chiusa', 'Annullata', 'Sospesa'"
    },
    note_commessa: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    cod_commessa: {
      type: DataTypes.STRING(45),
      allowNull: false,
      unique: "Index_3"
    },
    id_cliente_anagrafica: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    budget_conferma: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
      defaultValue: 0.00
    },
    data_conferma: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    id_operatore: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    periodo: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    data_consegna: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    numero_letture: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    portale_comm: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    bolletta: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    numero_letture_acq: {
      type: DataTypes.ENUM('ACS','AFS','ACS/AFS','0'),
      allowNull: true
    },
    data_lettura: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    materiale_lettura: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    note_lettura: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    data_eseguita: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    data_lettura_acq: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    data_eseguita_acq: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    note_obbligatorie: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    inbozza: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    revisionata: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    sal1: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    sal2: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    saldo: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    codice_sal1: {
      type: DataTypes.ENUM('6890','6908','6921','6922','6926','7711 - N.T.','7711 - T.','7711','7718','7719','7716'),
      allowNull: true
    },
    codice_sal2: {
      type: DataTypes.ENUM('6890','6908','6921','6922','6926','7711 - N.T.','7711 - T.','7711','7718','7719','7716'),
      allowNull: true
    },
    codice_saldo: {
      type: DataTypes.ENUM('6890','6908','6921','6922','6926','7711 - N.T.','7711 - T.','7711','7718','7719','7716'),
      allowNull: true
    },
    data_sal1: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    data_sal2: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    data_saldo: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    anni_sal1: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    anni_sal2: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    anni_saldo: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ha_cassetto_fiscale: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 0
    },
    totale_ivato: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    credito_imposta: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    data_credito_110: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    anni_credito_110: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    codice_credito_110: {
      type: DataTypes.ENUM('6890','6908','6921','6922','6926','7711 - N.T.','7711 - T.','7711','7718','7719','7716','6925'),
      allowNull: true
    },
    saldo_credito_110: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    continuo_letture: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'commesse',
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
      {
        name: "Index_3",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "cod_commessa" },
        ]
      },
      {
        name: "FK_commesse_1",
        using: "BTREE",
        fields: [
          { name: "id_operatore" },
        ]
      },
      {
        name: "id_commessa",
        using: "BTREE",
        fields: [
          { name: "id_commessa" },
        ]
      },
      {
        name: "id_cliente_anagrafica",
        using: "BTREE",
        fields: [
          { name: "id_cliente_anagrafica" },
        ]
      },
    ]
  });
};
