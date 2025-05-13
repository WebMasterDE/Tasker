const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('storico_ricariche_sim', {
    id_condominio: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'condomini',
        key: 'id_condominio'
      }
    },
    data_ricarica: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      primaryKey: true
    },
    importo_ricarica: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'storico_ricariche_sim',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_condominio" },
          { name: "data_ricarica" },
        ]
      },
    ]
  });
};
