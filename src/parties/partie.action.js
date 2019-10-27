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
            partieProcessFile.themeProcess(targetPartie)
            .then((parties)=> {res.status(200).send({data : parties})})
            .catch((err)=>{res.status(500).send({msg:'Error on db research',details : err})})
        }
    }
}