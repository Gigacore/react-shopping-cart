import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Button from './Button';
import QuantityBar from './QuantityBar';

import { addToCart } from './../actions/cartActions';
import { syncQuantity } from './../actions/catalogActions';

@connect((store) => {  
  return {
    cataLog: store.catalog
  }
})

export default class Item extends Component {

  constructor(props) {
    super(props);
  }
  
  _addToCart = (price, brandName, productName, quantity) => {
    const itemDetails = {
      item: productName,
      quantity: quantity,
      price: price,
      brand: brandName
    }

    this.setState({
      quantity: 1
    })

    const syncCatalog = {
      item: productName,
      quantity: quantity
    }

    this.props.dispatch(addToCart(itemDetails));
    this.props.dispatch(syncQuantity(syncCatalog));
  };

  render() {
    const { productImage, brandName, productName, packageDetail, price, quantity } = this.props;

    return (
      <div className="item-wrapper">
        <div className="item-container">
          <div className="product-img">
            <img src={productImage} alt={productName} />
          </div>
          <div className="product-details">
            <div className="brand-name">
              {brandName}
            </div>
            <div className="product-name">
              {productName}
            </div>
            <div className="package-detail">
                {packageDetail}
            </div>
            <div className="product-price">
              INR {price}
            </div>
            {(quantity === 0 || quantity === undefined) ? <Button onClick={() => { this._addToCart(price, brandName, productName, 1) }} /> : <QuantityBar item={productName} />}
          </div>
        </div>
      </div>
    )
  }
}