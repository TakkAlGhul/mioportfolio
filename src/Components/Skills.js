import React, { Component } from 'react';
import { Grid, Cell, ProgressBar } from 'react-mdl';
import './Scss/About.scss';

class Skills extends Component {
  render() {
    return (
      <Grid>
        <Cell col={12} tablet={8} phone={8}>
          <div style={{ display: 'flex'}}>{this.props.skill} <ProgressBar style={{ margin: 'auto 20px', width: '100%', height: '20px' }} 
          progress={this.props.progress} buffer={this.props.buffer}/ ></div>
        </Cell>
      </Grid>
    )
  }
}
export default Skills;
