import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'

axios.defaults.baseURL = "https://connections-api.goit.global/"


export const fetchContacts  = createAsyncThunk(
    'contacts/fetchAll',
    async(_,thunkApi) =>{
        try{
            const resp = await axios.get('/contacts');
            return resp.data;
        }
        catch(error){
            return thunkApi.rejectWithValue(error.message)
        }
    }
);

export const addContact  = createAsyncThunk(
    'contacts/addContact',
    async(newContact,thunkApi) =>{
        try{
            const resp = await axios.post('/contacts', newContact);
            return resp.data;
        }
        catch(error){
            return thunkApi.rejectWithValue(error.message)
        }

    }
);

export const deleteContact  = createAsyncThunk(
    'contacts/deleteContact',
    async(contactId,thunkApi) =>{
        try{
            const resp = await axios.delete(`/contacts/${contactId}`);
            return resp.data;
        }
        catch(error){
            return thunkApi.rejectWithValue(error.message)
        }

    }
);

// taken from my hw 7  contactsOps.js, 