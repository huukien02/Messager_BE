var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');

var db = require('../models/accout')

/* GET home page. */
router.post('/', function (req, res, next) {

    db.find({}, (err, docs) => {
        var check = docs.find((un) => {
            return un.username == req.body.username && un.password == req.body.password;
        })

        if (check != null) {
            var obj = {
                id: check._id,
                username: check.username
            }

            var token = jwt.sign(obj, 'suyt');

            res.status(200).json({
                message: 'Login thành công',
                token: token
            })
        }

        if (check == null) {
            res.status(400).json('Tài khoản hoặc mật khẩu không chính xác')
        }
    })
});

module.exports = router;
