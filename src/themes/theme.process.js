const colTheme = require('./theme.model');
const mongoose= require('mongoose')
const ObjectId = require('mongodb').ObjectID;
mongoose.Promise=global.Promise



module.exports={

    getThemeProcess:(themeRechercher)=>{
        return new Promise((resolve,reject)=>{
            colTheme.find({}, (err, res)=> {
                if(err){
                    reject('Error');
                }else{
                    console.log(res);
                    resolve({message: "All  !",res: JSON.stringify(res)});
                }
            });
        })
    }
}

