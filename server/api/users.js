const router = require('express').Router();
const model = require('../models/index.js');

router
    .get('/', (req, res) => {
        model.user.find()
            .then((userList) => {
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
    .get('/:id', (req, res) => {
        if(!req.params) return console.log('Error, user not found. Please try again later.');

        model.user.findOne({id : req.params})
            .then((data) => {
                console.log(1, data)

                res.json({
                    status: 'ok',
                    data: data
                })
            })
    })
    .put('/:id', (req, res) => {
        let userData = req.query;
        console.log(userData)
    })
    .delete('/:id', (req, res) => {

    })
    .post('/add', (req, res) => {
        let userData = req.body;
        console.log(userData);
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
