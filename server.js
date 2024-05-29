
const PORT = process.env.PORT || 3002;
const express = require('express')
const app = express()
const db = require('./db')
const brandController = require('./controllers/brandController.js')
const shirtController = require('./controllers/shirtController.js' )
const pantController = require('/controllers/pantController.js' )

app.use(logger('dev'))
app.use(bodyParser.json())

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))


app.get('/', (req, res) => res.send('initilizing server back end!'))

app.get('/brands', brandController.getAllBrands)

app.get('/brands/:id', brandController.getBrandById)

app.post('/brands', brandController.createBrands)

app.put('/brands/:id', brandController.updateBrands)

app.delete('/brands/:id', brandController.deleteBrand)
