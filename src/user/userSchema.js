import { gql } from 'apollo-server';

const userType = gql`
  type Token {
    token: String!
  }

  extend type Mutation {
    loginUser(username: String!, password: String!): Token
  }
`

export default userType