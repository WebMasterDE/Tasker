const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pratiche_enea', {
    id_pratica_enea: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    fine_lavori: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    note_fine_lavori: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    periodo: {
      type: DataTypes.DATE(4),
      allowNull: true
    },
    note_periodo: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    op_ins_periodo: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    data_pres_pratica_enea: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    note_data_pres_prat_enea: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    op_ins_data_pres_prat_enea: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    id_operatore: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    note_id_operatore: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    op_ins_id_operatore: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    id_commessa: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    op_ins_fine_lav: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'pratiche_enea',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_pratica_enea" },
        ]
      },
      {
        name: "pratiche_enea_ana_operatori_id_operatore_fk",
        using: "BTREE",
        fields: [
          { name: "id_operatore" },
        ]
      },
      {
        name: "pratiche_enea_commesse_id_commessa_fk",
        using: "BTREE",
        fields: [
          { name: "id_commessa" },
        ]
      },
    ]
  });
};
