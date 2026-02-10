import { useState, useEffect } from "react"
import type book from "../types/book";
import Card from "./Card"
import axios from 'axios';

const Home = () => {

  const [books, setBooks] = useState<book[]>([]);

  useEffect(() => {
    axios.get<book[]>('http://localhost:8000/books')
      .then(response => {
        console.log(response.data)
        setBooks(response.data);
      })
      .catch(err => {
        console.error("Failed to fetch books", err);
      });
  }, []);

  return (
    <div>
        <h1 className="text-4xl">Home</h1> <hr />
        <div className="flex flex-wrap">
            {
              books.map((book, index) => {
                return <Card key={index} name={book.name} description={book.description} author={book.author}/>
              })
            }
            {/* <Card name="Game of thrones" description="Great story..." author="someone IDK"/> */}
        </div>
    </div>
  )
}

export default Home