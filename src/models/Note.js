import mongoose from "mongoose";

// 1- create a schema
// 2- create a model based off of the schema

const noteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    }
}, {timestamps: true} //createdAt, updatedAt by default in Mongoose
);

const Note = mongoose.model("Note", noteSchema)

export default Note