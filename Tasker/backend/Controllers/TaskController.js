const app = require('../app');

exports.getTasks = async (req, res) => {
    try {
        const alltask = await app.models.tasks.findAll()
        res.json(alltask)
    } catch (err) {
        console.log(err)
    }
}
exports.deleteTasks = async (req, res) => {
    try {
        const deletesingleTask = await app.models.tasks.destroy({
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
        app.models.tasks.create({
            Task_name: req.body.Task_name,
            Task_description: req.body.Task_description,

            Task_end: req.body.Task_end,
            userIdUser: req.body.Id_user
        })

        res.status(201).send("Task effettuata correttamente!")
    } catch (err) {
        console.log(err)
    }
}