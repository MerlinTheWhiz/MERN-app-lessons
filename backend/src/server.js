import express from "express"; 
import notesRoutes from "./routes/noteRoutes.js";
import cors from "cors";

import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import rateLimiter from "./middleware/rateLimiter.js";

dotenv.config();
console.log(process.env.MONGO_URI)

const app = express();
const PORT = process.env.PORT || 5300;

app.use(cors({
  origin: "http://localhost:5173"
}));
app.use(express.json()); // this middleware will parse JSON bodies: req.body
app.use(rateLimiter); // middleware for ratelimiters


//our simple custom middleware
//app.use(() => {
//   console.log(`Req method is ${req.method} & Req URL is ${req.url}`);
//   next();
// });

app.use("/api/notes", notesRoutes); // routes middleware

connectDB().then(() => {
  app.listen(PORT, () => {
  console.log("Server started on PORT: ", PORT);
})
});
