import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import Red from './red';
import Green from './green';
import Violet from './violet';
import Blue from './blue';
import '../index.css'

const Rainbow = () => (
  <div>
    <h1>Rainbow Router!</h1>
    <Route path="/red" component={Red} />
    <Route path="/green" component={Green} />
    <Route path="/blue" component={Blue} />
    <Route path="/violet" component={Violet} />

    <div id="rainbow">
       <NavLink to="/red">Red  </NavLink>
       <NavLink to="/green">Green  </NavLink>
       <NavLink to="/blue">Blue  </NavLink>
       <NavLink to="/violet">Violet  </NavLink>
    </div>
  </div>
);

export default Rainbow;
