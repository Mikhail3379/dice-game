const mongoose = require('mongoose');
const schema = mongoose.Schema

const playerSchema = new schema({
  
    name: { type: String, required: true },
    score: { type: Number, required: true },
  
});

const Player = module.exports = mongoose.model('Player', playerSchema);