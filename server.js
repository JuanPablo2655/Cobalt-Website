const express = require('express');
const app = express()
const config = require('./config.json');
const port = config.port;

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.render('pages/index');
})

app.listen(port, () => {
    console.log(`cobaltia is listening on port ${port}`);
})