import {RECEIVE_ALL_NOTES, RECEIVE_NOTE, REMOVE_NOTE} from '../actions/note_actions';

export default function notesReducer(state={}, action){
    Object.freeze(state);
    let newState = {};
    switch (action.type) {
        case RECEIVE_ALL_NOTES:
            action.notes.forEach(note=>{newState[note.id] = note})
            return newState;
        case RECEIVE_NOTE:
            return Object.assign({}, state, {[action.note.id]: action.note})
        case REMOVE_NOTE:
            newState = Object.assign({}, state);
            delete newState[action.noteId];
            return newState;    
        default:
            return state;
    }
}