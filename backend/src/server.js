import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";

import { connectDB } from "./config/db.js"; 
import notesRoutes from "./routes/noteRoutes.js";
import rateLimiter from "./middleware/rateLimiter.js";

dotenv.config();
console.log(process.env.MONGO_URI)

const app = express();
const PORT = process.env.PORT || 5300;
const __dirname = path.resolve()
console.log("path name is",__dirname)

if(process.env.NODE_ENV !== "production"){
  app.use(cors({
    origin: "http://localhost:5173"
  }));
}
app.use(express.json()); // this middleware will parse JSON bodies: req.body
app.use(rateLimiter); // middleware for ratelimiters


//our simple custom middleware
//app.use(() => {
//   console.log(`Req method is ${req.method} & Req URL is ${req.url}`);
//   next();
// });

app.use("/api/notes", notesRoutes); // routes middleware

if(process.env.NODE_ENV === "production"){
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get("*", (req,res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist","index.html"));
  });
}

connectDB().then(() => {
  app.listen(PORT, () => {
  console.log("Server started on PORT: ", PORT);
})
});
