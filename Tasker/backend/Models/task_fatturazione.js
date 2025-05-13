const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('task_fatturazione', {
    id_commessa: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'commesse',
        key: 'id_commessa'
      }
    },
    id_task: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    descrizione: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    data_inizio_task: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('current_timestamp')
    },
    data_scadenza_task: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    data_consegna_task: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    data_chiusura_task: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    stato_task: {
      type: DataTypes.ENUM('0','1','2','3'),
      allowNull: false,
      defaultValue: "0",
      comment: "'Aperta', 'Chiusa', 'Annullata', 'Sospesa'"
    },
    importo: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
      defaultValue: 0.00
    },
    id_classificazione: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      references: {
        model: 'el_classificazioni',
        key: 'id_classificazione'
      }
    },
    position: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    id_settore: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      references: {
        model: 'el_settori',
        key: 'id_settore'
      }
    }
  }, {
    sequelize,
    tableName: 'task_fatturazione',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_task" },
        ]
      },
      {
        name: "FK_commesse",
        using: "BTREE",
        fields: [
          { name: "id_commessa" },
        ]
      },
      {
        name: "task_el_classificazioni_id_classificazione_fk",
        using: "BTREE",
        fields: [
          { name: "id_classificazione" },
        ]
      },
      {
        name: "task_fatturazione_el_settori_id_settore_fk",
        using: "BTREE",
        fields: [
          { name: "id_settore" },
        ]
      },
    ]
  });
};
