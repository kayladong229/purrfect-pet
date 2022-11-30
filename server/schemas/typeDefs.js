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
    age: String
    breed: String
    coat: String
    description: String
    gender: String
    good_with_children: Boolean
    house_trained: Boolean
    image: String
    location: String
    name: String
    petId: ID
    size: String
    special_needs: Boolean
    status: String
    type: String
  }

  type Auth {
    token: ID!
    user: User
  }

  input PetInput {
    age: String
    breed: String
    coat: String
    description: String
    gender: String
    good_with_children: Boolean
    house_trained: Boolean
    image: String
    location: String
    name: String
    petId: ID
    size: String
    special_needs: Boolean
    status: String
    type: String
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
