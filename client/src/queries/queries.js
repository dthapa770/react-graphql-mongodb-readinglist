import { useMutation, gql } from "@apollo/client";

const GET_AUTHORS_QUERY = gql`
  query GetAuthors {
    authors {
      name
      id
    }
  }
`;
const GET_BOOKS_QUERY = gql`
  query GetBooks {
    books {
      name
      id
    }
  }
`;

const ADD_BOOK = gql`
  mutation AddBook($name: String!, $genre: String!, $authorId: ID!) {
    addBook(name: $name, genre: $genre, authorId: $authorId) {
      name
      genre
    }
  }
`;

const GET_BOOK_QUERY = gql`
  query GetBook($id: ID) {
    book(id: $id) {
      id
      name
      genre
      author {
        id
        name
        age
        books {
          name
          id
        }
      }
    }
  }
`;
export { GET_AUTHORS_QUERY, GET_BOOKS_QUERY, ADD_BOOK, GET_BOOK_QUERY };
