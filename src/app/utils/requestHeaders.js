import axios from 'axios';

export default function requestHeaders(token) {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  axios.defaults.headers.common['Content-Type'] = 'application/json';

  return null;
}
