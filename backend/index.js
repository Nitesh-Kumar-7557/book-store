import cors from "cors";
import 'dotenv/config';
import express from 'express';
import {route} from './routes/book.routes.js';


const app = express();
app.listen(process.env.PORT ?? 8000, ()=> console.log("Server is up and Running..."))

app.use(cors({
  origin: "http://localhost:5173",
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));
app.use(express.json());

app.use('/books',route);