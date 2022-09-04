import React from 'react';

const Filter = ({ filter, onInputFilter }) => (
  <>
    <p>Find contact by name:</p>
    <label>
      <input type="text" value={filter} onChange={onInputFilter} />
    </label>
  </>
);

export default Filter;
