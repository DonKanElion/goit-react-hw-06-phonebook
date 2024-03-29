import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  contacts: [
    { id: 'id-1', name: 'Testing Holly', number: '443-89-12' },
    { id: 'id-2', name: 'Bradley Cooper', number: '443-89-12' },
    { id: 'id-3', name: 'Elijah Jordan', number: '443-89-12' },
    { id: 'id-4', name: 'Aaron Paul', number: '645-17-79' },
    { id: 'id-5', name: 'Viggo Peter', number: '227-91-26' },
  ],
  filter: '',
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        const newContact = action.payload;
        state.contacts.push(newContact);
      },

      prepare(name, number) {
        return {
          payload: {
            id: 'id-' + nanoid(2),
            name,
            number,
          },
        };
      },
    },

    deleteContact(state, action) {
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        ),
      };
    },

    findContact(state, action) {
      return {
        ...state,
        filter: action.payload,
      };
    },
  },
});

export const { addContact, deleteContact, findContact } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;
