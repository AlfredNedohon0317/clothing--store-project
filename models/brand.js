const mongoose = require('mongoose')
const {Schema} = require('mongoose')

const Brand = new Schema(
    {
       name: {type: String, required: true},
       yearEstablished:[{type: Number, required: true}],
       location: {type: String, required: true}
    },
    {timestamps: true}
    );
    
    
    
    module.exports = mongoose.model('brand', Brand)