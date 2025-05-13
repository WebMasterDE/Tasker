const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dogane', {
    id_dogana: {
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
    regime_commerciale: {
      type: DataTypes.ENUM('Nuovo','Nuovo Cessione Totale','Esistente','Esistente Cessione Totale'),
      allowNull: true
    },
    anno: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ult_mod_anno: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    ult_mod_regime_comm: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'dogane',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_dogana" },
        ]
      },
      {
        name: "dogane_commesse_id_commessa_fk",
        using: "BTREE",
        fields: [
          { name: "id_commessa" },
        ]
      },
    ]
  });
};
