import React, { Component } from 'react';

import CatalogPage from './components/CatalogPage'

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <CatalogPage />
    );
  }
}
