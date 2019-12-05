const express = require('express');
const bodyParser= require('body-parser')
const router = express.Router();
const themeActionFile = require('./theme.action');

router.use(bodyParser.urlencoded({limit: '100mb' , extended: true }));
router.use(bodyParser.json({limit: '100mb' , extended: true }));
//------------------------------------------------------

router.get('/words',themeActionFile.getWords);

module.exports = router;