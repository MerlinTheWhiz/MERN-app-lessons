import express from "express"; 
import notesRoutes from "./routes/noteRoutes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import rateLimiter from "./middleware/rateLimiter.js";

dotenv.config();
console.log(process.env.MONGO_URI)

const app = express();
const PORT = process.env.PORT || 5300;


app.use(express.json()); // this middleware will parse JSON bodies: req.body
app.use(rateLimiter); // middleware for ratelimiters

app.use("/api/notes", notesRoutes); // routes middleware

connectDB().then(() => {
  app.listen(PORT, () => {
  console.log("Server started on PORT: ", PORT);
})
});
