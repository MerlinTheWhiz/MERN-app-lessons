import express from "express"; //cannot use this by default, you must change type to module for this
//const express = require("express"); //can use this by default, same function with the above

const app = express(); //

//to build an api route
//in the bracket, the quotation is what we're listening to(the end point) and then a function to come after the comma
app.get("/api/note", (req, res) => {
  res.send("you got 5 notes");
});

//to listen on a port
app.listen(5300, () => {
  console.log("Server started on PORT: 5300");
});
