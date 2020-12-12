import React, { Suspense } from 'react';
import './App.scss';
import { Route, Switch } from 'react-router-dom';
import { CircularProgress } from '@material-ui/core';
import { Navigation } from '../../components/Navigation/Navigation';

const ComposeEmail = React.lazy(() => import('../ComposeEmail/ComposeEmail'));
const ManageEmail = React.lazy(() => import('../ManageEmail/ManageEmail'));

export const App = () => {
  return (
    <div className='container'>
      <Navigation />
      <div className='content'>
        <Suspense fallback={<CircularProgress color='secondary' />}>
          <Switch>
            <Route path='/compose' component={ComposeEmail} />
            <Route path='/manage' component={ManageEmail} />
          </Switch>
        </Suspense>
      </div>
    </div>
  );
};
