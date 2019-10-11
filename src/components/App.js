import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';

const App = () => (
  <div className='catch-of-the-day'>
    <div className='menu'>
      <Header tagline='Fresh Seafood Market' />
    </div>
    <Inventory />
    <Order />
  </div>
);

export default App;
