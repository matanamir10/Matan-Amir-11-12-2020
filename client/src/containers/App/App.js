import React from 'react';
import { Route, Switch } from 'react-router-dom';

export const App = () => {
  return (
    <Switch>
      <Route component={() => <h1>This works</h1>} />
    </Switch>
  );
};
