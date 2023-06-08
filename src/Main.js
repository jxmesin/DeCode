import React from 'react';
import Home from './pages/Home';
import { Switch, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';

const Main = () => {
  return (
    <BrowserRouter>
        <Switch> {}
        <Route exact path='/' component={Home}></Route>
        </Switch>
    </BrowserRouter>
  );
}

export default Main;