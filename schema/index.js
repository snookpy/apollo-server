const GGtype = gql`
  type gg {
    g1: String
    g2: String
  }

  extend type Query {
    ggs: [gg]
  }
`