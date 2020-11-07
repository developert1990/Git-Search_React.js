import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import { Browse } from '../pages/Browse';
import { Signin } from '../pages/Signin';
import { Signup } from '../pages/Signup';

const Router = () => {
    return (
        <BrowserRouter>
            <Route path="/browse" component={Browse} />
            <Route exact path="/" component={Signin} />
            <Route path="/signup" component={Signup} />
        </BrowserRouter>
    )
}

export default Router;