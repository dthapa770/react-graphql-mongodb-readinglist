import React from "react";

import { gql, useQuery } from "@apollo/client";
import { GET_BOOK_QUERY } from "../queries/queries";
const BookDetails = ({ bookId }) => {
  const { loading, data, error } = useQuery(GET_BOOK_QUERY, {
    variables: {
      id: bookId,
    },
  });

  console.log({ data });
  return (
    <div>
      {!loading && (
        <div className="book-details">
          <h1>{data.book.name}</h1>
          <p>{data.book.genre}</p>
          <p>Other books by Author:</p>
          <ul className="other-books">
            {data.book.author.books.map((item) => {
              return <li key={item.id}>{item.name}</li>;
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default BookDetails;
