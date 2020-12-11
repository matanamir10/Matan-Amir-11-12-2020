import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ComposeEmail } from '../ComposeEmail/ComposeEmail';

export const App = () => {
  return (
    <Switch>
      <Route component={() => <ComposeEmail />} />
    </Switch>
  );
};
