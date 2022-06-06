import React, { useEffect, useState } from "react";
import axios from "axios";
import Book from "./Book";
import "./Book.css";

const URL = "https://book-store-app-mern.herokuapp.com/books"; //    http://localhost:5000/books

const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};
const Books = () => {
  const [books, setBooks] = useState();

  useEffect(() => {
    fetchHandler().then((data) => setBooks(data.books));
  }, []);
  console.log(books);

  return (
    <div>
      {/* <Header/> */}
      <ul>
        {books &&
          books.map((book, i) => (
            <li key={i}>
              <Book book={book} />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Books;
