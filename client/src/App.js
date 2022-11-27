import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Banner from './components/banner';
import NavBar from './components/NavBar';
// import PhotoFrame from './components/PhotoFrame';

import SearchPets from './pages/SearchPets';
import SavedPets from './pages/SavedPets';

import {
  ApolloClient,
  InMemoryCache,
  // eslint-disable-next-line
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';

import { setContext } from '@apollo/client/link/context';

// //import authorization
// import auth from './utils/auth';

// main graphql api endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
});

// middleware for jwt token - authorization
const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

// eslint-disable-next-line
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <>
          <Banner />
          <NavBar />
          <Routes>
            <Route exact path="/" element={<SearchPets/>} />
            <Route exact path="/saved" element={<SavedPets/>} />
            <Route render={() => <h1 className="display-2">Wrong page!</h1>} />
          </Routes>
        </>
      </Router>
    </ApolloProvider>
  );
}


export default App;
