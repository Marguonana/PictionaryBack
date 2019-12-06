/**
 * ----------------------------------------------
 * | MODEL : Fichier contenant le model de notre base de donnée
 * |
 * -----------------------------------------------
 */
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var JoueurSchema = new Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  score: Number
});

JoueurSchema.set("collection", "Joueurs");

module.exports = mongoose.model("Joueur", JoueurSchema);
