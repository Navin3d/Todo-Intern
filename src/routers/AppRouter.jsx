import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from '../pages/home.jsx';
import NotFound from '../pages/404.jsx';

const AppRouter = () => (
  <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact={true} />
        <Route component={NotFound} />
      </Switch>
  </BrowserRouter>
);

export default AppRouter;
