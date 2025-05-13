const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('soddisfazione_cliente', {
    id_soddisfazione_cl: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    id_tipologia: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    note_spunti: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    data_recensione: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('current_timestamp')
    }
  }, {
    sequelize,
    tableName: 'soddisfazione_cliente',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_soddisfazione_cl" },
        ]
      },
      {
        name: "id_tipologia_FK",
        using: "BTREE",
        fields: [
          { name: "id_tipologia" },
        ]
      },
    ]
  });
};
