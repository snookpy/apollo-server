import { ApolloServer } from 'apollo-server';
require('dotenv').config()

import resolvers from './resolvers';
import typeDefs from './schemas';

const isDev = process.env.NODE_ENV !== 'production'

const server = new ApolloServer({
  introspection: isDev,
  resolvers, typeDefs,
  debug: isDev,
  context: ({ req }) => {
    // get the user token from the headers
    let user = null
    const token = req.headers.authorization || '';
   
    // try to retrieve a user with the token
    if(token)
      user = {
        username: "nook"
      }
   
    // add the user to the context
    return {
      user
    };
  },
});

server.listen()
  .then(({ url }) => console.log(`Server ready at ${url}. `));