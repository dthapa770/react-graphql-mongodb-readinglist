import { ApolloClient, ApolloProvider } from "@apollo/client";
import BookList from "./component/BookList";
// appolo client setup
const client = new ApolloClient({
  uri: "https://localhost:4000/graphql",
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <BookList />
      </div>
    </ApolloProvider>
  );
}

export default App;
