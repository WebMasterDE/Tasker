const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('rinnovo_cpi', {
    id_commessa: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    scadenza: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    note_scadenza: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    op_ins_scadenza: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    consegna: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    note_consegna: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    op_ins_consegna: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'rinnovo_cpi',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_commessa" },
        ]
      },
    ]
  });
};
