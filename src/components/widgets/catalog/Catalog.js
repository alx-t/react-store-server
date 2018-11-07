import React, { Component } from 'react';

import ProductCard from './ProductCard';
import TextBox from './elements/TextBox';

export default class Catalog extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { products } = this.props;
    const productCards = products.map((product) => {
      return (
        <div key={product.id} className='card-container'>
          <ProductCard product={product} />
        </div>
      );
    });

    return (
      <div>
        <h3>
          <TextBox>Catalog</TextBox>
        </h3>
        <div className='container'>
          {productCards}
        </div>
      </div>
    );
  }
}
