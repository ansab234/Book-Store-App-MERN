import { Button } from "@mui/material";
import axios from "axios";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Book.css";

const URL = "https://book-store-app-mern.herokuapp.com/"

const Book = (props) => {
  const { _id, name, author, description, price, image } = props.book;

  const history = useNavigate();

  const deleteHandler = async () => {
    await axios
      .delete(`${URL}${_id}`)
      .then((res) => res.data)
      .then(() => history("/"))
      .then(() => history("/books"));
  };

  return (
    <div className="card">
      <img src={image} alt={name} />
      <article>By {author}</article>
      <h3>{name}</h3>
      <p>{description}</p>
      <h2>Rs {price}</h2>
      <Button
        LinkComponent={Link}
        to={`/books/${_id}`}
        variant="outlined"
        href="#update"
        sx={{ mt: "auto" }}
      >
        Update
      </Button>
      <Button
        color="error"
        onClick={deleteHandler}
        variant="outlined"
        sx={{ mt: "auto" }}
      >
        Delete
      </Button>
    </div>
  );
};

export default Book;
