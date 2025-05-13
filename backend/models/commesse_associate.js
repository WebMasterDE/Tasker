const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('commesse_associate', {
    id_commessa_padre: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'commesse',
        key: 'id_commessa'
      }
    },
    id_commessa_assoc: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'commesse',
        key: 'id_commessa'
      }
    }
  }, {
    sequelize,
    tableName: 'commesse_associate',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_commessa_padre" },
          { name: "id_commessa_assoc" },
        ]
      },
      {
        name: "commesse_associate_id_commessa_assoc_id_commessa_padre_unique",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_commessa_padre" },
          { name: "id_commessa_assoc" },
        ]
      },
      {
        name: "commesse_associate_commesse_id_commessa_fk_2",
        using: "BTREE",
        fields: [
          { name: "id_commessa_assoc" },
        ]
      },
    ]
  });
};
