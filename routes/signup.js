var express = require('express');
var router = express.Router();

var db = require('../models/accout')

/* GET home page. */
router.post('/', function (req, res, next) {

    db.findOne({ username: req.body.username }, (err, check) => {
        if (err) throw err;

        if (check == null) {
            const accout = new db({
                username: req.body.username,
                password: req.body.password,
            })

            accout.save().then(() => {
                res.json("Đăng kí thành công")
            })
                .catch((err) => {
                    if (err) throw err;
                });
        }
        if (check != null) {
            res.status(400).json('Tài khoản đã tồn tại')
        }
    })
});

module.exports = router;
