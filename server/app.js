const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require("mongoose");

//setup app
const app = express();

// connect ko mlab db
mongoose.connect(
  "mongodb+srv://dt-gql-db:gql1234@cluster0.oscjd.mongodb.net/dt-gql-project?retryWrites=true&w=majority"
);
mongoose.connection.once("open", () => {
  console.log("connection made");
});

//setup middleware for graphql
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

//tell app to listen to specific port
app.listen(4000, () => {
  console.log("listening for request in port 4000");
});
