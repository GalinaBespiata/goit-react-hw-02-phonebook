import React, { Component } from 'react';
import { Filter } from './Filter/Filter';

import { ContactList } from './ContactList/ContactList';
import { FormAddContacts } from './FormAddContacts/FormAddContacts';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = contact => {
    if (this.state.contacts.some(el => el.name === contact.name)) {
      alert('!!!');
      return;
    }
    const newContact = { id: nanoid(), ...contact };
    this.setState(prevState => ({
      contacts: [newContact, ...prevState.contacts],
    }));
    //
    // this.setState({
    //   contacts: this.state.contacts.splice(0, 0, newContact),
    // });
    // !this.state.contacts.includes(contact) && this.state.contacts.push(contact);
  };

  handleFilter = evt => {
    this.setState({
      filter: evt.target.value,
    });
  };

  onDeleteContact = contactId => {
    this.setState({
      contacts: this.state.contacts.filter(contact => contact.id !== contactId),
    });
  };

  render() {
    const filteredContacts = this.state.contacts.filter(contact =>
      contact.name
        .toLowerCase()
        .trim()
        .includes(this.state.filter.toLowerCase())
    );
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
          flexDirection: 'column',
        }}
      >
        <h1>Phonebook</h1>
        <FormAddContacts onSubmit={this.addContact} />
        <h2>Contacts</h2>
        <Filter value={this.state.filter} onFilterChange={this.handleFilter} />

        <ContactList
          contacts={filteredContacts}
          onDeleteContact={this.onDeleteContact}
        />
      </div>
    );
  }
}
