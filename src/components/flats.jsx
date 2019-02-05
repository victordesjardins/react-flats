import React, { Component } from 'react';
import Flat from './flat.jsx';

class Flats extends Component {

  renderList = () => {
    return this.props.flats.map (flat => { return <Flat price={flat.price} name={flat.name} imageUrl={flat.imageUrl}/>})
  }

  render() {
    return(
      <div className="flat-list">
        {this.renderList()}
      </div>
    );
  }
}

export default Flats;
