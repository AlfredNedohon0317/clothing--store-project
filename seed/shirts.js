const db = require('../db')
const Shirt = require('../models/shirt')
const Brand  = require('../models/brand')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {

    const Chanel = await Brand.find({ name: 'Chanel' })
    const Dior = await Brand.find({ name: 'Dior' })
    const Gucci = await Brand.find({ name: 'Gucci' })
    const LouisVuitton = await Brand.find({ name: 'Louis Vuitton' })
    const Versace = await Brand.find({ name: 'Versace' })

    const shirts = [
        {
           color: 'Black',
           size: 'M',
           material: 'Silk',
           price: 3000,
           inStock: true,
           brand: Chanel[0]._id    
        },
        {
            color: 'Pink',
            size: 'S',
            material: 'Cotton',
            price: 1800,
            inStock: true,
            brand: Chanel[0]._id    
        },
        {
            color: 'White',
            size: 'M',
            material: 'Chambray',
            price: 2200,
            inStock: true,
            brand: Dior[0]._id    
         },
         {
             color: 'Chartreuse',
             size: 'XS',
             material: 'Cashmere',
             price: 12000,
             inStock: true,
             brand: Dior[0]._id    
         },
         {
            color: 'Blue',
            size: 'L',
            material: 'Linen',
            price: 900,
            inStock: true,
            brand: Gucci[0]._id    
         },
         {
             color: 'Yellow',
             size: 'S',
             material: 'Cotton',
             price: 950,
             inStock: true,
             brand: Gucci[0]._id    
         },
         {
            color: 'Tan',
            size: 'M',
            material: 'Tweed',
            price: 800,
            inStock: true,
            brand: LouisVuitton[0]._id    
         },
         {
             color: 'Magenta',
             size: 'L',
             material: 'Silk',
             price: 1100,
             inStock: true,
             brand: LouisVuitton[0]._id    
         },
         {
            color: 'Lavender',
            size: 'S',
            material: 'Lace',
            price: 4000,
            inStock: true,
            brand: Versace[0]._id    
         },
         {
             color: 'Black',
             size: 'M',
             material: 'Leather',
             price: 6000,
             inStock: true,
             brand: Versace[0]._id    
         }
    ]
      
    await Shirt.insertMany(shirts)
    console.log('Created shirts')
}

const run = async () => {
    await main()
    db.close()
}

run()