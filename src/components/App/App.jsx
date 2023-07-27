import { Container, Section, SubTitle, Title } from './App.styled';
import { Component } from 'react';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import { nanoid } from 'nanoid';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const contacts = JSON.parse(localStorage.getItem('contacts'));
    if (contacts) {
      this.setState({ contacts });
    }
  }

  componentDidUpdate(prevState) {
    const { contacts } = this.state;
    if (prevState.contacts !== contacts) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }

  formSubmit = data => {
    const newData = { ...data };
    newData.id = nanoid(5);
    const { contacts } = this.state;
    const isContactExist = contacts.find(
      contact => contact.name.toLowerCase() === data.name.toLowerCase()
    );
    if (isContactExist) {
      alert(`${data.name} is already in contacts`);
      return;
    }
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newData],
    }));
  };

  filterChange = evt => {
    this.setState({ filter: evt.currentTarget.value });
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const { contacts, filter } = this.state;
    return (
      <Container>
        <Section>
          <Title>Phonebook</Title>
          <ContactForm onSubmit={this.formSubmit} />
          <SubTitle>Contacts</SubTitle>
          <Filter value={filter} onChange={this.filterChange} />
          <ContactList
            contacts={contacts}
            filter={filter}
            onDelete={this.deleteContact}
          />
        </Section>
      </Container>
    );
  }
}

export default App;
