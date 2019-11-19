import authors from './authorDummy';
import books from '../book/bookDummy'
import authenticated from '../utils/authenticate';

export default {
    Query: {
        author: (parent, args) => {
            console.log("parent, args: ", parent, args)
            return authors.find(a => a.id === args.id)
        }
    },
    Author: {
        books(author) {
            return books.filter(a => a.authorId === author.id)
        },
    },
    Mutation: {
        addAuthor: authenticated((parent, args, context) => {
            const newAuthor = {...args, id: "a4"}
            authors.push(newAuthor)

            return newAuthor
        })
    }
};