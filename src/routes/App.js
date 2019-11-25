import React from 'react';
import Header from '../components/Header';
import Order from '../components/Order';
import Inventory from '../components/Inventory';

class App extends React.Component {
  initialState = {
    fishes: {},
    order: {},
  };
  addFish = fish => {
    // 1. Take a copy of the existing state
    const fishes = { ...this.initialState.fishes };
    // 2. Add our new fish to that fishes variable
    fishes[`fish${Date.now()}`] = fish;
    // 3. Set the new fishes object to state
    this.setState({ fishes });
  };
  render() {
    return (
      <div className='catch-of-the-day'>
        <div className='menu'>
          <Header tagline='Fresh Seafood Market' />
        </div>
        <Order />
        <Inventory addFish={this.addFish} />
      </div>
    );
  }
}

export default App;
