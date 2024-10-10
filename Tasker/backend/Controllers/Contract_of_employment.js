const { Op, Sequelize } = require('sequelize');
const app = require('../app');


exports.getContractInfo = async (req, res) => {
    try {
        const contract = await app.models.contract_of_employment.findOne(
            {
                where:
                {
                    Id_user: req.params.id,
                }
            })
        return res.json(contract);
    } catch (error) {
        console.log(error)
    }

}