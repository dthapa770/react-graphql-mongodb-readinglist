import { useQuery } from "@apollo/client";

import { GET_AUTHORS_QUERY } from "../queries/queries";

const AddBook = () => {
  const { loading, error, data } = useQuery(GET_AUTHORS_QUERY);
  console.log({ data, error });
  return (
    <div>
      {loading ? (
        <h1>loading....</h1>
      ) : (
        <div>
          <h1>Add Book</h1>
          <form>
            <div className="field">
              <label>Book name:</label>
              <input type="text" />
            </div>
            <div className="field">
              <label>Genre:</label>
              <input type="text" />
            </div>
            <div className="field">
              <label>Author:</label>
              <select>
                {data.authors.map((author) => (
                  <option key={author.id}>{author.name}</option>
                ))}
              </select>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default AddBook;
