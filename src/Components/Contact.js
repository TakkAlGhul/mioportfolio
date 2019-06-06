import React, { Component } from 'react';
import ScrollUp from './ScrollUp';
import './Contact.css';

class Contact extends Component {
  render() {
    return (
      <div className="contact" style={{  }}>
        <h2 style={{ color: '#fff', opacity: '.6'}}> 
          ＜ Contact ＞
        </h2>
        <div className="btn mail-btn">
          <a style={{  color: '#fff', fontWeight: 'bold', textDecoration: 'none' }} href="mailto:takuro.mike@gmail.com"><i className="fas fa-envelope" aria-hidden="true" /></a>
        </div>
        <ScrollUp />
        <div className="copyRight" style={{ color:'#fff' }}>©CopyRight 2019 Takuro Yakubo</div>
      </div>
    )
  }
}
export default Contact;
