import React, { Component } from 'react';
import { connect } from 'react-redux';

import { removeItem } from './../actions/cartActions';
import { syncQuantity } from './../actions/catalogActions';

@connect((store) => {   
  return {
    itemsList: store.cart
  }
})

export default class Cart extends Component {

  _removeFromCart(item) {
    this.props.dispatch(removeItem(item));
    this.props.dispatch(syncQuantity({"item": item, "quantity": 0}));
  }

  render() {
    
    const { itemsList } = this.props;
    let subTotals = [];

    itemsList.map((item) => {
      subTotals.push(item.quantity * item.price);
    });

    return (
      <div className="cart">
      {itemsList.length !== 0 ? (
        <div className="contains-items">
          <h3>Your Cart Summary</h3>

        <div className="cart-overview">
          <div className="item-count">
            <span>Item(s) in cart</span>
            <span className="count-meter">{itemsList.length}</span>
          </div>

          <div className="grand-total">
            <span>Grand Total (INR)</span>
            <span className="total-amount">{subTotals.reduce((accumulator, currentValue) => accumulator + currentValue)}</span>
          </div>
        </div>

        <hr />

        <div className="cart-header">
          <div className="cart-item-title">Item</div>
          <div className="cart-quantity-title">Quantity</div>
          <div className="cart-total-title">Total (INR)</div>
        </div>

        {itemsList && itemsList.map((item, i) => (
          <div className="item-row" key={i}>
            <div className="cart-item-title">{item.brand}<br />{item.item}</div>
            <div className="cart-quantity-title">{item.quantity}</div>
            <div className="cart-total-title">{item.quantity * item.price}</div>
            <div className="remove-item" onClick={() => {this._removeFromCart(item.item)}}>x</div>
          </div>
        ))}
        </div>
      ) : (
        <div className="contains-no-items">
          <h3>Oops! Your cart is empty!</h3>
          <h4>Add items to proceed</h4>
        </div>
      )}
      </div>
    )
  }
}