const router = require('express').Router();
const passport = require('passport');

router.get('/discord', passport.authenticate('discord')); //url.com/api/auth/discord/
router.get('/discord/redirect', passport.authenticate('discord'), (req, res) => { //url.com/api/auth/discord/redirect?code
    res.sendStatus(200) //Okay code
});

router.get('/', (req, res) => { //url.com/api/auth/
    res.send(req.user); //send the user data if logged in
})

module.exports = router;