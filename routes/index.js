const router = require('express').Router();
const auth = require('./auth');

router.use('/auth', auth) //url.com/api/auth/...

module.exports = router;