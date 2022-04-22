const graphql = require("graphql");
const _ = require("lodash");

// define object types we want
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLInt,
  GraphQLList,
} = graphql;

// dummy data
var books = [
  { name: "Why", genre: "scifi", id: "1", authorId: "1" },
  { name: "is", genre: "horror", id: "2", authorId: "2" },
  { name: "this", genre: "thriller", id: "3", authorId: "3" },
  { name: "happening", genre: "love", id: "4", authorId: "1" },
  { name: "to", genre: "thriller", id: "5", authorId: "2" },
  { name: "me", genre: "comedy", id: "6", authorId: "3" },
];

var authors = [
  { name: "Dinesh", age: 42, id: "1" },
  { name: "Nar", age: 22, id: "2" },
  { name: "Arpn", age: 32, id: "3" },
];

const BookType = new GraphQLObjectType({
  name: "Book",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    genre: { type: GraphQLString },
    author: {
      type: AuthorType,
      // resolve function is responsible for looking at actual data and return what is needed
      resolve(parent, args) {
        console.log(parent);
        return _.find(authors, { id: parent.authorId });
      },
    },
  }),
});

const AuthorType = new GraphQLObjectType({
  name: "Author",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    age: { type: GraphQLInt },
    book: {
      type: new GraphQLList(BookType),
      resolve(parent, args) {
        return _.filter(books, { authorId: parent.id });
      },
    },
  }),
});

//Defining root query: client or frontend get initially into  the graph tp grab data
const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    // query for a particular book
    book: {
      type: BookType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        //   code to get data from db/other source
        return _.find(books, { id: args.id });
      },
    },
    // query for particular author
    author: {
      type: AuthorType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return _.find(authors, { id: args.id });
      },
    },
    // query for all books
    books: {
      type: new GraphQLList(BookType),
      resolve(parent, args) {
        return books;
      },
    },
    authors: {
      type: new GraphQLList(AuthorType),
      resolve(parent, args) {
        return authors;
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
