var express = require('express');
const music_controlers = require('../controllers/music');
var router = express.Router();
/* GET home page. */
router.get('/' , music_controlers.music_view_all_Page)



// GET request for all music
router.get('/music', music_controlers.music_view_all_Page);

// GET request for one music
router.get('/music/:id', music_controlers.music_detail);

/* GET detail music page */
router.get('/detail', music_controlers.music_view_one_Page);

/* GET create music page */
router.get('/create', music_controlers.music_create_Page);

/* GET create update page */
router.get('/update', music_controlers.music_update_Page);

/* GET delete music page */
router.get('/delete', music_controlers.music_delete_Page);


module.exports = router;
