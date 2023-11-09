var music = require('../models/music');
// List of all musics
// List of all musics
exports.music_list = async function(req, res) {
try{
themusic = await music.find();
res.send(themusic);
}
catch(err){
res.status(500);
res.send(`{"error": ${err}}`);
}
};


// VIEWS
// Handle a show all view
exports.music_view_all_Page = async function(req, res) {
  try{
  themusic = await music.find();
  res.render('music', { title: 'music Search Results', results: themusic });
  }
  catch(err){
  res.status(500);
  res.send(`{"error": ${err}}`);
  }
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
