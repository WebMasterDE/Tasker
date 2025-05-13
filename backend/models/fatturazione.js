const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('fatturazione', {
    id_fattura: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    num_fattura: {
      type: DataTypes.STRING(45),
      allowNull: false,
      defaultValue: ""
    },
    data_creazione: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: "0000-00-00"
    },
    data_scadenza: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: "0000-00-00"
    },
    id_anagrafica: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    note_extra1: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    note_extra2: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    tipo_fattura: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 1
    },
    operatore_ins: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    data_ins: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('current_timestamp')
    }
  }, {
    sequelize,
    tableName: 'fatturazione',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_fattura" },
        ]
      },
      {
        name: "id_fattura",
        using: "BTREE",
        fields: [
          { name: "id_fattura" },
        ]
      },
      {
        name: "id_anagrafica",
        using: "BTREE",
        fields: [
          { name: "id_anagrafica" },
        ]
      },
    ]
  });
};
