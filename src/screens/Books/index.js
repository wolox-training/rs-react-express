import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

import { getBookById } from '../../services/BookServices';
import Navbar from '../../components/Navbar';
import defaultImageBook from '../../assets/book.jpg';

const Books = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [bookDetails, setBookDetails] = useState(null);

  useEffect(() => {
    setLoading(true);
    getBookById(id)
      .then(
        response => {
          if (response && response.data) {
            const regex = /,(?!\s*?[{["'\w])/g;
            const withoutTrailiingComma = response.data.replace(regex, '');
            setBookDetails(JSON.parse(withoutTrailiingComma));
          }
        },
        () => setBookDetails(null)
      )
      .finally(() => setLoading(false));
  }, [id]);
  return (
    <div className="column">
      <Navbar />
      {loading && <div className="row">Loading...</div>}
      {!loading && !bookDetails && <div className="row center m-top-5">Sin información</div>}
      {!loading && bookDetails && (
        <div className="row center m-top-5">
          <img src={bookDetails.image_url || defaultImageBook} alt="" />
          <div className="column m-left-2">
            <div className="row">
              <h1>{bookDetails.title}</h1>
              <span className="m-left-2 m-bottom-3">({bookDetails.genre})</span>
            </div>
            <hr />
            <div className="row m-top-5">
              <span>Autor del libro:</span>
              <span className="m-left-2">{bookDetails.author}</span>
            </div>
            <div className="row m-top-2">
              <span>Editorial</span>
              <span className="m-left-2">{bookDetails.publisher}</span>
            </div>
            <div className="row m-top-2">
              <span>Año de publicación</span>
              <span className="m-left-2">{bookDetails.year}</span>
            </div>
          </div>
        </div>
      )}
      <Link to="/books" className="App-link m-top-8">
        &#x2190; Volver
      </Link>
    </div>
  );
};

export default Books;
