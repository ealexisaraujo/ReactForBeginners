import React from 'react';
import { getFunName } from '../helpers';

const StorePicker = () => (
  <form className='store-selector'>
    <h2>Please Enter a Store</h2>
    <input
      type='text'
      required
      placeholder='Store Name'
      defaultValue={getFunName()}
    />
    <button type='submit'>Visit store ⟶</button>
  </form>
);

export default StorePicker;
