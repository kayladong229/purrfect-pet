import { gql } from "@apollo/client";

export const GET_ME = gql`
  {
    me {
      _id
      username
      email
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
