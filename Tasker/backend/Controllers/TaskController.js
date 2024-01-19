const taskModel = require('../Models/taskModel');

exports.getTasks = async (req, res) => {
    try {
        const alltask = await taskModel.findAll({
            where: {
                userIdUser: req.params.id
            }
        })
        res.json(alltask)
    } catch (err) {
        console.log(err)
    }
}
exports.deleteTasks = async (req, res) => {
    try {
        const deletesingleTask = await taskModel.destroy({
            where: {
                Id_task: req.body.Id_task
            }
        })
        if (req.id) {
            res.status(200).json(deletesingleTask)
        } else {
            res.status(401)
        }
    } catch (err) {
        console.log(err)
    }
}

exports.addTasks = async (req, res) => {
    try {
        console.log(req.body)
        taskModel.create({
            Task_name: req.body.Task_name,
            Task_description: req.body.Task_description,

            Task_hours: req.body.Task_hours,
            Task_creation: req.body.Task_creation,
            Task_end: req.body.Task_end,
            userIdUser: req.body.Id_user
        })

        res.status(201).send("Task effettuata correttamente!")
    } catch (err) {
        console.log(err)
    }
}