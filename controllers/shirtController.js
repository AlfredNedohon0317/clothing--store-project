const Shirt = require('../models/shirt')

const getAllShirts = async (req, res) => {
    try {
        const shirts = await Shirt.find()
        res.json(shirts)
    } catch (error) {
        return res.status(500).send(error.message)
    }       
}

const getShirtById = async (req, res) => {
    try {
        const { id } = req.params
        const shirt = await Shirt.findById(id)
        if (shirt) {
            return res.json(shirt)
        }
        return res.status(404).send('Shirt with that ID does not exist')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports = {
    getAllShirts,
    getShirtById
}