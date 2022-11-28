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
export const searchPets = (type) => {
  return fetch(`https://api.petfinder.com/v2/animals?type=${type}`, {
    crossorigin: true,
          withCredentials: true,    
          mode: 'no-cors'}
          )};

