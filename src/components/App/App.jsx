import { nanoid } from 'nanoid';
import { useState, useEffect } from 'react';

import { Container, Section, SubTitle, Title } from './App.styled';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';

function App() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const storedContacts = JSON.parse(localStorage.getItem('contacts'));
    if (storedContacts) {
      setContacts(storedContacts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const formSubmit = data => {
    const newData = { ...data };
    newData.id = nanoid(5);
    const isContactExist = contacts.find(
      contact => contact.name.toLowerCase() === data.name.toLowerCase()
    );
    if (isContactExist) {
      alert(`${data.name} is already in contacts`);
      return;
    }
    setContacts(prevState => [...prevState, newData]);
  };

  const filterChange = evt => {
    setFilter(evt.currentTarget.value);
  };

  const deleteContact = id => {
    setContacts(prevState => prevState.filter(contact => contact.id !== id));
  };

  return (
    <Container>
      <Section>
        <Title>Phonebook</Title>
        <ContactForm onSubmit={formSubmit} />
        <SubTitle>Contacts</SubTitle>
        <Filter value={filter} onChange={filterChange} />
        <ContactList
          contacts={contacts}
          filter={filter}
          onDelete={deleteContact}
        />
      </Section>
    </Container>
  );
}

export default App;
