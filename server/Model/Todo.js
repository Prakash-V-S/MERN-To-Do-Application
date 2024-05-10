import mongoose from "mongoose";

// Define todo schema
const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
}, { versionKey: false });

// Define todo model
const Todo = mongoose.model('Todo', todoSchema);

export default Todo