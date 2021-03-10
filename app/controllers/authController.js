const jwt = require('jsonwebtoken')
const userService = require('../services/userService')
const dotenv = require('dotenv')

const AuthController = {
    login: function (req, res) {
        const header = req.headers.authorization || ''       // get the auth header
        const token = header.split(/\s+/).pop() || ''        // and the encoded auth token
        const auth = Buffer.from(token, 'base64').toString() // convert from base64
        const parts = auth.split(/:/)                        // split on colon
        const username = parts.shift()                       // username is first
        const password = parts.join(':')

        const expiresIn = 86400

        if (username == '' || password == '')
            return res.status(401).json({ auth: false, message: 'Invalid username or password!' })

            const user = userService.authenticate(username, password, function (err, data) {
            if (err) {
                res.status(401).json({ auth: false, message: 'Invalid username or password!' })
            }
            else {
                const user = {
                    id: data.id,
                    account: data.account,
                }
                const token = jwt.sign(user, process.env.AUTH_SECRET, { expiresIn: expiresIn })

                res.cookie('token', token, { maxAge: expiresIn, httpOnly: true})
                res.status(200).json({ auth: true, token: token })
            }
        })
    },
    logout: function (req, res) {
        console.log(req.cookies.token)
        res.clearCookie('token')
        res.status(200).json({ message: 'successs' })
    },
    authenticate: function (req, res, next) {
        var token = req.cookies.token
        if (token) {
            jwt.verify(token, process.env.AUTH_SECRET, function (err, decoded) {
                if (err) {
                    return res.status(401).send({ auth: false, message: 'Invalid authorization token.' })
                } else {
                    next()
                }
            })
        } else {
            return res.status(403).send({ auth: false, message: 'Authorization token not found.' })
        }
    }
}

module.exports = AuthController