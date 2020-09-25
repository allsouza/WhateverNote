import React from 'react';
import SidebarContainer from './app_components/side_bar/side_bar_container';
import NotesIndexContainer from './app_components/notes_index/notes_index_container';
import {ProtectedRoute} from '../util/route_util';
import Modal from './modals/modal'

export default function App(){
    return(
        <div className="app">
            <Modal />
            <SidebarContainer/>
            <ProtectedRoute path='/app/notes' component={NotesIndexContainer} />
        </div>
    )
}