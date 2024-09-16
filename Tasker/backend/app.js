const express = require('express');
const userRoute = require('./routes/user')
const taskRoute = require('./routes/task')
const archivedRoute = require('./routes/Archive')
const parser = require('body-parser')
const cors = require('cors')
const Db = require('./util/DatabaseConnection')
const TaskModel = require('./Models/taskModel')
const UserModule = require('./Models/UserModel')
const HoursModel = require('./Models/HourModel')
const ArchivedModel = require('./Models/ArchiveModel')
const constants = require("constants");
const { arch } = require('os');
const app = express();

app.use(parser.json())
app.use(cors())

// routes
app.use('/api', userRoute)
app.use('/api', taskRoute)
app.use('/api', archivedRoute)

UserModule.hasMany(TaskModel)
ArchivedModel.belongsTo(UserModule, { constraints: true, onDelete: 'CASCADE' })
TaskModel.belongsTo(UserModule, { constraints: true, onDelete: 'CASCADE' })
HoursModel.belongsTo(UserModule, { constraints: true, onDelete: 'CASCADE' })

Db.sync().then(result => {

    app.listen(3000)

}).catch(err => {
    console.log(err)
})

