const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('fatt_tipologie', {
    id_tipologia: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    nome_tipologia: {
      type: DataTypes.STRING(45),
      allowNull: false,
      unique: "fatt_tipologie_pk"
    }
  }, {
    sequelize,
    tableName: 'fatt_tipologie',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_tipologia" },
        ]
      },
      {
        name: "fatt_tipologie_pk",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "nome_tipologia" },
        ]
      },
    ]
  });
};
