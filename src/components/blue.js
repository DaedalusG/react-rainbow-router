import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import Indigo from './indigo';

const Color = () => (
  <div>
    <h2 className="blue">Blue</h2>
    <NavLink exact to='/blue'>Blue Only</NavLink>
    <NavLink to='/blue/indigo'>Add Indigo</NavLink>

    <Route path='/blue/indigo' component={Indigo} />
  </div>
);

export default Color;
