import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import StorePicker from '../components/StorePicker';
import Home from '../components/Home';
import NotFound from '../components/NotFound';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={StorePicker} />
      <Route exact path='/store/:storeId' component={Home} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default App;
