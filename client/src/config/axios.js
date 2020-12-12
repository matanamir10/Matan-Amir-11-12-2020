import axios from 'axios';

console.log(
  'axios',
  !process.env.NODE_ENV || process.env.NODE_ENV === 'development'
);
if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
  axios.defaults.baseURL = 'http://localhost:4000';
} else {
  // production code
}
