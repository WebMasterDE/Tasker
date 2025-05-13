const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('operatori_commesse', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    id_operatore: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    id_commessa: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    note: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    data_ins: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('current_timestamp')
    },
    ore_1: {
      type: DataTypes.DECIMAL(5,1),
      allowNull: false,
      defaultValue: 0.0
    },
    ore_2: {
      type: DataTypes.DECIMAL(5,1),
      allowNull: false,
      defaultValue: 0.0
    },
    ore_3: {
      type: DataTypes.DECIMAL(5,1),
      allowNull: false,
      defaultValue: 0.0
    },
    ore_4: {
      type: DataTypes.DECIMAL(5,1),
      allowNull: false,
      defaultValue: 0.0
    },
    ore_5: {
      type: DataTypes.DECIMAL(5,1),
      allowNull: false,
      defaultValue: 0.0
    },
    ore_6: {
      type: DataTypes.DECIMAL(5,1),
      allowNull: false,
      defaultValue: 0.0
    },
    ore_7: {
      type: DataTypes.DECIMAL(5,1),
      allowNull: false,
      defaultValue: 0.0
    },
    ore_8: {
      type: DataTypes.DECIMAL(5,1),
      allowNull: false,
      defaultValue: 0.0
    },
    ore_9: {
      type: DataTypes.DECIMAL(5,1),
      allowNull: false,
      defaultValue: 0.0
    },
    ore_10: {
      type: DataTypes.DECIMAL(5,1),
      allowNull: false,
      defaultValue: 0.0
    },
    ore_11: {
      type: DataTypes.DECIMAL(5,1),
      allowNull: false,
      defaultValue: 0.0
    },
    ore_12: {
      type: DataTypes.DECIMAL(5,1),
      allowNull: false,
      defaultValue: 0.0
    }
  }, {
    sequelize,
    tableName: 'operatori_commesse',
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
