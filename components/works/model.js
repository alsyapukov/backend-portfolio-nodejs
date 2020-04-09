const mongoose = require('mongoose');


const workSchema = new mongoose.Schema({
  title: String,
  miniDescription: String,
  description: String,
  images: Array,
  createdAt: Date
});

mongoose.model('works', workSchema);