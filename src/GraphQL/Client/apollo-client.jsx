import {
  ApolloClient,
  InMemoryCache,
} from "@apollo/client";

import { split, HttpLink } from '@apollo/client';
import { getMainDefinition } from '@apollo/client/utilities';
import { WebSocketLink } from '@apollo/client/link/ws';

const httpLink = new HttpLink({
uri: 'https://choice-tahr-92.hasura.app/v1/graphql',
headers: {
  'x-hasura-admin-secret' : "Jaq9Kwx2eh9K12DWCGGbDvRnyEvSAkE06YY86c3fXYRjxA5LWP957mKgjv5Y8Gq4",
}
});

const wsLink = new WebSocketLink({
uri: 'ws://choice-tahr-92.hasura.app/v1/graphql',
options: {
  reconnect: true,
  connectionParams:{
    headers: {
      'x-hasura-admin-secret' : "Jaq9Kwx2eh9K12DWCGGbDvRnyEvSAkE06YY86c3fXYRjxA5LWP957mKgjv5Y8Gq4",
    }
  }
}
});

// The split function takes three parameters:
//
// * A function that's called for each operation to execute
// * The Link to use for an operation if the function returns a "truthy" value
// * The Link to use for an operation if the function returns a "falsy" value
const splitLink = split(
({ query }) => {
  const definition = getMainDefinition(query);
  return (
    definition.kind === 'OperationDefinition' &&
    definition.operation === 'subscription'
  );
},
wsLink,
httpLink,
);


const client = new ApolloClient({
  link : splitLink,
  cache: new InMemoryCache(),
});

export default client;