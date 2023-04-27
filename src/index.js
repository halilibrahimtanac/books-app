import React, { createContext, useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

export const BooksContext = createContext();

//context oluşturulmasının sebebi tek kitap requesti olmadığı için detay sayfasından ilgili kitaba buradan ulaşılır.
export const BooksContextProvider = (props) => {
  const [books, setBooks] = useState([]);

  return (
    <BooksContext.Provider value={{ books, setBooks }}>
      {props.children}
    </BooksContext.Provider>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BooksContextProvider>
        <App />
      </BooksContextProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
