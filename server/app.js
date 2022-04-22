const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");

//setup app
const app = express();

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
