import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Jumbotron, Button, Container, Row, Col, Image } from 'react-bootstrap';


function Home(props) {

    return (
        <Jumbotron style={{backgroundColor:'transparent'}} fluid>
            <Container>
                <Row>
                    <Col className='text-center'>
                        <Image src="./images/Purrfect-Pet-Logo.PNG" alt="banner" fluid />
                        <h1 className='mt-4'>Find your perfect pet!</h1>
                        <h2><br></br>Find the right pet for you</h2>
                        <Button className='mt-4' variant='secondary' href='/menu' size='lg'>
                            Match Now
                        </Button>
                    </Col>
                </Row>

            </Container>
        </Jumbotron>

    )
}

export default Home;
