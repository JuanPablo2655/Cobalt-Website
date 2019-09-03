const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    userID: String,
    username: String,
    disciminator: Number,
    avatar: String,
    owner: Boolean,
    director: Boolean,
    experience: {
        xp: Number,
        lvl: Number
    },
    bank: {
        money: Number,
        jobID: String,
    },
    moderation: {
        warns: Number,
        gulags: Number,
        ban: Boolean
    },
    nationstates: String
});

module.exports = mongoose.model("user", userSchema);