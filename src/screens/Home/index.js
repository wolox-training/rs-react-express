import React from 'react';

import Navbar from '../../components/Navbar';
import BookList from '../../components/BookList';

const Home = () => (
  <div className="column">
    <Navbar />
    <BookList />
  </div>
);

export default Home;
