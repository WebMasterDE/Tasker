const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('timetable', {
    id_timetable: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    id_commessa: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'commesse',
        key: 'id_commessa'
      }
    },
    id_operatore: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'ana_operatori',
        key: 'id_operatore'
      }
    },
    ore_lavoro: {
      type: DataTypes.DECIMAL(3,1),
      allowNull: false,
      defaultValue: 0.0
    },
    data_lavoro: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    data_ins: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('current_timestamp')
    },
    operatore_ins: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      references: {
        model: 'ana_operatori',
        key: 'id_operatore'
      }
    },
    note: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    data_lavoro_cv: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'timetable',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_timetable" },
        ]
      },
      {
        name: "IN_id_commessa",
        using: "BTREE",
        fields: [
          { name: "id_commessa" },
        ]
      },
      {
        name: "timetable_ana_operatori_id_operatore_fk",
        using: "BTREE",
        fields: [
          { name: "id_operatore" },
        ]
      },
      {
        name: "timetable_ana_operatori_id_operatore_fk2",
        using: "BTREE",
        fields: [
          { name: "operatore_ins" },
        ]
      },
    ]
  });
};
