const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define('users', {
    Id_user: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    Name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    Email: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    Password: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    Autorizzazione: {
      type: DataTypes.INTEGER(3),
      allowNull: false,
      defaultValue: 3
    }
  }, {
    sequelize,
    tableName: 'users',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Id_user" },
        ]
      },
    ]
  });
};
