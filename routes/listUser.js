var express = require('express');
var router = express.Router();
var db = require('../models/accout')
var Auth = require('./auth')

/* GET home page. */
router.get('/', Auth, function (req, res, next) {
    db.find({}, (err, docs) => {
        res.json(docs)
    })
});

module.exports = router;
