const mongoose = require('mongoose')
const Schema = mongoose.Schema
var player = new Schema({
name: String,
score: Number

 })
module.exports = mongoose.model("player", playerSchema)
