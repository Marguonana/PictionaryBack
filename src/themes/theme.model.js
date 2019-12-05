/**
 * ----------------------------------------------
 * | MODEL : Fichier contenant le model de la collection
 * | Themes de notre base de donnée 
 * | 
 * -----------------------------------------------
 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = require('mongodb').ObjectID;

var ThemeSchema = new Schema (
    {
        section: {type: String, required: true, uppercase: true},
        liste: []
    }
);

ThemeSchema.set('collection', 'Themes');

module.exports = mongoose.model('Theme', ThemeSchema);
