import {CREATE_CONTACT,RETRIVE_CONTACTS,DELETE_CONTACT} from '../Common/types'
import contactServices from '../Common/contact_services'


export const createContact = (data)=>async(dispatch)=>{
    try{
        const res = await contactServices.createContact(data);
        dispatch({
            type:CREATE_CONTACT,
            payload:res.data
        })
        return Promise.resolve(res.data)
    }
    catch(err){
        return Promise.reject(err)
    }
}

export const getContacts = ()=>async(dispatch)=>{
    try{
        const res = await contactServices.getContacts();
        dispatch({
            type:RETRIVE_CONTACTS,
            payload:res.data
        })
        return Promise.resolve(res.data)
    }
    catch(err){
        return Promise.reject(err)
    }
}

export const deleteContact= (id)=>async(dispatch)=>{
    try{
        dispatch({
            type:DELETE_CONTACT,
            payload:id
        })
    }
    catch(err){
        return Promise.reject(err)
    }
}