import React, { Component } from 'react';
import Nav from './Nav';

import './Horizon.css';

class Horizon extends Component {
  constructor(props) {
    super(props);

    this.state = {
      awesome: true,
      notAwesome: 'never'
    }
  }

  handleClick = () => {
    this.setState({});
  }

  render() {
    return (
      <div className="horizon">
        <Nav />
        <h1>Horizon is pretty nice</h1>
        <span>Hope you like it!</span>
        <button onClick={this.handleClick}>click me</button>
      </div>
    );
  }
}

export default Horizon;