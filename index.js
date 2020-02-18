const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');

const app = express();

app.use(express.static("public"));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));

app.get('/', (req,res)=> {
    res.render('home');
})


app.get('/login', (req,res) => {
    res.render('login');
})

app.get('/landing', (req,res) => {
    res.render('dash-landing');
})

app.listen(3000, () => { console.log("Server started on port 3000"); });