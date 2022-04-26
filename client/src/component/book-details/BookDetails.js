import React from "react";

import { gql, useQuery } from "@apollo/client";
import { GET_BOOK_QUERY } from "../../queries/queries";

import "./bookdetails.css";
const BookDetails = ({ bookId }) => {
  const { loading, data, error } = useQuery(GET_BOOK_QUERY, {
    variables: {
      id: bookId,
    },
  });

  console.log({ data });
  return (
    <>
      {!loading && (
        <div className="book-details">
          <h1>{data.book.name}</h1>
          <p>{data.book.genre}</p>
          <p>Author Name: {data.book.author.name}</p>
          <p>Other books by Author:</p>
          <ul className="other-books">
            {data.book.author.books.map((item) => {
              return <li key={item.id}>{item.name}</li>;
            })}
          </ul>
        </div>
      )}
    </>
  );
};

export default BookDetails;
