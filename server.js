const express = require('express');
const config = require('./config.json');
const routes = require('./routes');
require('./strategies/discord');
const passport = require('passport');
const mongoose = require('./utils/mongoose');
const session = require('express-session');
const Store = require('connect-mongo')(session);

const app = express();
const port = config.port;
mongoose.init();

//create a cookie every time a user logins in
app.use( session({
    secret: 'secret',
    cookie: {maxAge: 10800000}, //3 hours in milliseconds
    resave: false,
    saveUninitialized: false,
    store: new Store({url: 'mongodb://localhost:27017/cobalt'})
}))

app.use(passport.initialize());
app.use(passport.session());
app.use('/api', routes); //url.com/api/

app.listen(port, () => console.log(`running on port ${port}`))