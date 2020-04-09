const mongoose = require('mongoose');


const techSchema = new mongoose.Schema({
  title: String,
  description: String,
  percent: Number,
  createdAt: Date
});

mongoose.model('techs', techSchema);