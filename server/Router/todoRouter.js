import express from 'express';
import { createTodo, getTodos, updateTodo, getTodoById, deleteTodo } from '../Controller/todoController.js';

const router = express.Router();

router.post('/', createTodo);
router.get('/', getTodos);
router.put('/:id', updateTodo);
router.get('/:id', getTodoById);
router.delete('/:id', deleteTodo);

export default router;
