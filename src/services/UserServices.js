import api from '../config/api';

export const createUser = body => api.post('/users', body);

export const login = body => api.post('/users/sessions', body);
