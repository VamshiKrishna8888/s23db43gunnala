const mongoose = require("mongoose")
const musicSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
 type: {
    type: String,
    required: true,
    required: true,
    validate: {
      validator: function (value) {
        // Example validation: Check if the manufacturer contains only alphabetical characters
        return /^[a-zA-Z]+$/.test(value);
      },
    },
  },
  No_of_songs: {
    type: Number,
    required: true,
    min: [0, 'Price must be at least 0'],   // Minimum value for the price
    max: [300, 'Price must be at most 100'], // Maximum value for the price
  },
});
module.exports = mongoose.model("music",musicSchema)