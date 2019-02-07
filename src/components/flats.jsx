import React, { Component } from 'react';
import Flat from './flat.jsx';

const Flats = (props) => {
  const renderList = () => {
    return props.flats.map ((flat, index) => { return (<Flat price={flat.price} name={flat.name} imageUrl={flat.imageUrl} key={flat.lat} selectFlat={props.selectFlat} index={index} />);
    });
  };

  return(
    <div className="flat-list">
      {renderList()}
    </div>
  );
};
// class Flats extends Component {

export default Flats;
