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
  etatCanvas: Object,
  motATrouver: String
});

PartieSchema.set("collection", "Parties");

module.exports = mongoose.model("Partie", PartieSchema);
