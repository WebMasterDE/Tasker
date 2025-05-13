const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('qualifiche_operatori', {
    id_qualifica: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'qualifiche',
        key: 'id'
      }
    },
    id_operatori: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'ana_operatori',
        key: 'id_operatore'
      }
    }
  }, {
    sequelize,
    tableName: 'qualifiche_operatori',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_qualifica" },
          { name: "id_operatori" },
        ]
      },
      {
        name: "qualifiche_operatori_id_qualifica_id_operatori_unique",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_qualifica" },
          { name: "id_operatori" },
        ]
      },
      {
        name: "qualifiche_operatori_ana_operatori_id_operatore_fk",
        using: "BTREE",
        fields: [
          { name: "id_operatori" },
        ]
      },
    ]
  });
};
