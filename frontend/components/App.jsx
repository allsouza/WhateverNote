import React from 'react';
import SidebarContainer from './app_components/side_bar/side_bar_container';
import NotesIndexContainer from './app_components/notes_index/notes_index_container';
import EditorContainer from './app_components/editor/editor_container';

export default function App(){
    return(
        <div className="app">
            <SidebarContainer/>
            <NotesIndexContainer/>
            <EditorContainer/>
        </div>
    )
}