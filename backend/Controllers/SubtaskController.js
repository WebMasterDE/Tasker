const { Op, Sequelize } = require('sequelize');
const app = require('../app');

exports.getallSubtasks = async (req, res) => {
    try {
        const subtasks = await app.models.subtask.findAll()

        res.json(subtasks)

    } catch (err) {
        console.log(err)
    }
}