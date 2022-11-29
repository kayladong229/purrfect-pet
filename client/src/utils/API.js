// // route to get logged in user's info (needs the token)
// export const getMe = (token) => {
//   return fetch('/api/users/me', {
//     headers: {
//       'Content-Type': 'application/json',
//       authorization: `Bearer ${token}`,
//     },
//   });
// };

// export const createUser = (userData) => {
//   return fetch('/api/users', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(userData),
//   });
// };

// export const loginUser = (userData) => {
//   return fetch('/api/users/login', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(userData),
//   });
// };

// // save pet data for a logged in user
// export const savePet = (petData, token) => {
//   return fetch('/api/users', {
//     method: 'PUT',
//     headers: {
//       'Content-Type': 'application/json',
//       authorization: `Bearer ${token}`,
//     },
//     body: JSON.stringify(petData),
//   });
// };

// // remove saved pet data for a logged in user
// export const deletePet = (petId, token) => {
//   return fetch(`/api/users/pets/${petId}`, {
//     method: 'DELETE',
//     headers: {
//       authorization: `Bearer ${token}`,
//     },
//   });
// };

// // make a search to google pets api
// // https://www.googleapis.com/books/v1/volumes?q=harry+potter

import { useContext } from "react";
import { AuthContext } from "../App";

export const fetchPets = (type, accessToken) => {
  console.log(accessToken)
  return fetch(`https://api.petfinder.com/v2/animals?type=${type}`, {
    // crossOrigin: true,
    origin: "http://localhost:3000",
    // credentials: "include",
    // headers: 
    headers: new Headers({
         "Authorization": `Bearer ${accessToken}`,
      //    'Access-Control-Allow-Credentials': 'true',
			// 'Access-Control-Allow-Origin': 'http://localhost:3000',
			'Content-Type': 'application/json',
    }),
          // withCredentials: true,    
          mode: 'cors'}
          )};

