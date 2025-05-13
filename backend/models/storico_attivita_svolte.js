const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('storico_attivita_svolte', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    id_cdm: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    cod_commessa: {
      type: DataTypes.STRING(45),
      allowNull: false,
      defaultValue: ""
    },
    attivita: {
      type: DataTypes.STRING(45),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'storico_attivita_svolte',
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
