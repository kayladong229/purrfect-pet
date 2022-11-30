import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Modal, Tab } from 'react-bootstrap';
import SignupForm from './Signup';
import LoginForm from './Login';

import Auth from '../utils/auth';


// export default function NavBar() {
//     return (
//         <div>
//             <a href="Petfinder.com">Favorite Pet</a>
//             <a href="Petfinder.com">Login</a>
//         </div>
//     )
// };

const AppNavbar = () => {
    // set modal display state
    const [showModal, setShowModal] = useState(false);
  
    return (
      <>
        <Navbar bg='light' variant='light' expand='lg'>
          <Container fluid>
            <Navbar.Brand as={Link} to='/'>
              Pet Search
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='navbar' />
            <Navbar.Collapse id='navbar'>
              <Nav className='ml-auto'>
                <Nav.Link as={Link} to='/'>
                  Search For Pets
                </Nav.Link>
                {/* if user is logged in show saved pets and logout */}
                {Auth.loggedIn() ? (
                  <>
                    <Nav.Link as={Link} to='/saved'>
                      See Your Pets
                    </Nav.Link>
                    <Nav.Link onClick={Auth.logout}>Logout</Nav.Link>
                  </>
                ) : (
                  <Nav.Link onClick={() => setShowModal(true)}>Login/Sign Up</Nav.Link>
                )}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        {/* set modal data up */}
        <Modal
          size='lg'
          show={showModal}
          onHide={() => setShowModal(false)}
          aria-labelledby='signup-modal'>
          {/* tab container to do either signup or login component */}
          <Tab.Container defaultActiveKey='login'>
            <Modal.Header closeButton>
              <Modal.Title id='signup-modal'>
                <Nav variant='pills'>
                  <Nav.Item>
                    <Nav.Link eventKey='login'>Login</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey='signup'>Sign Up</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Tab.Content>
                <Tab.Pane eventKey='login'>
                  <LoginForm handleModalClose={() => setShowModal(false)} />
                </Tab.Pane>
                <Tab.Pane eventKey='signup'>
                  <SignupForm handleModalClose={() => setShowModal(false)} />
                </Tab.Pane>
              </Tab.Content>
            </Modal.Body>
          </Tab.Container>
        </Modal>
      </>
    );
  };
  
  export default AppNavbar;