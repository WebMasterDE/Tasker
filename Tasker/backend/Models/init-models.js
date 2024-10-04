var DataTypes = require("sequelize").DataTypes;
var _archives = require("./archives");
var _hours = require("./hours");
var _shifts = require("./shifts");
var _tasks = require("./tasks");
var _users = require("./users");

function initModels(sequelize) {
    var archives = _archives(sequelize, DataTypes);
    var hours = _hours(sequelize, DataTypes);
    var shifts = _shifts(sequelize, DataTypes);
    var tasks = _tasks(sequelize, DataTypes);
    var users = _users(sequelize, DataTypes);

    hours.belongsTo(tasks, {as: "Id_task_task", foreignKey: "Id_task"});
    tasks.hasMany(hours, {as: "hours", foreignKey: "Id_task"});
    hours.belongsTo(users, {as: "Id_user_user", foreignKey: "Id_user"});
    users.hasMany(hours, {as: "hours", foreignKey: "Id_user"});
    shifts.belongsTo(users, {as: "Id_user_user", foreignKey: "Id_user"});
    users.hasMany(shifts, {as: "shifts", foreignKey: "Id_user"});

    return {
        archives,
        hours,
        shifts,
        tasks,
        users,
    };
}

module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
