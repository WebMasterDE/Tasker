const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('metodi_lettura', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    nome: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: "metodi_lettura_pk"
    }
  }, {
    sequelize,
    tableName: 'metodi_lettura',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "metodi_lettura_pk",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "nome" },
        ]
      },
      {
        name: "metodi_lettura_nome_index",
        using: "BTREE",
        fields: [
          { name: "nome" },
        ]
      },
    ]
  });
};
