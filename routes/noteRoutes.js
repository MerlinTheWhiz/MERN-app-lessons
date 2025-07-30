import express from "express";

const router = express.Router(); 

router.get("/", (req, res) => {
    res.status(200).send("you got 10 notes");
});

router.post("/", (req, res)=> {
  res.status(201).json("Note created successfully");
});

router.put("/:id", (req, res) => {
  res.status(200).json("Note updated successfully");
});

router.delete("/:id", (req, res) => {
  res.status(200).json("Note deleted successfully");
});

export default router;