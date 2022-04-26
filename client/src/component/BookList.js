import { useQuery } from "@apollo/client";
import { useState } from "react";

import { GET_BOOKS_QUERY } from "../queries/queries";

import BookDetails from "./BookDetails";
import "./booklist.css";
const BookList = () => {
  const { loading, error, data } = useQuery(GET_BOOKS_QUERY);

  const [selected, setSelected] = useState("");

  const bookHandler = (e) => {
    e.preventDefault();
    const id = e.target.getAttribute("data-arg");
    console.log(typeof id);
    if (typeof id === "string" && id != null) {
      setSelected(id);
    }
  };

  return (
    <div>
      <h1>Book List:</h1>
      <ul id="book-list">
        {loading ? (
          <h1>Loading....</h1>
        ) : (
          data.books.map((book) => (
            <li key={book.id} onClick={bookHandler} data-arg={book.id}>
              {book.name}
            </li>
          ))
        )}
      </ul>
      {selected && <BookDetails bookId={selected} />}
    </div>
  );
};

export default BookList;
