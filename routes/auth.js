const router = require('express').Router();
const passport = require('passport');


router.get('/login', (req, res) => {
    res.render('pages/login');
});

router.get('/logout', (req, res) => {
    //passport
    res.send('logging out');
});

router.get('/discord', passport.authenticate('oauth2', {
    scope: ['identify', 'guilds']
}));

router.get('/discord/redirect', passport.authenticate('oauth2'), (req, res) => {
    res.send('epic it worked.')
})

module.exports = router;