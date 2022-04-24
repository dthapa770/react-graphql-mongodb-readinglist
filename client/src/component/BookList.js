import { useQuery } from "@apollo/client";

import { GET_BOOKS_QUERY } from "../queries/queries";
const BookList = () => {
  const { loading, error, data } = useQuery(GET_BOOKS_QUERY);

  return (
    <div className="main">
      <h1>Book List:</h1>
      <ul id="book-list">
        {loading ? (
          <h1>Loading....</h1>
        ) : (
          data.books.map((book) => {
            return <li key={book.id}>{book.name}</li>;
          })
        )}
      </ul>
    </div>
  );
};

export default BookList;
