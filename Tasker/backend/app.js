const express = require('express');
const userRoute = require('./routes/user')
const taskRoute = require('./routes/task')
const parser = require('body-parser')
const cors = require('cors')
const Db = require('./util/DatabaseConnection')
const UserModule =require('./Models/UserModel')
const TaskModel = require('./Models/TaskModel')
const constants = require("constants");
const app = express();

app.use(parser.json())
app.use(cors())

// routes
app.use('/api',userRoute)
app.use('/api',taskRoute)


UserModule.hasMany(TaskModel)
TaskModel.belongsTo(UserModule,{constraints:true,onDelete:'CASCADE'})

Db.sync().then(result=>{

app.listen(3000)

}).catch(err=>{
    console.log(err)
})

