/**
 * ----------------------------------------------
 * | Fichier contenant le model de notre base de donnée 
 * | Si un nouveau theme apparait, cette page devra être modifié
 * -----------------------------------------------
 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = require('mongodb').ObjectID;

var Theme = new Schema (
    {
        theme: {
            transport:{type:Array},
            fruit: {type: Array},
            jeu: {type: Array},
            animaux: {type: Array},
            plante: {type:Array},
            ville: {type:Array}
        }
    }
);

module.exports = mongoose.model('Theme', Theme);
