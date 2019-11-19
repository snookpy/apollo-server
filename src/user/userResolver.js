import books from './bookDummy';
import author from '../author/authorDummy'

export default {
    Query: {
        books: () => books,
        book: (parent, args) => books.find(b => b.id === args.id)
    },
    Book: {
        author(book, arg) {
         
            return author.find(a => book.authorId === a.id)
            // return filter(books, { author: author.name });
        },
    }
  };