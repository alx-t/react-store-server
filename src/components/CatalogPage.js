import React, { Component } from 'react';

import { Products } from '../constants/Products';
import Catalog from './widgets/catalog/Catalog';

export default class CatalogPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Catalog products={Products} />
    );
  }
}
