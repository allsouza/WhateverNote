import {RECEIVE_ALL_NOTEBOOKS, REMOVE_NOTEBOOK, RECEIVE_NOTEBOOK} from '../actions/notebook_actions';

export default function notebooksReducer(state={}, action){
    Object.freeze(state);
    let newState = {};
    switch (action.type) {
        case RECEIVE_ALL_NOTEBOOKS:
            action.notebooks.forEach(notebook => newState[notebook.id] = notebook)
            return newState;
        case RECEIVE_NOTEBOOK:
            return Object.assign({}, state.entities.notebooks, {[action.notebook.id]: action.notebook});
        case REMOVE_NOTEBOOK:
            newState = Object.assign({}, state);
            delete newState[action.notebookId];
            return newState; 
        default:
          return state;
    }
}