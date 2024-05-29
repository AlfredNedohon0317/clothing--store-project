const Brand = require('../models/brand')

const getAllBrands = async (req, res) => {
    try {
        const brands = await Brand.find()
        res.json(brands)
    } catch (error) {
        return res.status(500).send(error.message)
    }       
}

const getBrandById = async (req, res) => {
    try {
        const { id } = req.params
        const brand = await Brand.findById(id)
        if (brand) {
            return res.json(brand)
        }
        return res.status(404).send('Brand with that ID does not exist')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports = {
    getAllBrands,
    getBrandById
}