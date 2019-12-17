const express = require('express');
const bodyParser= require('body-parser')
const router = express.Router();
const joueurActionFile = require('./joueur.action');

router.use(bodyParser.urlencoded({limit: '100mb' , extended: true }));
router.use(bodyParser.json({limit: '100mb' , extended: true }));
//------------------------------------------------------

//router.get('/',joueurActionFile.rechercherUnCompte);
router.post('/',joueurActionFile.creationDeCompte);
router.get('/:id', joueurActionFile.getParId);
router.get('/', joueurActionFile.getParIdentifiants);


module.exports = router;