const jwt = require('jsonwebtoken')

const Auth = function (req, res, next) {

    if (req.headers.authorization) {

        const token = req.headers.authorization

        const infor = jwt.verify(token, 'suyt');

        console.log(infor);


        if (infor) {
            return next()
        }
    }

    else {
        res.status(200).json({ message: 'Vui lòng Login' })
    }

};

module.exports = Auth;