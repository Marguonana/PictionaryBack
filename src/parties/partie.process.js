/**
 * ---------------------------------
 * | PROCESS :
 * |
 * ---------------------------------
 */
const colPartie = require("./partie.model");
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

module.exports = {

  getNbJoueursDesThemes: () => {
    return new Promise((resolve, reject) => {
      colPartie.find({}, (err, collection) => {
        if (err) {
          console.log(err);
          reject(err);
        } else {
          if (!collection) {
            reject("Aucune liste de thèmes trouvée");
          }
          collection.forEach(colElem => {
            if (!colElem) {
              reject("No data found");
            } else {
              res.push({
                theme: colElem.section,
                joueurs: colElem.listeJoueurs
              });
              resolve(res);
            }
          });
        }
      });
    });
  },

    
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
        });
    },
    
    postCanvasProcess: (theme,canvas) => {
        console.log(theme)
        return new Promise((resolve,reject)=> {
            colPartie.findOne({ section: theme }, function (err, doc){
                console.log(doc)
                doc.canvas = canvas;
                doc.save();
                resolve();
              });
        });
    },


  updatePartie: (data) => {
    return new Promise((resolve, reject) => {
      let partieApresAjout = colPartie.update(
        { section: data.section },
        { $push: { listeJoueurs: { pseudo: data.pseudo, score: data.score } } }
      );
      res.push(partieApresAjout);
      resolve(res);
    })
  }
  
};
