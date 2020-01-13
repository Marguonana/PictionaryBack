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
                    console.log(err);
                    reject(err);
                }else{
                    collection.forEach((colElem)=>{
                        if (!colElem) reject('No data found');
                        if (colElem.section.toUpperCase() === theme.toUpperCase()){
                            console.log('GET WORDS: ', colElem.liste);
                            resolve({id: colElem._id, words: colElem.liste});
                        }
                    })
                }
            });
        })
    },


    getAllThemes:()=>{
        return new Promise((resolve, reject)=>{
            colTheme.find({}, (err, collection)=>{
                if(err){
                    reject(err);
                }else{
                    resolve(collection);
                }
            })
        })
    }
}

