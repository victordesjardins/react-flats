import React, { Component } from 'react';
import flats from '../../data/flats.js';
import Flats from './flats.jsx';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      flats
    };
  }

  render() {
    return(
      <div>
        <Flats flats={this.state.flats} />
      </div>
    );
  }
}

export default App;
