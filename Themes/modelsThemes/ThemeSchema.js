const mongoose = require('mongoose')

const ThemeSchema = new mongoose.Schema({
  theme: {
    libelle: String,
    mots:[]
  }
  
})

module.exports = ThemeSchema