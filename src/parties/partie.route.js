const express = require('express');
const bodyParser= require('body-parser')
const router = express.Router();
const partieActionFile = require('./partie.action');

router.use(bodyParser.urlencoded({limit: '100mb' , extended: true }));
router.use(bodyParser.json({limit: '100mb' , extended: true }));
//------------------------------------------------------

router.get('/',partieActionFile.getParties);
//router.get('/canvas', partieActionFile.getCanvas);
router.get('/parties', partieActionFile.getParties);
router.get('/nbJoueurs', partieActionFile.getNbJoueurs);

//router.put('/canvas/:id',partieActionFile.putCanvas);

router.post('/canvas',partieActionFile.postCanvas);


module.exports = router;