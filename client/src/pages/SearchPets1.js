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
      // setsearchedPets(await response.json());
      if (!response.ok) {
        throw new Error("something went wrong!");
      }
      
      const searchedPets = await response.json();
      console.log(searchedPets.animals[2].primary_photo_cropped.medium)
      // const petData = animals.map((animal) => { return ( {
      //   petId: animal.id,
      //   type: animal.type,
      //   gender: animal.gender,

      // })});
// console.log(petData)
      setSearchInput("");
    } catch (err) {
      console.error(err);
    }
  };
console.log(searchedPets.animals)
  // create function to handle saving a pet to our database
  // const handleSavePet = async (petId) => {
  //   // find the pet in `searchedPets` state by the matching id
  //   const petToSave = searchedPets.find((searchedPets) => animal.petId === petId);

  //   // get token
  //   const token = Auth.loggedIn() ? Auth.getToken() : null;

  //   if (!token) {
  //     return false;
  //   }

  //   try {
  //     const { data } = await savePet({
  //       variables: { input: petToSave },
  //     });

  //     // if pet successfully saves to user's account, save pet id to state
  //     setSavedPetIds([...savedPetIds, petToSave.petId]);
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };
console.log(searchInput);
const handleInputChange = (e) => {
  setSearchInput(e.target.value)
}  
return (
<>
  <Container>
    <Jumbotron fluid className="text-light bg-dark">
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
              <Button type="submit" variant="success" size="lg">
                Submit Search
              </Button>
            </Col>
          </Form.Row>
        </Form>
    </Jumbotron>

        <h2>
          {searchedPets.length
            ? `Viewing ${searchedPets.length} results:`
            : "Search for a pet to begin"}
        </h2>
        <CardColumns>
          {/* return (  */}
            {
              searchedPets.map((animal, index) => {
                <Card key={animal.petId} border="dark">
                  {animal.photos ? (
                    <Card.Img
                      src={animal[index].photos[0].medium}
                      alt={`I am ${animal.status}`}
                      variant="top"
                    />
                  ) : <div>No Image Found </div>}
                  <Card.Body>
                    <Card.Title>{animal.type}</Card.Title>
                    <p className="small">Pet type: {animal.type}</p>
                    <Card.Text>{animal.description}</Card.Text>
                  </Card.Body>
                </Card>
              })
            }
        {/* ); */}
        </CardColumns>
  </Container>
</>
  );
}
export default SearchPets;
