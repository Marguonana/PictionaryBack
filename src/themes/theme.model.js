/**
 * ----------------------------------------------
 * | Fichier contenant le model de notre base de donnée 
 * | Si un nouveau theme apparait, cette page devra être modifié
 * -----------------------------------------------
 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = require('mongodb').ObjectID;

var ThemeSchema = new Schema (
    {
        section: {type: String, required: true},
        liste: []
    }
);

ThemeSchema.set('collection', 'Themes');

module.exports = mongoose.model('Theme', ThemeSchema);
