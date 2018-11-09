import React, { Component } from 'react';

import { PRODUCTS } from '../constants/Products';
import Catalog from './widgets/catalog/Catalog';

export default class CatalogPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Catalog products={PRODUCTS} />
    );
  }
}
