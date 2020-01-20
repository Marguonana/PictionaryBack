/**
 * ---------------------------------
 * | PROCESS :
 * |
 * ---------------------------------
 */
const colPartie = require("./partie.model");
const mongoose = require("mongoose");
const ObjectId = require("mongodb").ObjectID;
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

  partieProcess: partie => {
    return new Promise((resolve, reject) => {
      colPartie.find({}, (err, collection) => {
        if (err) {
          console.log(err);
          reject(err);
        } else {
          collection.forEach(colElem => {
            if (!colElem) reject("No data found");
            if (colElem.section.toUpperCase() === partie.toUpperCase()) {
              console.log("GET parties: ", colElem.liste);
              resolve(JSON.stringify(colElem.liste));
            }
          });
        }
      });
    });
  },

  postCanvasProcess: (theme, canvas) => {
    // console.log(theme);
    return new Promise((resolve, reject) => {
      colPartie.findOne({ section: theme }, function(err, doc) {
        // console.log(doc);
        doc.canvas = canvas;
        doc.save();
        resolve();
      });
    });
  },

  rejoindrePartie: data => {
    return new Promise((resolve, reject) => {
      colPartie.findByIdAndUpdate(
        { _id: data.idPartie },
        {
          $push: {
            listeJoueurs: {
              nom: data.infosJoueur.username,
              id: data.infosJoueur.id
            }
          }
        },
        (err, doc) => {
          if (err) {
            reject(err);
          } else {
            resolve(doc);
          }
        }
      );
    });
  },

  //cette fonction ne fonctionne pas, le canvas n'est pas mis à jour en base
  mettreAJourCanvas: (canvas, idPartie) => {
    return new Promise((resolve, reject) => {
      colPartie.findByIdAndUpdate(
        {
          _id: ObjectId(idPartie)
        },
        {
          canvas: canvas
        },
        (err, res) => {
          if (err) {
            reject(err);
          } else {
            resolve(res);
          }
        }
      );
    });
  },

  getMotATrouver: idPartie => {
    return new Promise((resolve, reject) => {
      colPartie.findById({ _id: idPartie }, (err, res) => {
        if (err) {
          reject(err);
        } else {
          resolve(res.motATrouver);
        }
      });
    });
  },

  themeProcess: (theme, id, pseudo) => {
    console.log("theme : ", theme);
    return new Promise((resolve, reject) => {
      colPartie.find({}, (err, collection) => {
        if (err) {
          console.log(err);
          reject(err);
        } else {
          collection.forEach(colElem => {
            if (!colElem) reject("No data found");
            if (colElem.section === theme) {
              console.log("GET WORDS: ", colElem.reponses);
              // Enregistrement du joueur dans la partie
              colElem.listeJoueurs.push({ id: id, username: pseudo });
              colElem.save();
              // connexionDuJoueur(theme, id, pseudo);
              resolve({ id: colElem._id, words: colElem.reponses });
            }
          });
        }
      });
    });
  },

  getAllThemes: () => {
    return new Promise((resolve, reject) => {
      let themes = [];
      colPartie.find({}, (err, collection) => {
        if (err) {
          reject(err);
        } else {
          collection.forEach(colElem => {
            if (!colElem) {
              reject("No data found");
            } else {
              themes.push({
                theme: colElem.section,
                id: colElem._id,
                image: colElem.image
              });
            }
          });
          resolve(themes);
        }
      });
    });
  },

  getCanvas: idPartie => {
    return new Promise((resolve, reject) => {
      colPartie.findById({ _id: idPartie }, (err, partie) => {
        if (err) {
          reject(err);
        } else {
          resolve(partie.canvas);
        }
      });
    });
  },

  getMessages: idPartie => {
    return new Promise((resolve, reject) => {
      colPartie.findById({ _id: idPartie }, (err, partie) => {
        if (err) {
          reject(err);
        } else {
          resolve(partie.messages);
        }
      });
    });
  },

  postMessage: (idPartie, message) => {
    return new Promise((resolve, reject) => {
      colPartie.findById({ _id: idPartie }, function(err, partie) {
        if (err) reject(err);
        console.log(partie.messages);
        partie.messages.push(message);
        partie.save();
        resolve();
      });
    });
  },

  joueurEnLigne: idPartie => {
    return new Promise((resolve, reject) => {
      colPartie.findById({ _id: idPartie }, (err, partie) => {
        if (err) {
          reject(err);
        } else {
          // console.log(partie.listeJoueurs)
          console.log(partie.listeJoueurs);
          resolve(partie.listeJoueurs);
        }
      });
    });
  },

  deconnexion: (idPartie, idJoueur) => {
    return new Promise((resolve, reject) => {
      colPartie.findById({ _id: idPartie }, (err, partie) => {
        if (err) {
          reject(err);
        } else {
          partie.listeJoueurs = partie.listeJoueurs.filter(
            joueur => joueur.id != idJoueur
          );
          console.log(partie.listeJoueurs);
          partie.save();
          resolve("deconnexion...");
        }
      });
    });
  }
};
