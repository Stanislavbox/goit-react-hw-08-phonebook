import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchContacts, deleteContact, addContact } from './operations';
export const handlerPendingDelete = state => {
  state.isDeleting = true;
};
export const handlerPendingAdd = state => {
  state.isAdding = true;
};
export const handlerError = (state, action) => {
  state.isDeleting = false;
  state.isAdding = false;
  state.error = action.payload;
};
export const handlerFetchContactsFulfilled = (state, action) => {
  state.items = action.payload;
  state.isDeleting = false;
  state.isAdding = false;
  state.error = null;
};
export const handlerAddContactFulfilled = (state, action) => {
  state.isDeleting = false;
  state.isAdding = false;
  state.error = null;
  state.items.push(action.payload);
};
export const handlerDeleteContactFulfilled = (state, action) => {
  state.isDeleting = false;
  state.isAdding = false;
  state.error = null;
  const index = state.items.findIndex(({ id }) => id === action.payload.id);
  state.items.splice(index, 1);
};

const arrayTHunk = [fetchContacts, deleteContact, addContact];
const handlerActionCreatorByStatus = type => {
  return arrayTHunk.map(item => item[type]);
};
const contactsInitialState = {
  items: [],
  isAdding: false,
  isDeleting: false,
  // isLoading: false,
  error: null,
};
export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, handlerFetchContactsFulfilled)
      .addCase(deleteContact.fulfilled, handlerDeleteContactFulfilled)
      .addCase(addContact.fulfilled, handlerAddContactFulfilled)
      .addCase(deleteContact.pending, handlerPendingDelete)
      .addCase(addContact.pending, handlerPendingAdd)
      .addMatcher(
        isAnyOf(...handlerActionCreatorByStatus('rejected')),
        handlerError
      );
  },
});

export const contactsReducer = contactsSlice.reducer;