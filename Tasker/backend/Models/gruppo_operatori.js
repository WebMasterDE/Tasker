const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('gruppo_operatori', {
    id_gruppo: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    nome_gruppo: {
      type: DataTypes.STRING(45),
      allowNull: false,
      unique: "gruppo_operatori_pk"
    },
    icona: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    controller: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    action: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ordering: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    def_checked: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    redirect_url: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    leftbar: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    }
  }, {
    sequelize,
    tableName: 'gruppo_operatori',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_gruppo" },
        ]
      },
      {
        name: "gruppo_operatori_pk",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "nome_gruppo" },
        ]
      },
    ]
  });
};
