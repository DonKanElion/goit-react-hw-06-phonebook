import { createSlice, nanoid } from '@reduxjs/toolkit';
// import { nanoid } from 'nanoid';

const initialState = {
  contacts: [
    { id: 'id-1', name: 'Toolkit Testing', number: '443-89-12' },
    { id: 'id-2', name: 'Flying good!', number: '443-89-12' },
    { id: 'id-3', name: 'Aaron Paul', number: '645-17-79' },
    { id: 'id-4', name: 'My name is Mazafaq', number: '642-17-79' },
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
