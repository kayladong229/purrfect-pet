const mongoose = require('mongoose');
const { Schema } = mongoose;

// This is a subdocument schema, it won't become its own model but we'll use it as the schema for the User's `savedPetss` array in User.js
const petSchema = new Schema({
  // saved pet id from PetFinder
  petId: {
    type: String,
    required: true,
  },
  description: {
    type: String
  },
  type: 
    {
      type: String,
      required: true,
    },
  breed: {
    type: String,
  },
  size: {
    type: String,
  },
  gender: {
    type: String,
  },
  age: {
    type: String,
  },
  coat: {
    type: String,
  },
  status: {
    type: String,
  },
  name: {
    type: String,
    required: true,
  },
  good_with_children: {
    type: Boolean,
  },
  house_trained: {
    type: Boolean,
  },
  special_needs: {
    type: Boolean,
  },
  location: {
    type: String,
  },
  image: {
    type: String
  }
});

module.exports = petSchema;