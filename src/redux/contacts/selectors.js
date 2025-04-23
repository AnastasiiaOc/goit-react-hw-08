//take it fom operation s and slice
import {selectNameFilter} from '../filters/selectors';
import { createSelector } from '@reduxjs/toolkit'; // cama from slice

export const selectContacts = state => state.contacts.items;
export const selectIsLoading = state => state.contacts.loading;
export const selectIsError = state => state.contacts.error;

export const selectFilteredContacts = createSelector([selectContacts, selectNameFilter], (contacts, contactsFilter) => {
    return contacts.filter(contact => contact.name.toLowerCase().includes(contactsFilter.toLowerCase()));
  });




// export const selectFilteredContacts = createSelector([selectContacts, selectFilterQuery], (contact, filter) => {
//   const normalFilter = filter.toLowerCase();
//   return contact.filter(
//     contact => contact.name.toLowerCase().includes(normalFilter) || contact.number.includes(normalFilter)
//   );
// }); willy