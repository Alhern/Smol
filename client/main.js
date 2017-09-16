import { Meteor } from 'meteor/meteor';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from '../imports/ui/Login';
import Register from '../imports/ui/Register';
import Link from '../imports/ui/Link';
import NotFound from '../imports/ui/NotFound';

const routes = (
    <BrowserRouter>
        <Switch>
//'Exact' is used to state that that route should only match when the pathname matches the route’s path exactly.     
        <Route exact path='/' component={Login}/>
        <Route path='/register' component={Register}/>
        <Route path='/link' component={Link}/>
        <Route path='*' component={NotFound}/>
        </Switch>
    </BrowserRouter>
);

Meteor.startup(() => {
   ReactDOM.render(routes, document.getElementById('app')); 
});