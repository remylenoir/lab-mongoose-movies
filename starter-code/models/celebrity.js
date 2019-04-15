const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Creating the Schema
const celebritySchema = new Schema({
  name: {
    type: String
  },
  occupation: {
    type: String
  },
  catchPhrase: {
    type: String
  }
});

// Creating the model with the Schema
const Celebrity = mongoose.model("Celebrity", celebritySchema);

// Exporting the model to use it globally
module.exports = Celebrity;
