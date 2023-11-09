const mongoose = require("mongoose")
const musicSchema = mongoose.Schema({
name: String,
type: String,
No_of_songs : Number
})
module.exports = mongoose.model("music",musicSchema)