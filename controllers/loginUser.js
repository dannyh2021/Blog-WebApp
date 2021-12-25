const bcrpyt = require('bcrypt')
const User = require('../models/User')

module.exports = (req, res) => {
    const { username, password } = req.body;

    User.findOne({username: username}, (error, user) => {
        if (user) {
            bcrpyt.compare(password, user.password, (error, same) => {
                if (same) { // if passwords match
                    // store user session
                    res.redirect('/')
                } else {
                    res.redirect('/auth/login')
                }
            })
        } else {
            res.redirect('/auth/login')
        }
    })
}