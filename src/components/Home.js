import React, { useContext, useState } from "react";
import "../styles/home.css";
import { useQuery } from "react-query";
import Books from "./Books";
import { BooksContext } from "..";

const Home = () => {
  const bookCtx = useContext(BooksContext);
  const [srcParam, setSrcParam] = useState("");
  const { data, refetch } = useQuery(
    "books",
    () =>
      fetch("https://www.googleapis.com/books/v1/volumes?q=" + srcParam)
        .then((res) => res.json())
        .then((r) => {
          console.log(r.items);
          bookCtx.setBooks(r.items);
        }),
    { enabled: false }
  );

  const submitHandler = (e) => {
    e.preventDefault();
    //query hook submit edildiğinde çalışmasını sağlayan fonksiyon
    refetch();
  };

  //boşlukları + işareti ile değiştirme
  const formatSrc = (val) => {
    val = val.replace(" ", "+");
    console.log(val);
    setSrcParam(val);
  };
  return (
    <>
      <div className="search-container">
        <h1>Book Search using React</h1>

        <form onSubmit={submitHandler}>
          <input type="text" onChange={(e) => formatSrc(e.target.value)} />
          <button type="submit">Search</button>
        </form>
      </div>

      <Books books={bookCtx.books} />
    </>
  );
};

export default Home;
