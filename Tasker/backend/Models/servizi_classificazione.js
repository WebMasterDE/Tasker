const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('servizi_classificazione', {
    id_servizio: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'el_servizi',
        key: 'id_servizio'
      }
    },
    id_classificazione: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'el_classificazioni',
        key: 'id_classificazione'
      }
    }
  }, {
    sequelize,
    tableName: 'servizi_classificazione',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_servizio" },
          { name: "id_classificazione" },
        ]
      },
      {
        name: "servizi_classificazione_id_servizio_id_classificazione_unique",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_servizio" },
          { name: "id_classificazione" },
        ]
      },
      {
        name: "id_classificazione",
        using: "BTREE",
        fields: [
          { name: "id_classificazione" },
        ]
      },
      {
        name: "servizi_classificazione_el_servizi_id_servizio_fk",
        using: "BTREE",
        fields: [
          { name: "id_servizio" },
        ]
      },
    ]
  });
};
