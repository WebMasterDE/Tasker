const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pagamenti_task', {
    id_pagamento: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'pagamenti',
        key: 'id_pagamento'
      }
    },
    id_task: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'task_fatturazione',
        key: 'id_task'
      }
    },
    importo: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'pagamenti_task',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_pagamento" },
          { name: "id_task" },
        ]
      },
      {
        name: "pagamenti_task_id_task_id_pagamento_unique",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_pagamento" },
          { name: "id_task" },
        ]
      },
      {
        name: "pagamenti_task_task_fatturazione_id_task_fk",
        using: "BTREE",
        fields: [
          { name: "id_task" },
        ]
      },
    ]
  });
};
