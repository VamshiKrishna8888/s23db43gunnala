var music = require('../models/music');
// List of all musics
exports.music_list = function(req, res) {
res.send('NOT IMPLEMENTED: music list');
};
// for a specific music.
exports.music_detail = function(req, res) {
res.send('NOT IMPLEMENTED: music detail: ' + req.params.id);
};
// Handle music create on POST.
exports.music_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: music create POST');
};
// Handle music delete form on DELETE.
exports.music_delete = function(req, res) {
res.send('NOT IMPLEMENTED: music delete DELETE ' + req.params.id);
};
// Handle music update form on PUT.
exports.music_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: music update PUT' + req.params.id);
};
