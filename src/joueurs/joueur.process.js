/**
 * ---------------------------------
 * | PROCESS : 
 * |
 * ---------------------------------
 */
const colJoueur = require('./joueur.model');
const mongoose= require('mongoose')
mongoose.Promise=global.Promise



module.exports={

    
    creationDeCompte:(usernameReq, passwordReq, emailReq)=>{
        return new Promise((resolve,reject)=>{
            colJoueur.findOne({email : emailReq.toUpperCase()}, (err, user)=> {
                if(err){
                    reject(err);
                }
                if(!user){
                    let nouveauJoueur = new colJoueur({
                        username: usernameReq,
                        email: emailReq.toUpperCase(),
                        password: passwordReq,
                        score: 0 
                    })
                    nouveauJoueur.save((err)=>{
                        if(err) reject("Probleme lors de la creation de compte.");
                        resolve("Utilisateur créé.")
                    });
                }else{
                    reject("Un utilisateur a déjà été créé avec cet email.")
                }
            });
        })
    },

    rechercherParId:(id)=>{
        return new Promise((resolve, reject)=>{
            colJoueur.find({_id:id}, (err, joueur)=>{
                if(err){
                    reject(err);
                }else{
                    resolve(joueur);
                }
            })
        })
    }
}

