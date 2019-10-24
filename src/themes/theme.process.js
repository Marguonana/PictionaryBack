/**
 * ---------------------------------
 * | PROCESS : 
 * |
 * ---------------------------------
 */
const colTheme = require('./theme.model');
const mongoose= require('mongoose')
const ObjectId = require('mongodb').ObjectID;
mongoose.Promise=global.Promise



module.exports={

    themeProcess:(theme)=>{
        return new Promise((resolve,reject)=>{
            colTheme.find({}, (err, collection)=> {
                if(err){
                    reject(err);
                }else{
                    collection.forEach((colElem)=>{
                        if (colElem.section === theme){
                            resolve(JSON.stringify(colElem.liste));
                        }
                    })
                }
            });
        })
    }
}

