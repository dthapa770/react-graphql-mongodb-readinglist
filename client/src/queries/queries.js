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

export { GET_AUTHORS_QUERY, GET_BOOKS_QUERY, ADD_BOOK };
