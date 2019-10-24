const mongoose = require('mongoose');
const mongoDB = "mongodb+srv://alex:alex@cluster0-gqsnd.mongodb.net/pictionary?retryWrites=true";
const lnk = require('./src/themes/theme.action')

module.exports={
    Connection:()=>{
        mongoose.connect(mongoDB,{useUnifiedTopology:true});
        mongoose.Promise = global.Promise;
        const db = mongoose.connection;
    
        db.on('error',console.error.bind(console, 'Login error to the database'));  
        db.once('open', function(){
            console.log("Successful connection to the database !");
            var req =  {'params': {
                'theme' : 'Transport'
            }}
            lnk.getWords(req);
        })
    }
}