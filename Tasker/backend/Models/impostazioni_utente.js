const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('impostazioni_utente', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    dark_mode_enabled: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    id_ana_operatore: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    col_reorder_enabled: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    sidebar_opened: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    tutti_stati_default_commesse: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    default_page: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'impostazioni_utente',
    timestamps: false,
    indexes: [
      {
        name: "impostazioni_utente_ana_operatori_id_operatore_fk",
        using: "BTREE",
        fields: [
          { name: "id_ana_operatore" },
        ]
      },
    ]
  });
};
