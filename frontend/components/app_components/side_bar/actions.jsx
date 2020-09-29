import React from 'react';
import NotebooksSidebar from './notebooks_sidebar_container';

export default function Actions({expand, select, expanded}){
        
    return(
        <ul className="actions">
                <li onClick={select} id="NotesIndex" className="action selected">
                    <i className="fas fa-caret-right invisible"></i><i className="fas fa-sticky-note"></i>All Notes
                </li>   
                <li onClick={select} id="NotebooksIndex" className="action">
                    <i onClick={ e =>{  e.currentTarget.classList.toggle('expanded');
                                        toggleCaret();
                                        e.stopPropagation();
                                        expand("notebooks")} }
                            className="fas fa-caret-right caret"></i>
                    {/* <i className="fas fa-caret-down"></i> */}
                    <i className="fas fa-book-open"></i>Notebooks
                </li>

                {expanded === "notebooks" ? <li className="expanded-sidebar">
                    <NotebooksSidebar /> 
                </li>: null}                   
        </ul>
    )
}

function toggleCaret(){
    const carets = document.getElementsByClassName('caret')
    Array.from(carets).forEach(caret=>{
        if (Array.from(caret.classList).includes('expanded')){
            caret.classList.remove("fa-caret-right")
            caret.classList.add("fa-caret-down")}
        else{
            caret.classList.remove("fa-caret-down")
            caret.classList.add("fa-caret-right")
        }
        })
}
