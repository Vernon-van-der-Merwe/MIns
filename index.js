const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const path = require('path')
const PORT = process.env.PORT || 5000

const app = express();
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended:true}));


app.use(express.static(path.join(__dirname, 'public')))
app.listen(PORT, () => console.log(`Listening on ${ PORT }`));

app.get('/', (req,res)=> {
    res.render('home');
})


app.get('/login', (req,res) => {
    res.render('login');
})

app.get('/landing', (req,res) => {
    res.render('dash-landing');
})

