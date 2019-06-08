import React, { Component } from 'react';
import { Link } from 'react-scroll';
import './Title.css';

class ScrollNext extends Component {

  render() {
    return(
      <Link
        activeClass="active"
        to="about"
        spy={true}
        smooth={true}
        offset={-70}
        duration= {800}
        >
        <div className="scroll scroll-down">
          <div className="arrow bounce" style={{ bounce }}>
            <i className="fa fa-chevron-circle-down" />
          </div>
        </div>
      </Link>    
    );
  }
  
}

const bounce = {
  animation: 'bounce 2s infinite',
  color: '#fff'
}

export default ScrollNext;
