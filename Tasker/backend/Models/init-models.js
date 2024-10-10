var DataTypes = require("sequelize").DataTypes;
var _archives = require("./archives");
var _contract_of_employment = require("./contract_of_employment");
var _hours = require("./hours");
var _overtime = require("./overtime");
var _shifts = require("./shifts");
var _tasks = require("./tasks");
var _users = require("./users");

function initModels(sequelize) {
  var archives = _archives(sequelize, DataTypes);
  var contract_of_employment = _contract_of_employment(sequelize, DataTypes);
  var hours = _hours(sequelize, DataTypes);
  var overtime = _overtime(sequelize, DataTypes);
  var shifts = _shifts(sequelize, DataTypes);
  var tasks = _tasks(sequelize, DataTypes);
  var users = _users(sequelize, DataTypes);

  hours.belongsTo(tasks, { as: "Id_task_task", foreignKey: "Id_task"});
  tasks.hasMany(hours, { as: "hours", foreignKey: "Id_task"});
  contract_of_employment.belongsTo(users, { as: "Id_user_user", foreignKey: "Id_user"});
  users.hasMany(contract_of_employment, { as: "contract_of_employments", foreignKey: "Id_user"});
  hours.belongsTo(users, { as: "Id_user_user", foreignKey: "Id_user"});
  users.hasMany(hours, { as: "hours", foreignKey: "Id_user"});
  overtime.belongsTo(users, { as: "Id_user_user", foreignKey: "Id_user"});
  users.hasMany(overtime, { as: "overtimes", foreignKey: "Id_user"});
  shifts.belongsTo(users, { as: "Id_user_user", foreignKey: "Id_user"});
  users.hasMany(shifts, { as: "shifts", foreignKey: "Id_user"});

  return {
    archives,
    contract_of_employment,
    hours,
    overtime,
    shifts,
    tasks,
    users,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
