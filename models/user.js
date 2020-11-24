const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    userID: String,
    username: String,
    discriminator: Number,
    avatar: String,
    guilds: Array
});

module.exports = mongoose.model("user", userSchema);