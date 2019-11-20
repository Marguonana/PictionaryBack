/**
 * ------------------------------------------------
 * | ACTION : Endroit où seront receptionné les datas venant du front
 * | Les test de base se feront ici
 * ------------------------------------------------
 */
// const colImages  = require('./modelsImages');
const partieProcessFile = require('./partie.process');

module.exports={

    /**
     * | route: /theme/words
     * | res: retourne la liste des mots dans data
     * | req: req.param.theme contient le theme choisi
     */
    getParties:(req,res)=>{
        let targetPartie= req.query.partie;
        if (!targetPartie){
           return res.status(400);
        }else{
            partieProcessFile.partieProcess(targetPartie)
            .then((parties)=> {res.status(200).send({data : parties})})
            .catch((err)=>{res.status(500).send({msg:'Error on db research',details : err})})
        }
    },
    joinAction:(req, res)=>{
        if(!req.query.id || !req.query.pseudo || !req.query.theme){
            return res.status(400);
        }else{
            let infosJoueur = {id : req.query.id, pseudo : req.query.pseudo, score : req.query.score, theme : req.query.theme};
            partieProcessFile.updatePartie(infosJoueur)
            .then((infosJoueur)=>{res.status(200).send({data : "Le joueur "+infosJoueur.pseudo+ " a été ajouté à la partie "+infosJoueur.theme})})
            .catch((err)=>{res.status(500).send({msg:'Error while adding',details : err})});
        }
    }


}