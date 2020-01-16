/**
 * ---------------------------------
 * | PROCESS :
 * |
 * ---------------------------------
 */
const colJoueur = require("./joueur.model");
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

module.exports = {
  creationDeCompte: (usernameReq, passwordReq, emailReq) => {
    return new Promise((resolve, reject) => {
      colJoueur.findOne({ email: emailReq.toUpperCase() }, (err, user) => {
        if (err) {
          reject(err);
        }
        if (!user) {
          let nouveauJoueur = new colJoueur({
            username: usernameReq,
            email: emailReq.toUpperCase(),
            password: passwordReq,
            score: 0
          });
          nouveauJoueur.save(err => {
            if (err) reject("Probleme lors de la creation de compte.");
            resolve("Utilisateur créé.");
          });
        } else {
          reject("Un utilisateur a déjà été créé avec cet email.");
        }
      });
    });
  },

  getParId: id => {
    return new Promise((resolve, reject) => {
      colJoueur.find({ _id: id }, (err, joueur) => {
        if (err) {
          resolve("Aucun joueur trouvé");
        } else {
          resolve(joueur);
        }
      });
    });
  },

  postParLogin: (pseudo, mdp) => {
    return new Promise((resolve, reject) => {
      colJoueur.find({ username: pseudo, password: mdp }, (err, res) => {
        
        if (err) {
          reject(err);
        } else if (res === null || !res[0]) {
          reject({err:"Compte inexistant."});
        } else {
          var user = {username: res[0].username, _id: res[0]._id, score: res[0].score, email: res[0].email};
          console.log('resultat login ' ,user)
          resolve(user);
        }
      });
    });
  },

  supprimerCompte: id => {
    return new Promise((resolve, reject) => {
      console.log(id);
      colJoueur.findByIdAndRemove({ _id: id }, (err, res) => {
        if (err) {
          reject(err);
        } else {
          resolve(res);
        }
      });
    });
  }
};
