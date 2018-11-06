import React, { Component } from 'react';

import ProductCard from './ProductCard';
import TextBox from './elements/TextBox';

import styles from './Catalog.css';

export default class Catalog extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { products } = this.props;
    const productCards = products.map((product) => {
      const { id, title, price, imageUrl } = product
      const cardItem = {
        image: {
          alt: 'Oops, no image',
          src: imageUrl,
          width: 200,
          height: 150
        },
        title: title,
        price: price
      }
      return (
        <div key={id} className='card-container'>
          <ProductCard product={cardItem} />
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
