const { Op, Sequelize, where } = require('sequelize');
const app = require('../app');

exports.getSubtasksByTaskId = async (req, res) => {
    try {
        const subtasks = await app.models.subtask.findAll({
            include: [{
                model: app.models.task_subtask,
                as: "task_subtasks",
                required: true,
                where: {
                    id_task: req.params.id_task,
                },
            }],
        })

        res.json(subtasks)

    } catch (err) {
        console.log(err)
        res.status(500).json({ error: true });
    }
}