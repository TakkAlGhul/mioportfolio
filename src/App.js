import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Title from './Components/Title'
import About from './Components/AboutMe'
import Works from './Components/Works'

class App extends Component {
  render () {
    return (
      <div className="demo-big-content">
        <Layout>
          <Header className="header" style={{ fontWeight: 'bold', fontSize: '45px'}} title= " " scroll>
            <Navigation className="navigation">
              <a href="/">About Me</a>
              <a href="/">Works</a>
              <a href="/">Contact</a>
            </Navigation>
          </Header>
          <Drawer title="Title">
            <Navigation>
              <a href="/">About Me</a>
              <a href="/">Works</a>
              <a href="/">Contact</a>
            </Navigation>
          </Drawer>
          <Content>
            <div className="page-content" />
              <Title />
          </Content>
          <About />
          <Works />
        </Layout>
      </div>
      
    );
  }      
}

export default App;
