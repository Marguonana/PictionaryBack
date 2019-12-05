/**
 * ----------------------------------------------
 * | MODEL : Fichier contenant le model de la collection
 * | Parties de notre base de donnée
 * |
 * -----------------------------------------------
 */
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var PartieSchema = new Schema({
  section: { type: String, required: true, uppercase: true },
  listeJoueurs: Array,
  canvas: String,
  motATrouver: String,
  numPartie: Number
});

PartieSchema.set("collection", "Parties");

module.exports = mongoose.model("Partie", PartieSchema);
