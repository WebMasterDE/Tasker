const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('codici_importo_commessa', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    codice: {
      type: DataTypes.STRING(50),
      allowNull: true,
      unique: "codici_importo_commessa_pk_2"
    }
  }, {
    sequelize,
    tableName: 'codici_importo_commessa',
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
        name: "codici_importo_commessa_pk_2",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "codice" },
        ]
      },
    ]
  });
};
