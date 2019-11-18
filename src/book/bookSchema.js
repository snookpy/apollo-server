import { gql } from 'apollo-server';

const BOOKtype = gql`
  type Book {
    title: String
    author: String
  }

  type Query {
    books: [Book],
  }
`

export default BOOKtype