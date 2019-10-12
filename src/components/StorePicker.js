import React, { useState } from 'react';
import { getFunName } from '../helpers';

const StorePicker = () => {
  const [form, setValues] = useState({
    email: ''
  });

  const handleInput = event => {
    setValues({
      ...form,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log(form);
  };
  return (
    <form className='store-selector' onSubmit={handleSubmit}>
      <h2>Please Enter a Store</h2>
      <input
        type='text'
        required
        placeholder='Store Name'
        defaultValue={getFunName()}
        onChange={handleInput}
      />
      <button type='submit'>Visit store ⟶</button>
    </form>
  );
};

export default StorePicker;
