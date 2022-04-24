const express = require("express");
const cors = require("cors");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require("mongoose");

//setup app
const app = express();

// allow cross origin request
app.use(cors());

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
