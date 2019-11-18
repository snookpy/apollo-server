import { gql } from 'apollo-server';

const Footype = gql`
  type foo {
    g1: String
    g2: String
  }

  type Query {
    foos: [foo]
  }
`

export default Footype;