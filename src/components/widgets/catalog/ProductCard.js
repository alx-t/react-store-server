import React, { Component } from 'react';

import TextBox from './elements/TextBox';
import Price from './elements/Price';
import Image from './elements/Image';

import styles from './ProductCard.css';

export default class ProductCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { title, price, image } = this.props.product;
    return (
        <div className='card'>
          <div className='card-header'>
            <TextBox>{title}</TextBox>
          </div>
          <div className='card-main'>
            <Image
              alt={image.alt}
              src={image.src}
              width={image.width}
              height={image.height}
            />
            <div className='main-description'>
              <Price>{price}</Price>
            </div>
          </div>
        </div>
    );
  }
}
