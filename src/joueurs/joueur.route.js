const express = require('express');
const bodyParser= require('body-parser')
const router = express.Router();
const joueurActionFile = require('./joueur.action');

router.use(bodyParser.urlencoded({limit: '100mb' , extended: true }));
router.use(bodyParser.json({limit: '100mb' , extended: true }));
//------------------------------------------------------

router.get('/',joueurActionFile.rechercherUnCompte);
//router.get('/canvas', partieActionFile.getCanvas);

//router.put('/canvas/:id',partieActionFile.putCanvas);

router.post('/',joueurActionFile.creationDeCompte);


module.exports = router;