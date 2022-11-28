import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
                _id
                username
            } 
        }
    }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
        email
        petCount
        savedPets {
          petId
          type
          breed
          size
          gender
          age
          coat
          status
          name
          good_with_children
          house_trained
          special_needs
          location
        }
      }
    }
  }
`;

export const SAVE_PET = gql`
  mutation savePet($input: PetInput!) {
    savePet(input: $input) {
      _id
      username
      email
      petCount
      savedPets {
        petId
        type
        breed
        size
        gender
        age
        coat
        status
        name
        good_with_children
        house_trained
        special_needs
        location
      }
    }
  }
`;

export const REMOVE_PET = gql`
  mutation removePet($petId: ID!) {
    removePet(petId: $petId) {
      _id
      username
      email
      petCount
      savedPets {
        petId
        type
        breed
        size
        gender
        age
        coat
        status
        name
        good_with_children
        house_trained
        special_needs
        location
      }
    }
  }
`;
