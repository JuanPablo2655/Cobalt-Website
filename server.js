const express = require('express');
const app = express()
const config = require('./config.json');
const port = config.port;

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.render('pages/index');
});

app.get('/nationstates', (req, res) => {
    res.redirect('http://www.nationstates.net/region=cobalt_network');
});

app.get('/discord', (req, res) => {
    let code = config.invite
    res.redirect(`http://discordapp.com/invite/${code}`);
});

app.get('/resources', (req, res) => {
    res.render('pages/resources');
});

app.get('/about', (req, res) => {
    res.render('pages/about');
});

app.get('/login', (req, res) => {
    res.render('pages/login');
});

app.listen(port, () => {
    console.log(`cobaltia is listening on port ${port}`);
});