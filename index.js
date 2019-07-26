const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 5000;

const app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname + '/dist'));

require('dotenv').config();

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}!`);
});

// mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true })
//     .then(() => {
//         console.log('database connected');
//     })
//     .catch((err) => {
//         console.log(err);
//     });

  // .use(express.static(path.join(__dirname, 'dist')))
  // .set('dist', path.join(__dirname, 'dist'))
  // .set('view engine', 'ejs')
  // .get('/', (req, res) => res.render('pages/index'))
  // .listen(PORT, () => console.log(`Listening on ${ PORT }`))
