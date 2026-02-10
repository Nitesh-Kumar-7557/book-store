import express from 'express';
import { addNewBook, getAllBooks } from '../controllers/book.controller.js';
export const route = express.Router();

route.get('/',getAllBooks);
route.post('/',addNewBook);