import React from 'react';
import { SubmitButton } from './Contacts.styled';

const Contacts = ({ contacts, onDeleteContact }) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          <p>
            {name}: {number}
            <SubmitButton type="button" onClick={() => onDeleteContact(id)}>
              Delete
            </SubmitButton>
          </p>
        </li>
      ))}
    </ul>
  );
};

export default Contacts;
