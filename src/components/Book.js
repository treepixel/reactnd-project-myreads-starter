import React from 'react';
import Select from './Select';
import { Link } from 'react-router-dom';

const Book = ({ book, onUpdateBook }) => {
  const { id, title, authors, imageLinks } = book;
  const options = [
    { value: 'currentlyReading', name: 'Currently Reading' },
    { value: 'wantToRead', name: 'Want to Read' },
    { value: 'read', name: 'Read' },
    { value: 'none', name: 'None' }
  ];

  return (
    <div className="book">
      <Link to={`/book/${id}`}>
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 188,
              backgroundImage: `url(${
                imageLinks ? imageLinks.smallThumbnail : 'http://bit.ly/2BFHV2l'
              })`
            }}
          />
          <div className="book-shelf-changer">
            <Select options={options} book={book} handleChange={onUpdateBook} />
          </div>
        </div>
        <div className="book-title">{title}</div>
        <div className="book-authors">{authors}</div>
      </Link>
    </div>
  );
};

export default Book;
