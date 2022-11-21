const { Schema } = require('mongoose');

// This is a subdocument schema, it won't become its own model but we'll use it as the schema for the User's `savedPets` array in User.js
const petSchema = new Schema({
  description: {
    type: String,
    required: true,
  },
  petId: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  link: {
    type: String,
  },
  name: {
    type: String,
    required: true,
  },
});

module.exports = petSchema;
