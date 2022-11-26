import React from 'react';
import Banner from './components/banner';
import NavBar from './components/NavBar';
// eslint-disable-next-line
import PhotoFrame from './components/PhotoFrame';



import {
  ApolloClient,
  InMemoryCache,
  // eslint-disable-next-line
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';

//import authorization
// eslint-disable-next-line
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

// eslint-disable-next-line
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <><Banner /><NavBar /></>
  )
};


export default App;
