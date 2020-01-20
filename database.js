const mongoose = require('mongoose');
const mongoDB = "mongodb+srv://alex:alex@cluster0-gqsnd.mongodb.net/pictionary?retryWrites=true";

module.exports={
    Connection:()=>{
        mongoose.connect(mongoDB,{useUnifiedTopology:true, useNewUrlParser:true});
        mongoose.Promise = global.Promise;
        const db = mongoose.connection;
    
        db.on('error',console.error.bind(console, 'Unable to connect to the mongodb instance.'));  
        db.once('open', function(){
            console.log("Successful connection to the database !");
            // --------MOCK FRONT
            // var req =  {'query': {
            //     'theme' : 'Transport'
            // }}
            // lnk.getWords(req);
        })
    }
}