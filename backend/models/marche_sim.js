const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('marche_sim', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    nome: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: "marche_SIM_pk_2"
    }
  }, {
    sequelize,
    tableName: 'marche_sim',
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
        name: "marche_SIM_pk_2",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "nome" },
        ]
      },
      {
        name: "marche_SIM_nome_index",
        using: "BTREE",
        fields: [
          { name: "nome" },
        ]
      },
    ]
  });
};
