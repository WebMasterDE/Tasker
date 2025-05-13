const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('acquisti', {
    id_acquisto: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    num_oda: {
      type: DataTypes.STRING(45),
      allowNull: false,
      defaultValue: ""
    },
    data_ordine: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: "0000-00-00"
    },
    rif_preventivo_fornitore: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    descrizione: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    data_consegna: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: "0000-00-00"
    },
    id_anagrafica: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    id_operatore: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    operatore_ins: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    data_ins: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('current_timestamp')
    },
    tipologia_oda: {
      type: DataTypes.ENUM('esterno','oda_fittizio'),
      allowNull: true,
      defaultValue: "esterno"
    }
  }, {
    sequelize,
    tableName: 'acquisti',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_acquisto" },
        ]
      },
    ]
  });
};
