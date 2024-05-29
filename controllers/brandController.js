const Brand = require('../models/brand')

// Read/Show

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


// create

const createBrands = async (req, res) => {
    try {
        const brand = await new Brand(req.body)
        await brand.save()
        return res.status(201).json({
            brand
        })
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}
module.exports = {
    getAllBrands,
    getBrandById,
    createBrands
}