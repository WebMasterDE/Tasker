const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('el_categorie', {
    id_categoria: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    nome_categoria: {
      type: DataTypes.STRING(45),
      allowNull: false,
      unique: "el_categorie_pk"
    }
  }, {
    sequelize,
    tableName: 'el_categorie',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_categoria" },
        ]
      },
      {
        name: "el_categorie_pk",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "nome_categoria" },
        ]
      },
    ]
  });
};
