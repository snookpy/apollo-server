import { gql } from 'apollo-server';

const AuthorType = gql`
  type Author {
    id: ID
    name: String
    books: [Book]
  }

  extend type Query {
    author(id: ID!): Author
  }

  extend type Mutation {
      addAuthor(name: String!): Author
  }
`

export default AuthorType