import { gql } from 'apollo-server';

const BOOKtype = gql`
  type User {
    id: ID
    username: String
  }

  extend type Query {
    user(id: ID!): User
    me: User
  }

  type Token {
    token: String!
  }

`

export default BOOKtype