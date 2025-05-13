const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('el_personas', {
    id_personas: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    nome_personas: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: "nome_personas"
    }
  }, {
    sequelize,
    tableName: 'el_personas',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_personas" },
        ]
      },
      {
        name: "nome_personas",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "nome_personas" },
        ]
      },
    ]
  });
};
