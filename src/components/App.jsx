import shortid from 'shortid';
import React, { Component } from 'react';
import SubmitForm from './SubmitForm/SubmitForm';
import Contacts from './Contacts/Contacts';
import Filter from './Filter/Filter';
import { css } from '@emotion/css';

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

  onFormResponse = data => {
    for (const contact of this.state.contacts) {
      if (contact.name === data.name) {
        alert('This name already exist!');
        return;
      }
    }
    this.setState(prevState => {
      return {
        contacts: [
          ...prevState.contacts,
          { id: shortid.generate(), name: data.name, number: data.number },
        ],
      };
    });
  };

  onInputFilter = evt => {
    this.setState({ filter: evt.currentTarget.value });
  };

  onDeleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { contacts, filter } = this.state;
    const filtredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    return (
      <div
        className={css`
          padding: 20px;
        `}
      >
        <h1>Phonebook</h1>
        <SubmitForm onSend={this.onFormResponse} />
        <h2>Contacts</h2>
        <Filter filter={filter} onInputFilter={this.onInputFilter} />
        <Contacts
          contacts={filtredContacts}
          onDeleteContact={this.onDeleteContact}
        />
      </div>
    );
  }
}
