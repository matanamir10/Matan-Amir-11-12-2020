import React, { Suspense, useEffect } from 'react';
import './App.scss';
import { CircularProgress } from '@material-ui/core';
import { Redirect, Route, Switch, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import Auth from '../Auth/Auth';
import { Navigation } from '../../components/Navigation/Navigation';
import { autoAuthenticate } from '../../store/actions/auth';

const ComposeEmail = React.lazy(() => import('../ComposeEmail/ComposeEmail'));
const ManageEmail = React.lazy(() => import('../ManageEmail/ManageEmail'));

export const App = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(autoAuthenticate());
  }, []);

  useEffect(() => {
    console.log(auth);
    if (auth.isAuth) {
      history.push('/');
    }
  }, [auth]);

  let app = (
    <>
      <Route component={Auth} />
      <Redirect from='/' to='/auth' />
    </>
  );
  if (auth.isAuth) {
    app = (
      <>
        <Navigation />
        <Suspense fallback={<CircularProgress color='secondary' />}>
          <Switch>
            {/* <Route path='/auth' component={Auth} /> */}
            <Route path='/compose' component={ComposeEmail} />
            <Route path='/manage' component={ManageEmail} />
            <Route component={() => <h1>Please select</h1>} />
          </Switch>
        </Suspense>
        <ToastContainer />
      </>
    );
  }
  return <div className='container'>{app}</div>;
};
