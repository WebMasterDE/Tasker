const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('domande_soddisfazione_cl', {
    id_soddisfazione_cliente: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    id_domanda: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    note_risposta: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    stelle_risposte: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'domande_soddisfazione_cl',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_soddisfazione_cliente" },
          { name: "id_domanda" },
        ]
      },
      {
        name: "id_domanda_FK",
        using: "BTREE",
        fields: [
          { name: "id_domanda" },
        ]
      },
    ]
  });
};
