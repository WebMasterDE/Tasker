const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ip_bloccati', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ip: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    timestamp: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('current_timestamp')
    },
    userId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'ana_operatori',
        key: 'id_operatore'
      }
    },
    injId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    typeVuln: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    lastModify: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ip_bloccati',
    timestamps: false,
    indexes: [
      {
        name: "ip_bloccati_ana_operatori_id_operatore_fk",
        using: "BTREE",
        fields: [
          { name: "userId" },
        ]
      },
    ]
  });
};
