
import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import MainContainer from '@containers/MainContainer';
const routes = (
  <BrowserRouter>
    <Route path='/' component={MainContainer}>
    </Route>
  </BrowserRouter>
)
export default routes;