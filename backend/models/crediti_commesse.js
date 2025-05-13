const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('crediti_commesse', {
    id: {
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
    id_tipologia: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'tipologie_credito',
        key: 'id_tipologia_credito'
      }
    },
    data_c: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    codice: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      references: {
        model: 'codici_importo_commessa',
        key: 'id'
      }
    },
    anni: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    importo: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'crediti_commesse',
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
      {
        name: "crediti_commesse_codici_importo_commessa_id_fk",
        using: "BTREE",
        fields: [
          { name: "codice" },
        ]
      },
      {
        name: "crediti_commesse_commesse_id_commessa_fk",
        using: "BTREE",
        fields: [
          { name: "id_commessa" },
        ]
      },
      {
        name: "crediti_commesse_tipologie_credito_id_tipologia_credito_fk",
        using: "BTREE",
        fields: [
          { name: "id_tipologia" },
        ]
      },
    ]
  });
};
