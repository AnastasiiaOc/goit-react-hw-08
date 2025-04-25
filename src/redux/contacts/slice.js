import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';
import {logout} from './operations'
// import {selectNameFilter} from './filtersSlice';  WENT TO SELECTORS

// WENT TO SELECTOS
// / export const selectContacts = state => state.contacts.items;
// export const selectIsLoading = state => state.contacts.loading;
// export const selectIsError = state => state.contacts.error;

// export const selectFilteredContacts = createSelector([selectContacts, selectNameFilter], (contacts, contactsFilter) => {
//     return contacts.filter(contact => contact.name.toLowerCase().includes(contactsFilter.toLowerCase()));
//   });

    const contactsSlice = createSlice({
        name: 'contacts',
        initialState: {
          items: [],
          loading: false,
          error: null,
        },
extraReducers: (builder) => {
    builder
    .addCase(fetchContacts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload; 
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload; 
      })
      .addCase(addContact.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.loading = false;
        state.items.push(action.payload);
      })
      .addCase(addContact.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(deleteContact.fulfilled, (state, action) => {
        state.loading = false;
        state.items = state.items.filter((item) => item.id !== action.payload.id);
      }) 
   
      .addCase(deleteContact.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(logout.fulfilled, (state) => {
        state.items = [];
      });   
},
});

export default contactsSlice.reducer;
// taken from my HW 7  contactsSlice.js