const { Op, Sequelize } = require('sequelize');
const app = require('../app');


exports.InsertHour = async (req, res) => {
    try {
        const overtime = await app.models.overtime.create({
            Hours: req.body.Hours,
            Date: req.body.Date,
            Id_user: req.body.Id_user,
            Id_hour: req.body.Id_hour
        })
        res.status(201).send("Straordinario inserito correttamente!")

    } catch (err) {
        console.log(err)
    }
};


exports.getOvertimeByUserId = async (req, res) => {
    try {
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

// Va a recuperarsi l'ora di straordinario dall'Id delle ore lavorate.
// componente/i: task-dialog
exports.getOvertimeByHourId = async (req, res) => {
    try {
        const overtime = await app.models.overtime.findOne(
            {
                where:
                {
                     Id_hour: req.params.idHour,
                }
            }
        )
        if(res.status(200)){
            res.json(overtime)
        }else{
            console.log('si è verificato un errore nel recupero dell\'ora di straordinario')
        }
    }catch(err){
        console.log(err)
    }
}

exports.modifyHourOvertime = async (req, res) => {
    console.log(req.body)
    try{
        overtime = await app.models.overtime.update(
            {
                Hours: req.body.Hours
            },
            {
                where:{
                    Id_hour: req.body.Id_hour
                }
            }
        )

        if(res.status(201)){
            console.log('Straordinario aggiornato corretamente')
        }else{
            console.log('Errore nell\'aggiornamento dello Straordinario')
        }

    }catch(err){
        console.log(err)
    }

}