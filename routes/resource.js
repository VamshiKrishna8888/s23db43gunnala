var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var music_controller = require('../controllers/music');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// music ROUTES ///
// POST request for creating a music.
router.post('/musics', music_controller.music_create_post);
// DELETE request to delete music.
router.delete('/musics/:id', music_controller.music_delete);
// PUT request to update music.
router.put('/musics/:id', music_controller.music_update_put);
// GET request for one music.
router.get('/musics/:id', music_controller.music_detail);
// GET request for list of all music items.
router.get('/musics', music_controller.music_list);
module.exports = router;