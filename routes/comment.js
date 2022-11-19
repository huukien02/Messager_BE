var express = require('express');
var router = express.Router();

var db = require('../models/comments')

/* GET home page. */
router.post('/', function (req, res, next) {

    const cmt = new db({
        noiDung: req.body.message,
        ngGui: req.body.username,
        ngNhan: req.body.usernameFriend,
        date: req.body.date,
        time: req.body.d
    })

    cmt.save().then(() => {
        res.json("Đã gửi tin nhắn")
    })
        .catch((err) => {
            if (err) throw err;
        });
});

module.exports = router;
