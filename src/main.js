import { ApolloServer } from 'apollo-server';
import jwt from 'jsonwebtoken';

require('dotenv').config()

import resolvers from './resolvers';
import typeDefs from './schemas';

const isDev = process.env.NODE_ENV !== 'production'

const server = new ApolloServer({
  introspection: isDev,
  resolvers, typeDefs,
  debug: isDev,
  context: ({ req }) => {

    let user = null
    const token = req.headers.authorization || '';

    if (token) {
      try {
        const decoded = jwt.verify(token, process.env.SUPERSECRET);
        user = decoded;
      } catch (err) {
        throw Error('token invalid')
      }
    }

    return {
      token,
      user
    };
  },
});

server.listen()
  .then(({ url }) => console.log(`Server ready at ${url}. `));