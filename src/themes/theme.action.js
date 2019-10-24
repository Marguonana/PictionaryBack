/**
 * ------------------------------------------------
 * | Action : Endroit où seront receptionné les datas venant du front
 * | Les test de base se feront ici
 * ------------------------------------------------
 */
// const colImages  = require('./modelsImages');
const themeProcess = require('./theme.process');

module.exports={

    getTheme:(req,res)=>{
        let libelleTheme= req.params.theme;
        if (!libelleTheme){
           return res.status(400);
        }else{
            themeProcess.getThemeProcess('theme');
        }
    }
}