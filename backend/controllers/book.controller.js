import { db } from "../db/index.js";
import { booksTable } from "../models/book.model.js";

export async function getAllBooks(req,res){
    const books = await db.select().from(booksTable)
    return res.json(books);
}
export function addNewBook(req,res){
    const data = req.body;
    data.map(async (book) =>{
        await db.insert(booksTable).values({
            name: book.name,
            description: book.description,
            author: book.author,
        })
    })
    
    return res.status(201).json({message:"Book added succesfully"});
}