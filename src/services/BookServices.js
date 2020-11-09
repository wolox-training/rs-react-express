import api from '../config/api';

export const getBooks = () => api.get('/bookslist');
