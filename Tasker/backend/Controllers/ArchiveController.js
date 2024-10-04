const {Op} = require('sequelize');
const app = require('../app');


exports.getArchive = async (req, res) => {
    try {
        const alltask = await app.models.archives.findAll({
            where: {
                Id_user: req.params.id
            }
        })
        res.json(alltask)
    } catch (err) {
        console.log(err)
    }
};

exports.addTasksToArchive = async (req, res) => {
    try {
        console.log(req.body);
        await app.models.archives.create({
            Task_name: req.body.Task_name,
            Task_description: req.body.Task_description,
            Task_hours: req.body.Task_hours,
            Task_creation: req.body.Task_creation,
            Task_end: req.body.Task_end,
            userIdUser: req.body.Id_user,
            id: req.params.id
        }, {
            where: {
                id_task: {
                    [Op.eq]: req.params.id_task
                },
                userIdUser: {
                    [Op.eq]: req.body.Id_user
                }
            }
        });

        res.status(201).send("Task archiviata correttamente!");
    } catch (err) {
        console.log(err);
    }
};
