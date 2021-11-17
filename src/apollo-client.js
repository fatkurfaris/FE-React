import {
    ApolloClient,
    InMemoryCache,
  } from "@apollo/client";
  

const client = new ApolloClient({
    uri: 'https://choice-tahr-92.hasura.app/v1/graphql',
    cache: new InMemoryCache(),
    headers: {
        'x-hasura-admin-secret' : "Jaq9Kwx2eh9K12DWCGGbDvRnyEvSAkE06YY86c3fXYRjxA5LWP957mKgjv5Y8Gq4",
    }
  });
  
  export default client;