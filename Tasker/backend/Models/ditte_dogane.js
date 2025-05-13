const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ditte_dogane', {
    id_ditta: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    codice_ditta: {
      type: DataTypes.STRING(30),
      allowNull: true,
      unique: "ditte_dogane_codice_ditta_uindex"
    },
    ufficio_dogane: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    data_apertura_officina: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    note_data_apertura_officina: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    user_id_gse: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    psw_gse: {
      type: DataTypes.STRING(25),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ditte_dogane',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_ditta" },
        ]
      },
      {
        name: "ditte_dogane_codice_ditta_uindex",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "codice_ditta" },
        ]
      },
    ]
  });
};
