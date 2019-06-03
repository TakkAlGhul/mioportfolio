import React, { Component } from 'react';
import './Title.css';

class ScrollNext extends Component {
  render() {
    return(
      <div className="scroll">
        <div className="arrow bounce" style={{ bounce }}>
          <i className="fa fa-chevron-circle-down" href="#" />
        </div>
      </div>   
    );
  }
  
}

const bounce = {
  animation: 'bounce 2s infinite',
  color: '#fff'
}

export default ScrollNext;
