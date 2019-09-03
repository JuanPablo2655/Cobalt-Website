const express = require('express')
const app = express();
const config = require('./config.json');
const port = config.port;
const mongoose = require('./utils/mongoose')

const authRoutes = require('./routes/auth');
const auth = require('./utils/passport')

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

mongoose.init();

app.get('/', (req, res) => {
    res.render('pages/index')
});

app.use('/auth', authRoutes);

app.listen(port, () => {
    console.log(`[Website]\tOnline on port ${port}!`);
});