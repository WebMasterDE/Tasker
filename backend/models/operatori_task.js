const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('operatori_task', {
    id_operatore: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    id_ruolo: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'el_ruoli',
        key: 'id_ruolo'
      }
    },
    id_commessa: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'commesse',
        key: 'id_commessa'
      }
    },
    id_task: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'operatori_task',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_operatore" },
          { name: "id_commessa" },
          { name: "id_task" },
        ]
      },
      {
        name: "operatori_task_task_programmazione_id_task_fk",
        using: "BTREE",
        fields: [
          { name: "id_task" },
        ]
      },
      {
        name: "operatori_task_commesse_id_commessa_fk",
        using: "BTREE",
        fields: [
          { name: "id_commessa" },
        ]
      },
      {
        name: "operatori_task_el_ruoli_id_ruolo_fk",
        using: "BTREE",
        fields: [
          { name: "id_ruolo" },
        ]
      },
    ]
  });
};
