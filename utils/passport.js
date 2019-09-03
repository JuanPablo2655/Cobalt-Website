const passport = require('passport');
const OAuth2Strategy = require('passport-oauth2').Strategy;

passport.use(new OAuth2Strategy({
    authorizationURL: 'https://discordapp.com/api/oauth2/authorize',
    tokenURL: 'https://discordapp.com/api/oauth2/token',
    clientID: '359869454257094668',
    clientSecret: 'e',
    callbackURL: '/auth/discord/redirect'
}, (accessToken, refreshToken, profile, done) => {
    console.log('epic it worked');
    console.log(profile);
}))
