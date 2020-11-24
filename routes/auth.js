const router = require('express').Router();
const passport = require('passport');

router.get('/discord', passport.authenticate('discord')); //url.com/api/auth/discord/
router.get('/discord/redirect', passport.authenticate('discord'), (req, res) => { //url.com/api/auth/discord/redirect?code
    res.sendStatus(200) //Okay code
});

router.get('/', (req, res) => { //url.com/api/auth/
    if (req.user) {
        res.send(req.user) //send the user data if logged in
    } else {
        res.sendStatus(401).send({message: 'Unauthorized'}) //else it'll send 'Unauthorized'
    }
})

module.exports = router;