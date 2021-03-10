const router = require("express").Router();
const Account = require('../src/models/account')

router.get('/aaa', (req, res) =>
    Account.findAll()
        .then(account => {
            console.log(account);
            res.sendStatus(200)
        })
        .catch(err => console.log(err))
);


router.post('/register', async (req, res) => {
    try {
        Account.create(
            req.body , {
                fields: ['account', 'password']
            }
        ).then(function (insertedAccount) {

            console.log(insertedAccount)


            console.log(insertedAccount.dataValues);
        })

        res.send('Success');
    }
    catch (err) {
        res.status(400).send(err);
    }
});

module.exports = router;