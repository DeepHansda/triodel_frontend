import projectReducer from "./project_reducer";
import contactReducer from "./contact_reducer";
import {combineReducers} from  'redux'

const rootReducer = combineReducers({
    projectReducer:projectReducer,
    contactReducer:contactReducer
})

export default rootReducer