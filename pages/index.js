import React, { Component } from 'react';
import Header from '../components/Header';
import MapRow from '../components/MapRow';
import BarCardRow from '../components/BarCardRow';

export default class App extends Component {
  render() {
    return (
      <main>
        <Header />
        <MapRow />
        <BarCardRow />
      </main>
    )
  }
}
