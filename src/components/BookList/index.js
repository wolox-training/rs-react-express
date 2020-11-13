import React, { useState, useEffect } from 'react';

import { getBooks } from '../../services/BookServices';
import defaultImageBook from '../../assets/book.jpg';

const BookList = () => {
  const [loading, setLoading] = useState(false);
  const [bookList, setBookList] = useState([]);

  useEffect(() => {
    setLoading(true);
    getBooks()
      .then(
        response => {
          if (response && response.data && response.data.length) {
            setBookList(response.data);
          }
        },
        () => setBookList([])
      )
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="column center m-top-5">
      <div className="row center m-bottom-5">
        <span>Lista de libros</span>
      </div>
      {loading && <div className="row">Loading...</div>}
      {!loading && !bookList.length && <div className="row">Sin libros</div>}
      <div className="row wrap center">
        {!loading &&
          bookList.length &&
          bookList.map(book => (
            <div className="column m-left-2 m-bottom-2" key={book.id}>
              <img src={book.image.url || defaultImageBook} alt="" />
              <span>{book.title}</span>
              <span>{book.author}</span>
            </div>
          ))}
      </div>
    </div>
  );
};

export default BookList;
