const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('el_classificazioni', {
    id_classificazione: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    id_categoria: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'el_categorie',
        key: 'id_categoria'
      }
    },
    id_sottocategoria: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      references: {
        model: 'el_sottocategorie',
        key: 'id_sottocategoria'
      }
    },
    perc_provvigione: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 10
    }
  }, {
    sequelize,
    tableName: 'el_classificazioni',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_classificazione" },
        ]
      },
      {
        name: "el_classificazioni_pk",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_categoria" },
          { name: "id_sottocategoria" },
        ]
      },
      {
        name: "FK_el_classificazioni_2",
        using: "BTREE",
        fields: [
          { name: "id_categoria" },
        ]
      },
      {
        name: "FK_el_classificazioni_3",
        using: "BTREE",
        fields: [
          { name: "id_sottocategoria" },
        ]
      },
    ]
  });
};
