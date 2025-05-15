const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('fatturazione_commesse', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_fattura: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      references: {
        model: 'fatturazione',
        key: 'id_fattura'
      }
    },
    id_commessa: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      references: {
        model: 'commesse',
        key: 'id_commessa'
      }
    },
    importo_fatturato: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
      defaultValue: 0.00
    },
    id_acquisto: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      references: {
        model: 'acquisti',
        key: 'id_acquisto'
      }
    },
    id_task: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      references: {
        model: 'task_fatturazione',
        key: 'id_task'
      }
    }
  }, {
    sequelize,
    tableName: 'fatturazione_commesse',
    timestamps: false,
    indexes: [
      {
        name: "FK_fatturazione_commesse_1",
        using: "BTREE",
        fields: [
          { name: "id_fattura" },
        ]
      },
      {
        name: "FK_fatturazione_commesse_2",
        using: "BTREE",
        fields: [
          { name: "id_commessa" },
        ]
      },
      {
        name: "FK_fatturazione_commesse_3",
        using: "BTREE",
        fields: [
          { name: "id_acquisto" },
        ]
      },
      {
        name: "FK_fatturazione_commesse_4",
        using: "BTREE",
        fields: [
          { name: "id_commessa" },
          { name: "id_task" },
        ]
      },
      {
        name: "fatturazione_commesse_task_fatturazione_id_task_fk",
        using: "BTREE",
        fields: [
          { name: "id_task" },
        ]
      },
    ]
  });
};
