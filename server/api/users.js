const router = require('express').Router();
const model = require('../models/index.js');

router
    .get('/', (req, res) => {
        model.user.find()
            .then((userList) => {
                console.log('asfasdfasd')
                res.json(userList);
            })
            .catch((error) => {
                console.log(error);

                res.json({
                    ok: false,
                    error: 'Error. Please try again later.'
                })
            })
    })
    .post('/add', (req, res) => {
        let userData = req.query;

        console.log(model.user);

        model.user.create(userData)
            .then((userList) => {
                res.json(userList);
            })
            .catch((error) => {
                console.log(error);

                res.json({
                    ok: false,
                    error: 'Error. Please try again later.'
                })
            });
    });

module.exports = router;
