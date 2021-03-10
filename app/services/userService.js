const User = require('../src/models/userModel')

var userService = function () { };

userService.prototype.authenticate = function (account, password, callback) {
    User.findAll({
        where:{
            account: account,
            password: password
        }
    }).then(users => {
        if (users.length == 1)
            callback(false, users[0].dataValues);
        else
            callback(true, null);

    }).catch(err => {
        console.log(err);
    })
}

module.exports = new userService();