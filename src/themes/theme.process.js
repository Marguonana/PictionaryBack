const Theme = require('./theme.model');
const mongoose= require('mongoose')
const ObjectId = require('mongodb').ObjectID;
mongoose.Promise=global.Promise



module.exports={

    getThemeProcess:(themeRechercher)=>{
        return new Promise((resolve,reject)=>{
            Theme.findOne({theme : themeRechercher}, (err, res)=> {
                if(err){
                    reject('Error')
                }else{
                    console.log(res);
                    resolve({message: "All images !",res: JSON.stringify(res)});
                }
            });
        })
    }
}

