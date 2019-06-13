import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Sns extends Component {
  render() {
    return (
    <Grid>
      <Cell col={12} >
        <div className="social-links">
          <a href="https://www.linkedin.com/in/takuro-yakubo-50a008159/" rel="noopener noreferrer" target="_blank">
            <i className="fab fa-linkedin" aria-hidden="true" />
          </a>

        {/* {GitHub} */}
          <a href="https://github.com/TakkAlGhul" rel="noopener noreferrer" target="_blank">
            <i className="fab fa-github-square" aria-hidden="true" />
          </a>

        {/* {Qiita} */}
        <a href="https://qiita.com/takk0715" rel="noopener noreferrer" target="_blank">
          <i className="fas fa-search" aria-hidden="true" />
        </a>

        {/* {Instagram} */}
          <a href="https://www.instagram.com/takk.eats.world/?hl=ja" rel="noopener noreferrer" target="_blank">
            <i className="fab fa-instagram" aria-hidden="true" />
          </a>

        {/* {Twitter} */}
          <a href="https://twitter.com/JB48922467" rel="noopener noreferrer" target="_blank">
            <i className="fab fa-twitter" aria-hidden="true" />
          </a>
        </div>     
      </Cell>
    </Grid>
      
    )
  }
}
export default Sns;
