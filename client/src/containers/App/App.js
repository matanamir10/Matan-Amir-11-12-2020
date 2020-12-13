import React, { Suspense, useEffect } from 'react';
import './App.scss';
import { Redirect, Route, Switch, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import Auth from '../Auth/Auth';
import { Navigation } from '../../components/Navigation/Navigation';
import { Loading } from '../../UI/Loading/Loading';
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
    if (auth.isAuth) {
      history.push('/compose');
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
        <Suspense fallback={<Loading />}>
          <Switch>
            <Route path='/auth' component={Auth} />
            <Route path='/compose' component={ComposeEmail} />
            <Route path='/manage' component={ManageEmail} />
            <Redirect from='/' to='/compose' />
          </Switch>
        </Suspense>
        <ToastContainer />
      </>
    );
  }
  return <div className='container'>{app}</div>;
};
