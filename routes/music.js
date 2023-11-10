var express = require('express');
const music_controlers = require('../controllers/music');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('music', { title: 'Search Results' });
});

// GET request for all music
router.get('/music', music_controlers.music_view_all_Page);

// GET request for one music
router.get('/music/:id', music_controlers.music_detail);

module.exports = router;
