const mongoose = require('mongoose');


const LineSchema = new mongoose.Schema({
    name: {
        type: String
    },
    listGare: 
        [{ 
            type: mongoose.Schema.Types.ObjectId,
            ref:"Gare",
            required: true
        }],
    //Type fret ou tourisme
    type: {
        type: String
    }
    
}
)

module.exports = mongoose.model('Line', LineSchema, 'Line')