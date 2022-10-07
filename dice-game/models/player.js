const mongoose = require('mongoose');
const schema = mongoose.Schema

const playerSchema = new schema({
  
    name1: { type: String, required: true },
    score1: { type: Number, required: true },
    name2: { type: String, required: true },
    score2: { type: Number, required: true }
  
});

const Player = module.exports = mongoose.model('Player', playerSchema);
