import React, { Component } from 'react';
import './Title.css';

class ScrollUp extends Component {
  render() {
    return(
      <div className="scroll">
        <div className="arrow bounce" style={{ bounce }}>
          <i className="fa fa-chevron-circle-up" href="#" />
        </div>
      </div>   
    );
  }
  
}

const bounce = {
  animation: 'bounce 2s infinite',
  color: '#fff'
}

export default ScrollUp;
