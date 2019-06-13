import React, { Component } from 'react';
import { Link } from 'react-scroll';
import posed from 'react-pose';
import './Scss/Sidepanel.scss';

const sidebarProps = {
  open: {
    x: '0%',
    delayChildren: 300,
    staggerChildren: 60
  },
  closed: {
    delay: 500,
    staggerChildren: 20,
    x: '-100%'
  }
};



const itemProps = {
  open: { opacity: 1, y: 0 },
  closed: { opacity: 0, y: 20 }
};

const SideBar = posed.ul(sidebarProps);
const Item = posed.li(itemProps);


class Sidepanel extends Component {
  state = { isOpen: false };

  componentDidMount() {
    setTimeout(this.toggle, 1000);
  }

  toggle = () => this.setState({ isOpen: !this.state.isOpen });
  
  render() {
    return (
      <div>
        <i onClick={this.toggle} className="fas fa-bars"  />
        <SideBar
          onClick={this.toggle}
          className="sidebar"
          pose={this.state.isOpen ? 'open' : 'closed'}>
          <Item className="item">
            <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration= {800}
            >About</Link> 
          </Item>
          <Item className="item">
          <Link
            activeClass="active"
            to="works"
            spy={true}
            smooth={true}
            offset={-70}
            duration= {800}
            >Works</Link> 
          </Item>
          <Item className="item">
            <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration= {800}
            >Contact</Link>   
          </Item>
          
        </SideBar>
      </div>
    )
  }
}



export default Sidepanel;
