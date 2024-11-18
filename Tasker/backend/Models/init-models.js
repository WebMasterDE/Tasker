var DataTypes = require("sequelize").DataTypes;
var _archives = require("./archives");
var _contract_of_employment = require("./contract_of_employment");
var _hours = require("./hours");
var _overtime = require("./overtime");
var _shifts = require("./shifts");
var _subtask = require("./subtask");
var _task_subtask = require("./task_subtask");
var _tasks = require("./tasks");
var _users = require("./users");

function initModels(sequelize) {
  var archives = _archives(sequelize, DataTypes);
  var contract_of_employment = _contract_of_employment(sequelize, DataTypes);
  var hours = _hours(sequelize, DataTypes);
  var overtime = _overtime(sequelize, DataTypes);
  var shifts = _shifts(sequelize, DataTypes);
  var subtask = _subtask(sequelize, DataTypes);
  var task_subtask = _task_subtask(sequelize, DataTypes);
  var tasks = _tasks(sequelize, DataTypes);
  var users = _users(sequelize, DataTypes);

  subtask.belongsToMany(tasks, { as: 'id_task_tasks', through: task_subtask, foreignKey: "id_subtask", otherKey: "id_task" });
  tasks.belongsToMany(subtask, { as: 'id_subtask_subtasks', through: task_subtask, foreignKey: "id_task", otherKey: "id_subtask" });
  hours.belongsTo(subtask, { as: "id_subtask_subtask", foreignKey: "id_subtask"});
  subtask.hasMany(hours, { as: "hours", foreignKey: "id_subtask"});
  task_subtask.belongsTo(subtask, { as: "id_subtask_subtask", foreignKey: "id_subtask"});
  subtask.hasMany(task_subtask, { as: "task_subtasks", foreignKey: "id_subtask"});
  hours.belongsTo(tasks, { as: "Id_task_task", foreignKey: "Id_task"});
  tasks.hasMany(hours, { as: "hours", foreignKey: "Id_task"});
  task_subtask.belongsTo(tasks, { as: "id_task_task", foreignKey: "id_task"});
  tasks.hasMany(task_subtask, { as: "task_subtasks", foreignKey: "id_task"});
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
    subtask,
    task_subtask,
    tasks,
    users,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
