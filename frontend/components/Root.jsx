import React from "react";
import { Provider } from "react-redux"
import { HashRouter, Route } from "react-router-dom";
import Splash from './Splash';
import Auth from './auth/auth';

export default function Root({store}){
    return(
        <Provider store={store}>
            <HashRouter>
                <Route exact path='/' component={Splash} />
                <Route path="/auth" component={Auth} />     
            </HashRouter>
        </Provider>
    )
}

//maybe switch statements