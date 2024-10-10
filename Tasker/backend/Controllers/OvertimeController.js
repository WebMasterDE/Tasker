const { Op, Sequelize } = require('sequelize');
const app = require('../app');


exports.InsertHour = async (req, res) => {
    console.log("--------------------------------------------", req.body)
    try {
        const overtime = await app.models.overtime.create({
            Hours: req.body.Hours,
            Date: req.body.Date,
            Id_user: req.body.Id_user
        })
        res.status(201).send("Straordinario inserito correttamente!")

    } catch (err) {
        console.log(err)
    }
};

exports.getOvertimeById = async (req, res) => {
    try {
        console.log(req.params, "---------------------------------------------------------------------------")
        const overtime = await app.models.overtime.findAll(
            {
                where:
                {
                    Id_user: req.params.id,
                    [Op.and]: [
                        Sequelize.where(Sequelize.fn('YEAR', Sequelize.col('Date')), req.params.year),
                        Sequelize.where(Sequelize.fn('MONTH', Sequelize.col('Date')), req.params.month)
                    ]
                }
            })
        return res.json(overtime);
    } catch (error) {
        console.log(error)
    }

}