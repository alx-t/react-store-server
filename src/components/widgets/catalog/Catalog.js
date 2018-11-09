import React, { Component } from 'react';

import ProductCard from './ProductCard';
import TextBox from './elements/TextBox';

import style from './Catalog.css';

export default class Catalog extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { products } = this.props;
    const productCards = products.map((product) => {
      return (
        <div key={product.id} style={style.cardContainer}>
          <ProductCard product={product} />
        </div>
      );
    });

    return (
      <div>
        <h3>
          <TextBox>Catalog</TextBox>
        </h3>
        <div style={style.container}>
          {productCards}
        </div>
      </div>
    );
  }
}
