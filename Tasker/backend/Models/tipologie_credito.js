const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tipologie_credito', {
    id_tipologia_credito: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    nome_tipologia_credito: {
      type: DataTypes.STRING(15),
      allowNull: false,
      unique: "tipologie_credito_pk"
    }
  }, {
    sequelize,
    tableName: 'tipologie_credito',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_tipologia_credito" },
        ]
      },
      {
        name: "tipologie_credito_pk",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "nome_tipologia_credito" },
        ]
      },
    ]
  });
};
