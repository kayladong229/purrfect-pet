const mongoose = require('mongoose');
const { Schema } = mongoose;

// This is a subdocument schema, it won't become its own model but we'll use it as the schema for the User's `savedPetss` array in User.js
const petSchema = new Schema({
  // saved pet id from PetFinder
  petId: {
    type: String,
    required: true,
  },
  type: 
    {
      type: String,
      required: true,
    },
  breed: {
    type: String,
    required: true,
  },
  size: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  age: {
    type: String,
    required: true,
  },
  coat: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  good_with_children: {
    type: Boolean,
    required: true,
  },
  house_trained: {
    type: Boolean,
    required: true,
  },
  special_needs: {
    type: Boolean,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
});

module.exports = petSchema;