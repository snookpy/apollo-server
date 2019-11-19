import { gql } from 'apollo-server';

const BOOKtype = gql`
  type Book {
    id: ID
    title: String
    author: Author
  }

  extend type Query {
    books: [Book]
    book(id: ID!): Book
  }

  extend type Mutation {
    addBook(title: String, authorId: String): Book
  }
`

export default BOOKtype