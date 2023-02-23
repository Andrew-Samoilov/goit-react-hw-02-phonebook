import React from "react";
import { nanoid } from 'https://cdn.jsdelivr.net/npm/nanoid/nanoid.js'
import ContactForm from "./ContactForm";
import { ContactList } from "./ContactList";
import Filter from "./Filter";
import css from './ContactForm.module.css'

class App extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie SIIIimpson', number: '459-12-56' },
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

  formSubmitHandler = data => {
    const newData = {
      id: nanoid(4),
      name: data.name,
      number: data.number,
    }

    this.setState(({ contacts }) => ({
      contacts: [newData, ...contacts],
    }));
  };

  render() {
    return (
      <div className={css.mainDiv}>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.formSubmitHandler} />
        <h2>Contacts</h2>
        <Filter value={this.state.filter} onChange={this.changeFilter} />
        <ContactList stateContact={this.state.contacts} />
      </div>);
  }
}

export default App;