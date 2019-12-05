const express = require('express');
var cors = require('cors');
const app = express();
const port = 3000;
// const routesUsers = require('./src/compUsers/routesUsers');
const routeTheme = require('./src/themes/theme.route');
const routePartie = require('./src/parties/partie.route')
const dataBase = require('./dataBase');

app.use(cors({
  origin: 'http://localhost:4200'
}));

// Images call-----------------------------------------------------------
app.use('/theme',routeTheme)
app.use('/partie',routePartie)

/**
 * Toutes les autres routes tomberont ici :)
 */
app.use((req,res,next)=> {
  const err = new Error("Not Implemented");
  err.status = 501;
  next(err);
});

// Users call------------------------------------------------------------
//app.use('/users', routesUsers);

//Connection à la DB, Lancement du serveur-------------------------------
dataBase.Connection()
app.listen(port,function (req, res) {
  console.log('Express server listening on port: ' + port);
})
module.exports= app

