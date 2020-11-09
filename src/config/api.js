import { create } from 'apisauce';

import LocalStorage from '../services/LocalStorageServices';

const baseURL = 'http://private-anon-9cc003369b-wbooksapi.apiary-mock.com/api/v1';

const api = create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
  timeout: 15000
});

api.axiosInstance.interceptors.request.use(
  config => {
    const session = LocalStorage.getValue('session');
    if (session && session.access_token) config.headers.Authorization = session.access_token;
    return config
  },
  error => Promise.reject(error)
)

const tokenMonitor = response => {
  const { ok, status } = response;
  if (!ok && status !== 200) LocalStorage.removeValue('session');
}

api.addMonitor(tokenMonitor);

export default api;
