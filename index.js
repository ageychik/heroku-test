const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const PORT = process.env.PORT || 5000;
const app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname + '/dist'));
app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}!`);
});

// .use(express.static(path.join(__dirname, 'dist')))
// .set('dist', path.join(__dirname, 'dist'))
// .set('view engine', 'ejs')
// .get('/', (req, res) => res.render('pages/index'))
// .listen(PORT, () => console.log(`Listening on ${ PORT }`))