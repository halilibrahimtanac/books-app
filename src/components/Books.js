import React from "react";
import "../styles/home.css";
import { NavLink } from "react-router-dom";

const Books = ({ books }) => {
  return (
    <div className="books-container">
      {books?.map((b, i) => (
        <div className="single-book" key={i}>
          {/* bazı kitapların resmi olmadığı durumlarda no image box'ını gösteriyoruz */}
          {b.volumeInfo.imageLinks ? (
            <img
              src={
                b.volumeInfo.imageLinks.smallThumbnail
                  ? b.volumeInfo.imageLinks.smallThumbnail
                  : b.volumeInfo.imageLinks.thumbnail
              }
            />
          ) : (
            <label className="no-image">No Image</label>
          )}
          <NavLink to={`/book/${i}`}>Details</NavLink>
          <label>{b.volumeInfo.title}</label>
        </div>
      ))}
    </div>
  );
};

export default Books;
