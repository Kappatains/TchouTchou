const mongoose = require('mongoose');

const GareSchema = new mongoose.Schema({
    name: {
        type: String
    },
    city:
        [{ 
            type: mongoose.Schema.Types.ObjectId,
            ref:"City",
            required: true
        }],
    line:
        [{ 
            type: mongoose.Schema.Types.ObjectId,
            ref:"Line"
        }],
    //Type fret ou tourisme
    type: {
        type: String
    }
}
)

module.exports = mongoose.model('Gare', GareSchema, 'Gare')