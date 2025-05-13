const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ana_operatori', {
    id_operatore: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    cod_operatore: {
      type: DataTypes.STRING(20),
      allowNull: false,
      unique: "ana_operatori_pk"
    },
    nome: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    cognome: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    note: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    id_ruolo: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'el_ruoli',
        key: 'id_ruolo'
      }
    },
    usr: {
      type: DataTypes.STRING(45),
      allowNull: true,
      unique: "ana_operatori_pk2"
    },
    psw: {
      type: DataTypes.CHAR(128),
      allowNull: true,
      defaultValue: ""
    },
    stato: {
      type: DataTypes.ENUM('0','1'),
      allowNull: false,
      defaultValue: "0",
      comment: " "
    },
    data_attivazione: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    data_disattivazione: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    orelav_giorno: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 8
    },
    last_login: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('current_timestamp')
    },
    ip_login: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    id_el_dipendenti: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'el_dipendenti',
        key: 'id_dipendente'
      }
    }
  }, {
    sequelize,
    tableName: 'ana_operatori',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_operatore" },
        ]
      },
      {
        name: "ana_operatori_pk",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "cod_operatore" },
        ]
      },
      {
        name: "ana_operatori_pk2",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "usr" },
        ]
      },
      {
        name: "FK_ana_operatori_2",
        using: "BTREE",
        fields: [
          { name: "id_ruolo" },
        ]
      },
      {
        name: "ana_operatori_el_dipendenti_id_dipendente_fk",
        using: "BTREE",
        fields: [
          { name: "id_el_dipendenti" },
        ]
      },
    ]
  });
};
