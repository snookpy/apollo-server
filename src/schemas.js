import { gql } from 'apollo-server';

import bookSchema from './book/bookSchema';
import authorSchema from './author/authorSchema';

const linkType = gql`

  type Query {
    _: Boolean
  }
  type Mutation {
    _: Boolean
  }
`
export default [
  linkType,
  bookSchema,
  authorSchema,
]