const express = require('express'); // Server packadge
const bodyParser = require('body-parser'); // data
const ejs = require('ejs');
const path = require('path')
const PORT = process.env.PORT || 5000
const index = require('./routes/index');


const app = express();


app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')))
app.listen(PORT, () => console.log(`Listening on ${PORT}`));

app.use('/' ,index);
