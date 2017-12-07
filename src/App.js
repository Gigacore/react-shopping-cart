import React, { Component } from 'react';
import Catalog from './components/Catalog';
import Cart from './components/Cart';

import { connect } from 'react-redux';
import { getData } from './actions/catalogActions';

@connect((store) => {  
  return {
    items: store.catalog,
    cartItems: store.cart
  }
})

class App extends Component {

  componentDidMount() {
    this.props.dispatch(getData());
  }

  render() {

    const { items, cartItems } = this.props;

    return (
      items === undefined ? (
        <div>Loading...</div>
      ) : (
        <div className="wrap">
          <Catalog items={items}/>
          <Cart />
        </div>
      )
    )
  }
}

export default App;