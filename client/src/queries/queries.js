import { gql } from "@apollo/client";
const GET_AUTHORS_QUERY = gql`
  query {
    authors {
      name
      id
    }
  }
`;
const GET_BOOKS_QUERY = gql`
  query {
    books {
      name
      id
    }
  }
`;

export { GET_AUTHORS_QUERY, GET_BOOKS_QUERY };
