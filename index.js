const { ApolloServer, gql } = require('apollo-server');


const linkSchema = gql`
  type Query {
    _: Boolean
  }
`
const typeDefs = [linkSchema, BOOKtype, GGtype]
const books = [
    {
        title: 'Harry Potter and the Chamber of Secrets',
        author: 'J.K. Rowling',
    },
    {
        title: 'Jurassic Park',
        author: 'Michael Crichton',
    },
];

const gg = [
    {g1: "g111", g2: "g22"}
]
const resolvers = {
    Query: {
        books: () => books,
        ggs: () => gg
    },
}

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});