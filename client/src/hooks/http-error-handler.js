import { useState, useEffect } from 'react';
import axios from 'axios';

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const [error, setError] = useState();

  const reqInterceptor = axios.interceptors.request.use(
    (req) => {
      console.log('1');
      setError(null);
      return Promise.resolve(req);
    },
    (err) => {
      setError(true);
      return Promise.reject(err.message);
    }
  );
  const resInterceptor = axios.interceptors.response.use(
    (res) => {
      console.log('3', res);
      setError(null);
      return Promise.resolve(res);
    },
    (err) => {
      console.log('4');
      console.log('Error', err?.response?.data);
      setError(err?.response?.data.errors[0].message || err.message);
      return Promise.reject(err);
    }
  );

  useEffect(() => {
    return () => {
      console.log('return');
      axios.interceptors.request.eject(reqInterceptor);
      axios.interceptors.response.eject(resInterceptor);
    };
  }, [reqInterceptor, resInterceptor]);

  const errorConfirmedHandler = () => {
    setError(null);
  };
  console.log('in hook', error);
  return [error, errorConfirmedHandler];
};
