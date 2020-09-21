import React from "react";
import { Provider } from "react-redux"
import { HashRouter, Route } from "react-router-dom";
import Splash from './Splash';

export default function Root({store}){
    return(
        <Provider store={store}>
            <HashRouter>
                <Route path='/' component={Splash} />
            </HashRouter>
        </Provider>
    )
}

//maybe switch statements