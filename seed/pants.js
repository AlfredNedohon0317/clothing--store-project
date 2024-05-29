const db = require('../db');
const { Pant } = require('../models/pant');
const { Brand } = require('../models/brand')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const Chanel = await Brand.find({name: 'Chanel'});
    const Dior = await Brand.find({name:'Dior'});
    const Gucci = await Brand.find({name: 'Gucci'});
    const LouisVuitton = await Brand.find({name: 'Louis Vuitton'});
    const Versace = await Brand.find({name: 'Versace'});
    
    const pants = [
        {
            color: 'Pink',
            size: 'S',
            material: 'Chiffon',
            price: 7550,
            inStock: true,
            brand: Chanel[0]._id
     
         },
         {
            color: 'Blue',
            size: 'M',
            material: 'Lace',
            price: 4589,
            inStock: false,
            brand: Chanel[0]._id
     
         },
         {
            color: 'Brown',
            size: 'XS',
            material: 'Corduroy',
            price: 687,
            inStock: true,
            brand: Gucci[0]._id
     
         },
         {
            color: 'Lilac',
            size: 'XL',
            material: 'Tweed',
            price: 1575,
            inStock: true,
            brand: Gucci[0]._id
     
         },
         {
            color: 'Tan',
            size: 'M',
            material: 'Cotton',
            price: 897,
            inStock: true,
            brand: LouisVuitton [0]._id
     
         },
         {
            color: 'Lilac',
            size: 'XL',
            material: 'Tweed',
            price: 1575,
            inStock: true,
            brand: LouisVuitton[0]._id
     
         },
         {
            color: 'Orange',
            size: 'S',
            material: 'Linen',
            price: 3454,
            inStock: true,
            brand: Dior[0]._id
     
         },
         {
            color: 'Fuschia',
            size: 'S',
            material: 'Chiffon',
            price: 7645,
            inStock: true,
            brand: Dior[0]._id
     
         },
         {
            color: 'Amber',
            size: 'L',
            material: 'Satin',
            price: 4532,
            inStock: true,
            brand: Versace[0]._id
     
         },
         {
            color: 'Black',
            size: 'M',
            material: 'Chiffon',
            price: 3445,
            inStock: true,
            brand: Versace[0]._id
     
         },
    
    
    ]
    await Pants.insertMany(pants)
    console.log('Created pants!')

}

const run = async () => {
    await main()
    db.close()
}