const initialState = {
  contacts: [
    { id: 'id-1', name: 'Reducer Test', number: '443-89-12' },
    { id: 'id-2', name: 'Flying good!', number: '443-89-12' },
    { id: 'id-3', name: 'Aaron Paul', number: '645-17-79' },
  ],
  filter: '',
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'contacts/addContact': {
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };
    }
    case 'contacts/deletedContact': {
      return {
        ...state,
        contacts: state.contacts.filter(contact => contact.id !== action.payload),
      };
    }

    default:
      return state;
  }
};
