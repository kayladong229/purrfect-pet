import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import { Jumbotron, Container, CardColumns, Card, Button } from 'react-bootstrap';

import { getMe, deletePet } from '../utils/API';
import Auth from '../utils/auth';
import { removePetId } from '../utils/localStorage';

const SavedPets = () => {
  const [userData, setUserData] = useState({});

  // use this to determine if `useEffect()` hook needs to run again
  const userDataLength = Object.keys(userData).length;

  useEffect(() => {
    const getUserData = async () => {
      try {
        const token = Auth.loggedIn() ? Auth.getToken() : null;

        if (!token) {
          return false;
        }

        const response = await getMe(token);

        if (!response.ok) {
          throw new Error('something went wrong!');
        }

        const user = await response.json();
        setUserData(user);
      } catch (err) {
        console.error(err);
      }
    };

    getUserData();
  }, [userDataLength]);

  // create function that accepts the pet's mongo _id value as param and deletes the pet from the database
  const handleDeletePet = async (petId) => {
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    try {
      const response = await deletePet(petId, token);

      if (!response.ok) {
        throw new Error('something went wrong!');
      }

      const updatedUser = await response.json();
      setUserData(updatedUser);
      // upon success, remove pet's id from localStorage
      removePetId(petId);
    } catch (err) {
      console.error(err);
    }
  };

  // if data isn't here yet, say so
  if (!userDataLength) {
    return <h2>LOADING...</h2>;
  }

  return (
    <>
      <Jumbotron fluid className='text-light bg-dark'>
        <Container>
          <h1>Viewing saved pets!</h1>
        </Container>
      </Jumbotron>
      <Container>
        <h2>
          {userData.savedPets.length
            ? `Viewing ${userData.savedPets.length} saved ${userData.savedPets.length === 1 ? 'Pet' : 'Pets'}:`
            : 'You have no saved pets!'}
        </h2>
        <CardColumns>
          {userData.savedPets.map((pet) => {
            return (
              <Card key={pet.petId} border='dark'>
                {pet.image ? <Card.Img src={pet.image} alt={`Animal type: ${pet.type}`} variant='top' /> : null}
                <Card.Body>
                  <Card.Title>{pet.type}</Card.Title>
                  <p className='small'>gender: {pet.gender}</p>
                  <Card.Text>{pet.description}</Card.Text>
                  <Button className='btn-block btn-danger' onClick={() => handleDeletePet(pet.petId)}>
                    Delete this Pet
                  </Button>
                </Card.Body>
              </Card>
            );
          })}
        </CardColumns>
      </Container>
    </>
  );
};


export default SavedPets;
