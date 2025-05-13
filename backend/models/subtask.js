const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('subtask', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    descrizione: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    ore_preventivate: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    data_inizio: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    data_fine: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    data_fine_prevista: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    status: {
      type: DataTypes.ENUM('aperto','chiuso'),
      allowNull: false,
      defaultValue: "aperto"
    }
  }, {
    sequelize,
    tableName: 'subtask',
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
    ]
  });
};
