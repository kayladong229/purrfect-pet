const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    savedPets: [Pet]
  }

  type Pet {
    petId: ID
    species: String
    name: String
    description: String
    image: String
    link: String
  }

  type Auth {
    token: ID!
    user: User
  }

  input PetInput {
    petId: ID
    species: String
    name: String
    description: String
    image: String
    link: String
  }

  type Query {
    users: [User]
    user(username: String!): User
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
