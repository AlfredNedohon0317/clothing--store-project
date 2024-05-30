const express = require('express')
const db = require('./db')
const cors = require('cors')
const logger = require('morgan')
const bodyParser = require('body-parser')
const brandController = require('./controllers/brandController.js')
const shirtController = require('./controllers/shirtController.js' )
const pantController = require('./controllers/pantController.js' )

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const PORT = process.env.PORT || 3001

const app = express()

app.use(cors())
app.use(logger('dev'))
app.use(bodyParser.json())

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))

app.get('/', (req, res) => res.send('initializing server back end!'))

app.get('/brands', brandController.getAllBrands)

app.get('/brands/:id', brandController.getBrandById)

app.post('/brands', brandController.createBrands)

app.put('/brands/:id', brandController.updateBrands)

app.delete('/brands/:id', brandController.deleteBrand)
