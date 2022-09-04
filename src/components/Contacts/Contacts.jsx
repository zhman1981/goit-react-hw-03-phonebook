import React from 'react';
import { css } from '@emotion/css';

const Contacts = ({ contacts, onDeleteContact }) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          <p>
            {name}: {number}
            <button
              type="button"
              onClick={() => onDeleteContact(id)}
              className={css`
                margin-left: 20px;
                border-radius: 4px;
              `}
            >
              Delete
            </button>
          </p>
        </li>
      ))}
    </ul>
  );
};

export default Contacts;
