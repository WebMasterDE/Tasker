const app = require('../app');

exports.insertShift = async (req, res) => {
    console.log("--------------------------------------------", req.body)
    try {
        const shift = await app.models.shifts.create({
            start_date: req.body.start_date,
            end_date: req.body.end_date,
            hour: req.body.hour,
            Id_user: req.body.Id_user
        })
        res.status(201).send("Turno inserito correttamente!")

    } catch (err) {
        console.log(err)
    }
}