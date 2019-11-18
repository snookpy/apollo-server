import books from './bookDummy';

console.log("books ", books)
export default {
    Query: {
        books: () => books,
    }
  };