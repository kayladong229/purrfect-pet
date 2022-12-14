import React, { useState, useEffect } from "react";
import {
  Jumbotron,
  Container,
  Col,
  Form,
  Button,
  Card,
  CardColumns,
} from "react-bootstrap";
import { useMutation } from "@apollo/client";

import Auth from "../utils/auth";
import { fetchPets } from '../utils/API';
import { savePetIds, getSavedPetIds } from "../utils/localStorage";
import { SAVE_PET } from "../utils/mutations";

import { useContext } from "react";
import { AuthContext } from "../App";


const SearchPets = () => {

  const accessToken = useContext(AuthContext);
  // create state for holding returned Petfinder api data
  const [searchedPets, setsearchedPets] = useState([]);
  // create state for holding our search field data
  const [searchInput, setSearchInput] = useState("");

  // create state to hold saved petsId values
  const [savedPetIds, setSavedPetIds] = useState(getSavedPetIds());
  const [savePet] = useMutation(SAVE_PET);
  let [petData, setPetData] = useState([]);
  // set up useEffect hook to save `savedPetIds` list to localStorage on component unmount
  // learn more here: https://reactjs.org/docs/hooks-effect.html#effects-with-cleanup
  useEffect(() => {
    return () => savePetIds(savedPetIds);
  });

  
  // create method to search for petss and set state on form submit
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (!searchInput) {
      return false;
    }

    try {
      const response = await fetchPets(searchInput, accessToken);
      console.log(response)
      if (!response.ok) {
        throw new Error("something went wrong!");
      }

      const matchPets = await response.json();
    //   var photo = matchPets?.animals?.[0]?.photos?.[0]?.medium
    //   if (photo) { 
    //       console.log(photo); 
    //   }
    //       else { console.log('photo is empty'); 
    //   }
          
      console.log(matchPets?.animals)

      function getPhoto (photos) {
        var smallPhoto = photos.find(photo => photo.small)
        return smallPhoto?.small
      }

        petData = matchPets.animals.map((animal) => ({
        petId: animal.id,
        type: animal.type,
        name: animal.name,
        breed: animal.breed,
        status: animal.status,
        gender: animal.gender,
        description: animal.description,
        image: getPhoto(animal?.photos) || "",
      })); 
      setPetData(petData);
      setsearchedPets(petData);
      setSearchInput("");
    } catch (err) {
        console.error(err);
    }
};

console.log(petData)
  // create function to handle saving a pet to our database
  const handleSavePet = async (petId) => {
    // find the pet in `searchedPets` state by the matching id
    const petToSave = petData.find((animal) => animal.petId === petId);
    console.log(petId)
    // get token
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    try {
      // eslint-disable-next-line
      const { data } = await savePet({
        variables: { input: {...petToSave} },
      });

      // if pet successfully saves to user's account, save pet id to state
      setSavedPetIds([...savedPetIds, petToSave.petId]);
    } catch (err) {
      console.error(err);
    }
  };
console.log(searchInput);
const handleInputChange = (e) => {
  setSearchInput(e.target.value)
}  
return (
    <>
      <Jumbotron fluid className="bg-light">
        <Container>
          <h1>Search for Pets!</h1>
          <Form onSubmit={handleFormSubmit}>
            <Form.Row>
              <Col xs={12} md={8}>
                <Form.Control
                  name="searchInput"
                  value={searchInput}
                  onChange={handleInputChange}
                  type="text"
                  size="lg"
                  placeholder="Search for a pet"
                />
              </Col>
              <Col xs={12} md={4}>
                <Button type="submit" variant="info" size="lg">
                  Submit Search
                </Button>
              </Col>
            </Form.Row>
          </Form>
        </Container>
      </Jumbotron>

      <Container>
        <h2>
          {searchedPets.length
            ? `Viewing ${searchedPets.length} results:`
            : "Search for a pet to begin"}
        </h2>
        <CardColumns>
          {petData.map((animal) => {
            return (
              <Card key={animal.petId} border="dark">

                <Card.Body>

                  <Card.Title>{animal.name}</Card.Title>
                  <p className="small">gender: {animal.gender}</p>
                  <img src= {animal?.image}/>
                  <Card.Text>{animal.description}</Card.Text>
                  {Auth.loggedIn() && (
                    <Button
                      disabled={savedPetIds?.some(
                        (savedPetId) => savedPetId === animal.petId
                      )}
                      className="btn-block btn-info"
                      onClick={() => handleSavePet(animal.petId)}
                    >
                      {savedPetIds?.some(
                        (savedPetId) => savedPetId === animal.petId
                      )
                        ? "This pet has already been saved!"
                        : "Save this pet!"}
                    </Button>
                  )}
                </Card.Body>
              </Card>
            );
          })}
        </CardColumns>
      </Container>
    </>
  );
};

export default SearchPets;