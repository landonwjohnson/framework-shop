import React from 'react';
import {Switch, Route } from 'react-router-dom';

import Cart from './components/Cart/Car';
import Details from './components/Details/Details';
import Landing from './components/Landing/Landon';
import Shop from './components/Shop/Shop';


export default (
    <Switch>
        <Route component={ Landing } exact path="/" />
        <Route component={ Shop } path="/shop" />
        <Route component={ Details } path="/details/:name" />
        <Route component={ Cart } path="/cart" />
    </Switch>
)
