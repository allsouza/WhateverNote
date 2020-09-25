import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { closeModal } from '../../actions/modal_actions';
import NoteInfo from './note_info_container';
import NewNotebookContainer from '../modals/new_notebook_container';

function Modal({modal, closeModal}){

    if(!modal) return null;

    let component;
    switch (modal) {
        case 'noteInfo':
            component=<NoteInfo />
            break;
        case 'newNotebook':
            component=<NewNotebookContainer />
            break;
        default:
            return null;
    }

    return(
        <div className="modal-bckgrd" onClick={closeModal}>
            <div className="modal-ele" onClick={e=>e.stopPropagation()}>{component}</div>
        </div>
    )
}

const mSTP = state => ({
    modal: state.ui.modal
})

const mDTP = dispatch => ({
    closeModal: () => dispatch(closeModal())
})

export default withRouter(connect(mSTP, mDTP)(Modal))