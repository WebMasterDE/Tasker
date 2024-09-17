var DataTypes = require("sequelize").DataTypes;
var _archives = require("./archives");
var _hours = require("./hours");
var _tasks = require("./tasks");
var _user_tasks = require("./user_tasks");
var _users = require("./users");

function initModels(sequelize) {
  var archives = _archives(sequelize, DataTypes);
  var hours = _hours(sequelize, DataTypes);
  var tasks = _tasks(sequelize, DataTypes);
  var user_tasks = _user_tasks(sequelize, DataTypes);
  var users = _users(sequelize, DataTypes);

  user_tasks.belongsTo(hours, { as: "hoursId_hour_hour", foreignKey: "hoursId_hour", onDelete: 'CASCADE' });
  hours.hasMany(user_tasks, { as: "user_tasks", foreignKey: "hoursId_hour", onDelete: 'CASCADE' });
  hours.belongsTo(tasks, { as: "taskIdTask_task", foreignKey: "taskIdTask", onDelete: 'CASCADE' });
  tasks.hasMany(hours, { as: "hours", foreignKey: "taskIdTask", onDelete: 'CASCADE' });
  user_tasks.belongsTo(tasks, { as: "taskIdTask_task", foreignKey: "taskIdTask", onDelete: 'CASCADE' });
  tasks.hasMany(user_tasks, { as: "user_tasks", foreignKey: "taskIdTask", onDelete: 'CASCADE' });
  hours.belongsTo(user_tasks, { as: "userTaskIdUserTasks_user_task", foreignKey: "userTaskIdUserTasks", onDelete: 'CASCADE' });
  user_tasks.hasMany(hours, { as: "hours", foreignKey: "userTaskIdUserTasks", onDelete: 'CASCADE' });
  archives.belongsTo(users, { as: "userIdUser_user", foreignKey: "userIdUser", onDelete: 'CASCADE' });
  users.hasMany(archives, { as: "archives", foreignKey: "userIdUser", onDelete: 'CASCADE' });
  hours.belongsTo(users, { as: "userIdUser_user", foreignKey: "userIdUser", onDelete: 'CASCADE' });
  users.hasMany(hours, { as: "hours", foreignKey: "userIdUser" });
  user_tasks.belongsTo(users, { as: "userIdUser_user", foreignKey: "userIdUser" });
  users.hasMany(user_tasks, { as: "user_tasks", foreignKey: "userIdUser", onDelete: 'CASCADE' });

  return {
    archives,
    hours,
    tasks,
    user_tasks,
    users,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
