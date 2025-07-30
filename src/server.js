import express from "express"; //cannot use this by default, you must change type to module for this
//const express = require("express"); //can use this by default, same function with the above
import notesRoutes from "./routes/noteRoutes.js";

const app = express();

app.use("/api/notes", notesRoutes)

//to listen on a port
app.listen(5300, () => {
  console.log("Server started on PORT: 5300");
});
