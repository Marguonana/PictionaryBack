const mongoose = require('mongoose');
const mongoDB = 'mongodb+srv://AlROM:Pictionary@pictionary-gqsnd.mongodb.net/test?retryWrites=true&w=majority';
//mongodb+srv://AlROM:<password>@pictionary-gqsnd.mongodb.net/test?retryWrites=true&w=majority


module.exports={
    Connection:()=>{
        if (process.env.NODE_ENV==='test'){
            const Mockgoose = require('mockgoose').Mockgoose
            const mockgoose=new Mockgoose(mongoose)
            mockgoose.prepareStorage()
            .then(()=>{
                mongoose.connect(mongoDB);
                mongoose.Promise = global.Promise;
                const db = mongoose.connection;
            
                db.on('error',console.error.bind(console, 'Login error to the database'));  
                db.once('open', function(){
                    console.log("Successful connection to the database !")
                })
            })
        }else{ 
            mongoose.connect(mongoDB);
            mongoose.Promise = global.Promise;
            const db = mongoose.connection;
        
            db.on('error',console.error.bind(console, 'Login error to the database'));  
            db.once('open', function(){
                console.log("Successful connection to the database !")
            })
        }
    }
}