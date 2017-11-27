import React, { Component } from 'react';
import Item from './Item';

import { connect } from 'react-redux';

export default class Catalog extends Component {
  render() {
    const { items } = this.props;

    //First fetch returns items inside the items. Post cart update, returns items.
    //TODO: Revisit to optimize the structure on first fetch
    const catalogItems = items.items ? items.items : items; 

    return (
      <div className="item-catalog">
        {catalogItems && catalogItems.map((item, i) => (
          <Item 
            {...item}
            key={i}
            quantity={item.quantity && item.quantity}
          />
        ))}
      </div>
    )
  }
}