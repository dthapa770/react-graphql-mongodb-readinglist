import { useQuery, useMutation } from "@apollo/client";
import { useState } from "react";
import {
  GET_AUTHORS_QUERY,
  ADD_BOOK,
  GET_BOOKS_QUERY,
} from "../../queries/queries";

import "./addbook.css";

const initialValues = {
  name: "",
  genre: "",
  authorId: "",
};
const AddBook = () => {
  const { loading, data } = useQuery(GET_AUTHORS_QUERY);
  const [values, setValues] = useState(initialValues);

  const [addBook] = useMutation(ADD_BOOK, {
    variables: {
      name: values.name,
      genre: values.genre,
      authorId: values.authorId,
    },
    refetchQueries: [{ query: GET_BOOKS_QUERY }],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(values);
    addBook();
  };
  return (
    <div>
      {loading ? (
        <h1>loading....</h1>
      ) : (
        <>
          <form className="form-addbook" onSubmit={handleSubmit}>
            <div className="field">
              <label>Book name:</label>
              <input
                value={values.name}
                name="name"
                onChange={handleInputChange}
                type="text"
              />
            </div>
            <div className="field">
              <label>Genre:</label>
              <input
                value={values.genre}
                name="genre"
                onChange={handleInputChange}
                type="text"
              />
            </div>
            <div className="field">
              <label>Author:</label>
              <select onChange={handleInputChange} name="authorId">
                <option>Select Author</option>
                {data.authors.map((author) => (
                  <option key={author.id} value={author.id}>
                    {author.name}
                  </option>
                ))}
              </select>
            </div>
            <button type="Submit">+</button>
          </form>
        </>
      )}
    </div>
  );
};

export default AddBook;
