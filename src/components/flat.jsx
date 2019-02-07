import React, { Component } from 'React';

class Flat extends Component {

  handleClick = () => {
    this.props.selectFlat(this.props.index);
  }

  render () {
    return (
      <div className="card" style={{backgroundImage : `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url(${this.props.imageUrl}`}}>
        <div className="card-category">{this.props.price} EUR</div>
        <div className="card-description">
          <h2>{this.props.name}</h2>
        </div>
        <a className="card-link" href="#" onClick={this.handleClick}></a>
      </div>
    );
  }
}

export default Flat;
