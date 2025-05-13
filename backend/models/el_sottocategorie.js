const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('el_sottocategorie', {
    id_sottocategoria: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    nome_sottocategoria: {
      type: DataTypes.STRING(45),
      allowNull: false,
      unique: "el_sottocategorie_pk"
    }
  }, {
    sequelize,
    tableName: 'el_sottocategorie',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_sottocategoria" },
        ]
      },
      {
        name: "el_sottocategorie_pk",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "nome_sottocategoria" },
        ]
      },
    ]
  });
};
