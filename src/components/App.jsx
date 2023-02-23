import React from "react";
import {nanoid} from 'nanoid'
import { ContactList } from "./ContactList";
import ContactForm from "./ContactForm";

import Filter from "./Filter";
import css from './ContactForm.module.css'

class App extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie SIIimpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: ''
  }

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  }

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(
      contact => contact.name.toLowerCase().includes(normalizedFilter));
  }

  formSubmitHandler = data => {
    const newData = {
      id: nanoid(4),
      name: data.name,
      number: data.number,
    }

    if (this.state.contacts.filter(contact => contact.name === data.name).length>0) {
      alert(`${data.name} is alredy in contacts.`);
    } else {
      this.setState(({ contacts }) => ({
        contacts: [newData, ...contacts],
      }));
    }
  };
  
  deleteContact = (contactId) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }))
  };

  render() {  
    const visibleContacts = this.getVisibleContacts();

    return (
      <div className={css.mainDiv}>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.formSubmitHandler} />
        <h2>Contacts</h2>
        <Filter value={this.state.filter} onChange={this.changeFilter} />
        <ContactList stateContact={visibleContacts} onDeleteContact={this.deleteContact} />
      </div>);
  }
}

export default App;
