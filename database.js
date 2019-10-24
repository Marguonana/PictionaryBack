const mongoose = require('mongoose');
const mongoDB = "mongodb+srv://alex:alex@cluster0-gqsnd.mongodb.net/pictionary?retryWrites=true";


module.exports={
    Connection:()=>{
        mongoose.connect(mongoDB);
        mongoose.Promise = global.Promise;
        const db = mongoose.connection;
    
        db.on('error',console.error.bind(console, 'Login error to the database'));  
        db.once('open', function(){
            console.log("Successful connection to the database !")
        })
    }
}