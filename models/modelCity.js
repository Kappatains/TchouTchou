const mongoose = require('mongoose');

const CitySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    zipCode: {
        type: Number,
    },
    listGare: 
        [{ 
            type: mongoose.Schema.Types.ObjectId,
            ref:"Gare",
        }]
}
)

module.exports = mongoose.model('City', CitySchema, 'City')