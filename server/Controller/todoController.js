// controllers/todoController.js

import Todo from '../Model/Todo.js'; 


export const createTodo = async (req, res) => {
    try {
        const { title, description } = req.body;
        const newTodo = new Todo({ title, description });
        await newTodo.save();
        res.status(201).json({ message: 'Todo created successfully' });
    } catch (error) {
        console.error('❌ Failed to create todo:', error);
        res.status(500).json({ error: 'Failed to create todo' });
    }
};

export const getTodos = async (req, res) => {
    try {
        const todos = await Todo.find();
        res.json(todos);
    } catch (error) {
        console.error('❌ Failed to fetch todos:', error);
        res.status(500).json({ error: 'Failed to fetch todos' });
    }
};

export const updateTodo = async (req, res) => {
    try {
        const id = req.params.id;
        const { title, description } = req.body;
        const updatedTodo = await Todo.findByIdAndUpdate(id,
            { title, description },
            { new: true }
        );
        if (!updatedTodo) {
            return res.status(404).json({ message: "Todo not found" });
        }
        res.status(200).json(updatedTodo);
    } catch (error) {
        console.error('❌ Failed to update todo:', error);
        res.status(500).json({ error: 'Failed to update todo' });
    }
};

export const getTodoById = async (req, res) => {
    try {
        const id = req.params.id;
        const todo = await Todo.findById(id);
        if (!todo) {
            return res.status(404).json({ message: "Todo not found" });
        }
        res.json(todo);
    } catch (error) {
        console.error('❌ Failed to fetch todo by ID:', error);
        res.status(500).json({ error: 'Failed to fetch todo by ID' });
    }
};

export const deleteTodo = async (req, res) => {
    try {
        const id = req.params.id;
        await Todo.findByIdAndDelete(id);
        res.status(204).json({ message: "Todo deleted" });
    } catch (error) {
        console.error('❌ Failed to delete todo:', error);
        res.status(500).json({ error: 'Failed to delete todo' });
    }
};
