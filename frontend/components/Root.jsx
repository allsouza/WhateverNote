import React from "react";
import { Provider } from "react-redux"
import { HashRouter, Route } from "react-router-dom";
import {AuthRoute, ProtectedRoute} from '../util/route_util';
import Splash from './Splash';
import Auth from './auth/auth';
import App from './App';

export default function Root({store}){
    return(
        <Provider store={store}>
            <HashRouter>
                <Route exact path='/' component={Splash} />
                <AuthRoute path="/auth" component={Auth} /> 
                <ProtectedRoute path='/app' component={App} />    
            </HashRouter>
        </Provider>
    )
}

//maybe switch statements