const express = require("express");

//setup app
const app = express();

//tell app to listen to specific port
app.listen(4000, () => {
  console.log("listening for request in port 4000");
});
