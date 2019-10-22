const mongoose = require('mongoose')

const ThemeSchema = new mongoose.Schema({
  theme: {
    libelle: String,
    items:[String]
  }
  
})

module.exports = ThemeSchema