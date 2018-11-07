import React, { Component } from 'react';

import TextBox from './elements/TextBox';
import Price from './elements/Price';
import Image from './elements/Image';

export default class ProductCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { title, price, imageUrl } = this.props.product;
    const image = {
        alt: 'Oops, no image',
        src: imageUrl,
        width: 200,
        height: 150
      };
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
