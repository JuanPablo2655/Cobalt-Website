const DiscordStrategy = require('passport-discord').Strategy;
const passport = require('passport');
const config = require('../config.json');
const { discriminator } = require('../models/user');
const discordUser = require('../models/user')

passport.serializeUser((user, done) => {
    done(null, user.userID)
});

passport.deserializeUser(async (userID, done) => {
    try{
        const user = await discordUser.findOne({userID});
        return user ? done(null, user) : done(null, null);
    } catch (err) {
        console.log(err);
        done(err, null)
    }
});


passport.use(new DiscordStrategy({
    clientID: config.dashboardClientID,
    clientSecret: config.dashboardClientSecret,
    callbackURL: config.dasboardcallbackURL,
    scope: ['identify', 'guilds']
}, async (accessToken, refreshToken, profile, done) => {
    const {id, username, discriminator, avatar, guilds} = profile
    try {
        const user = await discordUser.findOne({ userID: id });
        if(user) {
            console.log("User exists.");
            await user.updateOne({
                username,
                discriminator,
                avatar,
                guilds
            });
            done(null, user);
        } else {
            console.log("User does not exist");
            const newUser = await discordUser.create({
                userID: id,
                username,
                discriminator,
                avatar,
                guilds
            });
            const savedUser = await newUser.save();
            return done(null, savedUser)
        }
    } catch(err) {
        console.log(err)
        return done(err, null)
    }
}));