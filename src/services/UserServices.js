import api from '../config/api';

export const createUser = body => api.post('/users', body);
