import { combineReducers } from 'redux';
import sessionErrorsReducer from './session_errors_reducer';
import noteErrorsReducer from './note_errors_reducer';

const errorsReducer = combineReducers({
    session: sessionErrorsReducer,
    note: noteErrorsReducer
})

export default errorsReducer;