import { nanoid } from 'nanoid';

export const addContact = (name, number) => {
  return {
    type: 'contacts/addContact',
    payload: {
      id: 'id-' + nanoid(2),
      name,
      number,
    },
  };
};

export const findContact = value => {
  return {
    type: 'contacts/findContact',
    payload: value,
  };
};

export const deleteContact = contactId => {
  return {
    type: 'contacts/deletedContact',
    payload: contactId,
  };
};
