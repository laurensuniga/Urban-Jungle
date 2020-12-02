const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const plantSchema = new Schema({
    species: {
        type: String,
        required: true
    },
    light: {
        type: String,
        required: true
    },
    watering: {
        type: String,
    },
    petFriendly: {
        type: Boolean,
        default: false
    },
    notes: {
        type: String
    },
});



module.exports = mongoose.model('Plant', plantSchema);