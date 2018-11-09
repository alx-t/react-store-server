import React, { Component } from 'react';

import TextBox from './elements/TextBox';
import Price from './elements/Price';
import Image from './elements/Image';

import style from './ProductCard.css';

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
        <div style={style.card}>
          <div style={style.cardHeader}>
            <TextBox>{title}</TextBox>
          </div>
          <div style={style.cardMain}>
            <Image
              alt={image.alt}
              src={image.src}
              width={image.width}
              height={image.height}
            />
            <div style={style.mainDescription}>
              <Price>{price}</Price>
            </div>
          </div>
        </div>
    );
  }
}
