import React, { useContext } from "react";
import { BooksContext } from "..";
import "../styles/home.css";
import { useParams } from "react-router-dom";

const Book = () => {
  // contextte bulunan kitaba erişmek için urldeki index parametresini alıyoruz
  let { index } = useParams();
  const { books } = useContext(BooksContext);

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="book-info-container">
        <h3>{books[index].volumeInfo.title}</h3>

        <div className="book-content">
          <img src={books[index].volumeInfo.imageLinks.thumbnail} />

          <div className="book-content-inner-info-labels">
            <label className="book-info-label">Authors:</label>
            <label className="book-info-label">Categories:</label>
            <label className="book-info-label">Maturity Rating:</label>
            <label className="book-info-label">Page Count:</label>
            <label className="book-info-label">Language:</label>
            <label className="book-info-label">Publisher:</label>
            <label className="book-info-label">Published Date:</label>
          </div>

          <div className="book-content-inner-info-texts">
            <label className="book-info-text">{`${books[
              index
            ].volumeInfo.authors.map((a) => a)}`}</label>
            <label className="book-info-text">{`${books[
              index
            ].volumeInfo.categories?.map((a) => a)}`}</label>
            <label className="book-info-text">
              {books[index].volumeInfo.maturityRating}
            </label>
            <label className="book-info-text">
              {books[index].volumeInfo.pageCount}
            </label>
            <label className="book-info-text">
              {books[index].volumeInfo.language}
            </label>
            <label className="book-info-text">
              {books[index].volumeInfo.publisher || "No Info"}
            </label>
            <label className="book-info-text">
              {books[index].volumeInfo.publishedDate}
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
