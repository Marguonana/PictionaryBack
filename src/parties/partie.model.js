/**
 * ----------------------------------------------
 * | MODEL : Fichier contenant le model de notre base de donnée
 * |
 * -----------------------------------------------
 */
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var PartieSchema = new Schema({
  section: { type: String, required: true },
  listeJoueurs: Array,
  canvas: String,
  numPartie: Number,
  motATrouver: String,
  messages: Array,
  reponses: Array
});

PartieSchema.set("collection", "Parties");

module.exports = mongoose.model("Partie", PartieSchema);
