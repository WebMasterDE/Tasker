const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('todo', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    richiesta: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    data_ins: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('current_timestamp')
    },
    operatore_ins: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      references: {
        model: 'ana_operatori',
        key: 'id_operatore'
      }
    },
    stato: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    operatorePerFixBug: {
      type: DataTypes.ENUM('DT','JF','GV','GP','GZ','DN'),
      allowNull: true
    },
    fase: {
      type: DataTypes.ENUM('Da fare','Da caricare','Concluso','Annullato','Urgente','In lavorazione','Da sviluppare'),
      allowNull: false,
      defaultValue: "Da fare"
    }
  }, {
    sequelize,
    tableName: 'todo',
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
        name: "todo_ana_operatori_id_operatore_fk",
        using: "BTREE",
        fields: [
          { name: "operatore_ins" },
        ]
      },
    ]
  });
};
