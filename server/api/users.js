const router = require('express').Router();
const userModel = require('../models/index.js').user;

router
    .get('/', (req, res) => {
        userModel.find()
            .then((userList) => {
                res.json(userList);
            })
            .catch((error) => {

                res.json({
                    ok: false,
                    error: error
                })
            })
    })
    .get('/:username', (req, res) => {
        let username = req.params.username;

        userModel.findOne({username : username})
            .then((data) => {
                res.json({
                    ok: true,
                    data: data
                })
            })
            .catch((error) => {
                res.json({
                    ok: false,
                    error: error
                })
            })
    })
    .put('/:username', (req, res) => {
        let username = req.params.username;
        userModel.findOneAndUpdate(
            {username : username},
            {$set : req.query},
            {useFindAndModify: false},
            ((error, doc) => {
                if(error) throw error;

                return doc;
            })
            )
            .then((data) => {
                res.json({
                    ok: true,
                    data: data
                })
            })
            .catch((error) => {
                res.json({
                    ok: false,
                    data: error
                })
            })
    })
    .delete('/:username', (req, res) => {
        let username = req.params.username;
        userModel.findOneAndDelete(
            {username : username},
            ((error, doc) => {
                if(error) throw error;

                return doc
            })
        )
            .then((data) => {
                res.json({
                    ok: true,
                    data: data
                })
            })
            .catch((error) => {
                res.json({
                    ok: false,
                    data: error
                })
            })
    })
    .post('/add', (req, res) => {
        let userData = req.query;

        userModel.create(userData)
            .then((user) => {
                res.json({
                    ok: true,
                    data: user
                });
            })
            .catch((error) => {
                res.json({
                    ok: false,
                    error: error
                })
            });
    });

module.exports = router;
