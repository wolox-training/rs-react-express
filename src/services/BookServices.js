import api from '../config/api';

export const getBooks = () => api.get('/bookslist');

export const getBookById = id => api.get(`/books/${id}`);
