/**
 * ---------------------------------
 * | PROCESS : 
 * |
 * ---------------------------------
 */
const colPartie = require('./partie.model');
const mongoose= require('mongoose')
mongoose.Promise=global.Promise



module.exports={

    
    partieProcess:(partie)=>{
        return new Promise((resolve,reject)=>{
            colPartie.find({}, (err, collection)=> {
                if(err){
                    console.log(err);
                    reject(err);
                }else{
                    collection.forEach((colElem)=>{
                        if (!colElem) reject('No data found');
                        if (colElem.section.toUpperCase() === partie.toUpperCase()){
                            console.log('GET parties: ', colElem.liste);
                            resolve(JSON.stringify(colElem.liste));
                        }
                    })
                }
            });
        })
    },
    updatePartie: (joueur)=>{
        return new Promise((resolve, reject)=>{
            colPartie.listeJoueurs.push({})
            colPartie.update({})
        })
    }
}

