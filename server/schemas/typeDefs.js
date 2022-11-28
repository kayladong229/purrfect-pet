const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    petCount: Int
    savedPets: [Pet]
  }

  type Pet {
    petId: ID
    type: String
    breed: String
    size: String
    gender: String
    age: String
    coat: String
    status: String
    name: String
    good_with_children: Boolean
    house_trained: Boolean
    special_needs: Boolean
    location: String
  }

  type Auth {
    token: ID!
    user: User
  }

  input PetInput {
    petId: ID
    type: String
    breed: String
    size: String
    gender: String
    age: String
    coat: String
    status: String
    name: String
    good_with_children: Boolean
    house_trained: Boolean
    special_needs: Boolean
    location: String
  }

  type Query {
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    savePet(input: PetInput): User
    removePet(petId: String!): User
  }
`;

module.exports = typeDefs;
