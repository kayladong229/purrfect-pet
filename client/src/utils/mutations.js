import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
    mutation login($email: String!, password: String!) {
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
                savedPets {

                }
            }
        } 
    }
`;

export const SAVE_PET = gql`
    mutation savePet($input: PetInput) {
        savePet(input: $input) {
            _id
            username
            email
            savedPets {

            }
        }
    }
`;

export const REMOVE_PET = gql`
    mutation removePet($input: PetInput) {
        removePet(input: $input) {
            _id
            username
            email
            savedPets {

            }
        }
    }
`;
