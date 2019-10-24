/**
 * ------------------------------------------------
 * | ACTION : Endroit où seront receptionné les datas venant du front
 * | Les test de base se feront ici
 * ------------------------------------------------
 */
// const colImages  = require('./modelsImages');
const themeProcessFile = require('./theme.process');

module.exports={

    /**
     * | route: /theme/words
     * | res: retourne la liste des mots dans data
     * | req: req.param.theme contient le theme choisi
     */
    getWords:(req,res)=>{
        let targetTheme= req.params.theme;
        if (!targetTheme){
           return res.status(400);
        }else{
            themeProcessFile.themeProcess(targetTheme)
            .then((words)=> {res.status(200).send({data : words})})
            .catch((err)=>{res.status(500).send({msg:'Error on db research',details : err})})
        }
    }
}