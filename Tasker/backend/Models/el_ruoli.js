const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('el_ruoli', {
    id_ruolo: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    nome_ruolo: {
      type: DataTypes.STRING(45),
      allowNull: false,
      unique: "el_ruoli_pk"
    }
  }, {
    sequelize,
    tableName: 'el_ruoli',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_ruolo" },
        ]
      },
      {
        name: "el_ruoli_pk",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "nome_ruolo" },
        ]
      },
    ]
  });
};
