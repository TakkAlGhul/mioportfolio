import React, { Component } from 'react';
import { Grid, Cell, ProgressBar } from 'react-mdl';
import './About.css';

class Skills extends Component {
  render() {
    return (
      <Grid>
        <Cell col={12}>
          <div style={{ display: 'flex'}}>{this.props.skill} <ProgressBar style={{ margin: 'auto', width: '80%', height: '20px' }} 
          progress={this.props.progress} buffer={this.props.buffer}/ ></div>
        </Cell>
      </Grid>
    )
  }
}
export default Skills;
