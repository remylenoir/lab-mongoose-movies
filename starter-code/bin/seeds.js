const mongoose = require("mongoose");
const Celebrity = require("../models/celebrity");

mongoose.connect("mongodb://localhost/celebrity-project");

// Reset the collection - BE CAREFUL!
// Celebrity.collection.drop();

const Celebrities = [
  {
    name: "Tom Cruise",
    occupation: "Actor",
    catchPhrase: "TC catch phrase"
  },
  {
    name: "Beyonce",
    occupation: "Singer",
    catchPhrase: "Beyonce catch phrase"
  },
  {
    name: "Daffy Duck",
    occupation: "Character",
    catchPhrase: "DD catch phrase"
  }
];

Celebrity.create(Celebrities)
  .then(data => {
    console.log(`Addition of ${data.length} celebrities successfull`);
  })
  .catch(err => {
    console.error(err);
  });
