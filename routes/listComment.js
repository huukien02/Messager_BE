var express = require('express');
var router = express.Router();
var db = require('../models/comments')
var Auth = require('./auth')

/* GET home page. */
router.get('/', function (req, res, next) {
    db.find({}, (err, docs) => {
        res.json(docs)
    })
});


router.get('/:gui/:nhan', function (req, res, next) {
    db.find({ ngGui: req.params.gui, ngNhan: req.params.nhan }, (err, docs) => {
        res.json(docs)
    })
});

// router.get('/friend/:nhan/:gui', function (req, res, next) {
//     db.find({ ngNhan: req.params.nhan, ngGui: req.params.gui }, (err, docs) => {
//         res.json(docs)
//     })
// });


module.exports = router;
