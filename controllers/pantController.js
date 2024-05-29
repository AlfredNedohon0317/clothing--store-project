const Pant = require('../models/pant')

const getAllPants = async (req, res) => {
    try {
        const pants = await Pant.find()
        res.json(pants)
    } catch (error) {
        return res.status(500).send(error.message)
    }       
}

const getPantsById = async (req, res) => {
    try {
        const { id } = req.params
        const pant = await Pant.findById(id)
        if (pant) {
            return res.json(pant)
        }
        return res.status(404).send('Pants with that ID do not exist')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports = {
    getAllPants,
    getPantsById
}