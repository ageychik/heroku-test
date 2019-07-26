const router = require('express').Router();
const users = require('./users.js');

router
    .get('/', (req, res) => {
        res.json({
            status: 'API Its Working'
        });
    })
    .use('/users', users);


module.exports = router;