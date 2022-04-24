import { gql, graphql, useQuery } from "@apollo/client";

const getBooksQuery = gql`
  query {
    books {
      name
      id
    }
  }
`;
const BookList = () => {
  const { loading, error, data } = useQuery(getBooksQuery);

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
