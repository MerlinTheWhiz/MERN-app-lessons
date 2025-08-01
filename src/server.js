import express from "express"; 
import notesRoutes from "./routes/noteRoutes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5300;

connectDB()

app.use("/api/notes", notesRoutes)

app.listen(PORT, () => {
  console.log("Server started on PORT: ", PORT);
});
