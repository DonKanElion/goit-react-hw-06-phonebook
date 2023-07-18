// import { useState } from 'react';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { ContactForm } from 'components/ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter';


export function App() {
  const contacts = useSelector(getContacts);

  return (
    <div
      style={{
        display: 'block',
        textAlign: 'center',
        marginBottom: '20px',
        color: '#010101',
      }}
      className="section"
    >
      <h1 className="hero_title">Phonebook</h1>

      <ContactForm contacts={contacts}></ContactForm>

      {contacts.length !== 0 ? (
        <>
          <Filter></Filter>
          <ContactList></ContactList>

        </>
      ) : (
        <p>Looks like you don`t have any contacts. Please add new contact.</p>
      )}
    </div>
  );
}
