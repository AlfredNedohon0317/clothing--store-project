const db = require('../db')
const Brand = require('../models/brand')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const brands = [
        { name: 'Chanel', yearEstablished: 1910, location: 'London, United Kingdom' },
        { name: 'Dior', yearEstablished: 1946, location: 'Paris, France' },    
        { name: 'Gucci', yearEstablished: 1921, location: 'Florence, Italy' },  
        { name: 'Louis Vuitton', yearEstablished: 1854, location: 'Paris, France' },
        { name: 'Versace', yearEstablished: 1978, location: 'Milan, Italy' }            
      ]

      await Brand.insertMany(brands)
      console.log('Created brands')
}

const run = async () => {
    await main()
    db.close()
}

run()