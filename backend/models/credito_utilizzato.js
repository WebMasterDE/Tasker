const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('credito_utilizzato', {
    id_credito: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'crediti_commesse',
        key: 'id'
      }
    },
    tipo_credito: {
      type: DataTypes.ENUM('SAL1','SAL2','SALDO','CREDITO_110'),
      allowNull: false
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
    anno: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    importo_ceduto: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true,
      defaultValue: 0.00
    },
    importo_riconosciuto: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true,
      defaultValue: 0.00
    },
    destinatario: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    data_ceduto: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    importo_utilizzato: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true,
      defaultValue: 0.00
    },
    data_utilizzato: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'credito_utilizzato',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_credito" },
          { name: "anno" },
        ]
      },
      {
        name: "FK__commesse",
        using: "BTREE",
        fields: [
          { name: "id_commessa" },
        ]
      },
    ]
  });
};
