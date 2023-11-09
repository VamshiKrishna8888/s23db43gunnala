var express = require('express');
const music_controlers= require('../controllers/music');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('music', { title: 'Search Results' });

  router.get('/', music_controlers.music_view_all_Page );

});

module.exports = router;
