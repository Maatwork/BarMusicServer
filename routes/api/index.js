const express = require('express');
const router = express.Router();

router.use('/songs', require('./songs'));
router.use('/playlists', require('./playlists/index'));
router.use('/votes', require('./votes'));

module.exports = router;
