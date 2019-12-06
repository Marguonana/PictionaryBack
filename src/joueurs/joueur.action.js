/**
 * ------------------------------------------------
 * | ACTION : Endroit où seront receptionné les datas venant du front
 * | Les test de base se feront ici
 * ------------------------------------------------
 */
const joueurProcessFile = require('./joueur.process');

module.exports={

    /**_____________________
     * | route: /joueur en GET
     * | res: 
     * | req: req.query.email
     */
    rechercherUnCompte:(req,res)=>{
        if(!req.query.email){
            res.status(400);
        }

    },

    /**________________
     * |
     * |
     * |
     */
    creationDeCompte:(req, res)=>{
        console.log(req.body)
        if (!req.body.email || !req.body.username || !req.body.password){
            res.status(400);
        }
        joueurProcessFile.creationDeCompte(req.body.username,req.body.password,req.body.email)
        .then((ret) => {res.status(200).json(ret)})
        .catch((ret)=>{res.status(500).json(ret)})
        
    }


}