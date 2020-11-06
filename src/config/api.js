import { create } from 'apisauce';

const baseURL = 'http://private-anon-9cc003369b-wbooksapi.apiary-mock.com/api/v1';

const api = create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
  timeout: 15000
});

export default api;
