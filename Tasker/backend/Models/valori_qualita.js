const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('valori_qualita', {
    anno: {
      type: DataTypes.STRING(100),
      allowNull: false,
      primaryKey: true
    },
    ore_annue: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    costo_tot_annuo: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    ore_lavorate: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'valori_qualita',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "anno" },
        ]
      },
      {
        name: "anno",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "anno" },
        ]
      },
    ]
  });
};
