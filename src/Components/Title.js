import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import ScrollNext from './ScrollNext';
import './Scss/Title.scss';
import Sidepanel from './Sidepanel';

class Title extends Component {
  render() {
    return (
      <div className="title-grid" id="title" style={{ width: '100%', margin: 'auto', textAlign: 'center'}}>
        <Sidepanel />
        <Grid>
          <Cell col={12} tablet={6} >
          <div className="title-text">
            <h1 className="hello"> Hello I'm Takuro</h1>
            
            <hr />

            <p className="intro">Content Creator</p>     
          </div>
          <ScrollNext />
          </Cell>
        </Grid>
      </div>
    );
  }
}




export default Title;
