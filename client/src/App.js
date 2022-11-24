import React from 'react';

// import from components
import Banner from './components/banner';
import NavBar from './components/NavBar/NavBar';
import PhotoFrame from './components/PhotoFrame';

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';

//import authorization
import auth from './utils/auth';

import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <div>
      <ApolloProvider client={client}>
        <Banner />
        <NavBar />
        <PhotoFrame />
      {/* add components here */}
      </ApolloProvider>
    </div>
  )
};


export default App;
