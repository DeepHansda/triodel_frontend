import {CREATE_CONTACT,RETRIVE_CONTACTS,DELETE_CONTACT} from '../Common/types'
const initialState = [];

const contactReducer=(contacts=initialState,action)=>{
const {type,payload} = action
    switch(type){
        case CREATE_CONTACT :
            return [...contacts,payload]
        case RETRIVE_CONTACTS:
            return payload
        case DELETE_CONTACT :
            return contacts.filter(({id})=>id!==payload.id)
        default:
            return contacts
    }
}

export default contactReducer;