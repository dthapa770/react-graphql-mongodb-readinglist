const graphql = require("graphql");
const _ = require("lodash");

// define object types we want
const { GraphQLObjectType, GraphQLString, GraphQLSchema } = graphql;

// dummy data
var books = [
  { name: "Why", id: "1" },
  { name: "is", id: "2" },
  { name: "this", id: "3" },
];

const BookType = new GraphQLObjectType({
  name: "Book",
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    genre: { type: GraphQLString },
  }),
});

//Defining root query: client or frontend get initially into  the graph tp grab data
const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    // query for a particular book
    book: {
      type: BookType,
      args: { id: { type: GraphQLString } },
      resolve(parent, args) {
        //   code to get data from db/other source
        return _.find(books, { id: args.id });
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
