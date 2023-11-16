var music = require('../models/music');

// List of all musics
exports.music_list = async function (req, res) {
  try {
    const themusic = await music.find();
    res.send(themusic);
  } catch (err) {
    res.status(500);
    res.send(`{"error": "${err}"}`);
  }
};

// Detail for a specific music.
exports.music_detail = async function (req, res) {
  console.log("detail" + req.params.id);
  try {
    const result = await music.findById(req.params.id);
    res.send(result);
  } catch (error) {
    res.status(500);
    res.send(`{"error": "Document for id ${req.params.id} not found"}`);
  }
};

// VIEWS
// Handle a show all view
exports.music_view_all_Page = async function (req, res) {
  try {
    const themusic = await music.find();
    res.render('music', { title: 'music Search Results', results: themusic });
  } catch (err) {
    res.status(500);
    res.send(`{"error": "${err}"}`);
  }
};

// Handle music create on POST.
exports.music_create_post = async function (req, res) {
  console.log(req.body);
  let document = new music();
  document.name = req.body.name;
  document.No_of_songs = req.body.No_of_songs;
  document.type = req.body.type;
  try {
    let result = await document.save();
    res.send(result);
  } catch (err) {
    res.status(500);
    res.send(`{"error": "${err}"}`);
  }
};

// Handle music delete on DELETE.
exports.music_delete = async function(req, res) {
  console.log("delete " + req.params.id)
  try {
  result = await music.findByIdAndDelete( req.params.id)
  console.log("Removed " + result)
  res.send(result)
  } catch (err) {
  res.status(500)
  res.send(`{"error": Error deleting ${err}}`);
  }
  };
  

// Handle music update form on PUT.
exports.music_update_put = async function(req, res) {
  console.log(`update on id ${req.params.id} with body
  ${JSON.stringify(req.body)}`)
  try {
  let toUpdate = await music.findById( req.params.id)
  // Do updates of properties
  if(req.body.name)
  toUpdate.name = req.body.name;
  if(req.body.type) toUpdate.type = req.body.type;
  if(req.body.No_of_songs) toUpdate.No_of_songs = req.body.No_of_songs;
  let result = await toUpdate.save();
  console.log("Sucess " + result)
  res.send(result)
  } catch (err) {
  res.status(500)
  res.send(`{"error": ${err}: Update for id ${req.params.id}
  failed`);
  }
  };

  // Handle a show one view with id specified by query
exports.music_view_one_Page = async function(req, res) {
  console.log("single view for id " + req.query.id)
  try{
  result = await music.findById( req.query.id)
  res.render('musicdetail',
  { title: 'music Detail', toShow: result });
  }
  catch(err){
  res.status(500)
  res.send(`{'error': '${err}'}`);
  }
  };



// Handle building the view for creating a music.
// No body, no in path parameter, no query.
// Does not need to be async
exports.music_create_Page = function(req, res) {
  console.log("create view")
  try{
      res.render('musiccreate', { title: 'Music Create'});
  }
  catch(err){
      res.status(500)
      res.send(`{'error': '${err}'}`);
    }
  };


//Handle building the view for updating a music.
// query provides the id
exports.music_update_Page = async function(req, res) {
  console.log("update view for item "+req.query.id)
    try{
        let result = await music.findById(req.query.id)
        res.render('musicupdate', { title: 'music Update', toShow: result });
      }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
      }
    };

// Handle a delete one view with id from query
exports.music_delete_Page = async function(req, res) {
  console.log("Delete view for id " + req.query.id)
    try{
        result = await music.findById(req.query.id)
        res.render('musicdelete', { title: 'music Delete', toShow:
    result });
        }
        catch(err){
          res.status(500)
          res.send(`{'error': '${err}'}`);
       }
      };
  
  

