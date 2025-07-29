import express from "express"; //cannot use this by default, you must change type to module for this
//const express = require("express"); //can use this by default, same function with the above

const app = express(); //

//to build an api route
//in the bracket, the quotation is what we're listening to(the end point) and then a function to come after the comma
//the entire line is called a route
app.get("/api/notes", (req, res) => {
  res.status(200).send("you got 10 notes");
});

app.post("/api/notes", (req, res)=> {
  res.status(201).json("Note created successfully");
});

app.put("/api/notes/:id", (req, res) => {
  res.status(200).json("Note updated successfully");
});

app.delete("/api/notes/:id", (req, res) => {
  res.status(200).json("Note updated successfully");
});

//to listen on a port
app.listen(5300, () => {
  console.log("Server started on PORT: 5300");
});
