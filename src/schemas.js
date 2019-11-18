import { gql } from 'apollo-server';

import fooSchema from './foo/fooSchema';
import bookSchema from './book/bookSchema';

const linkType = gql`

  extend type Query {
    _: Boolean
  }

`
export default [
  linkType,
  bookSchema
]