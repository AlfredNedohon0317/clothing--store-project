const mongoose = require('mongoose')
const {Schema} = require('mongoose')

const Pant = new Schema(
    {
       color: {type: String, required: true},
       size: {type: String, required: true},
       material: {type: String, required: true},
       price: {type: Number, required: true},
       inStock: {type: Boolean, required: true},
       brand: {type: mongoose.Schema.Types.ObjectId, ref: 'brand'}

    },
    {timestamps: true}
    );
    
    
    
    module.exports = mongoose.model('pant', Pant)