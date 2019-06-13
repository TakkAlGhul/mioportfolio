import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Skills from './Skills';
import './Scss/About.scss';

class AboutMe extends Component {
  render() {
    return (
      <div className="about-grid" id="about">
        <div className="wrapper-title" >
          <h2> ＜ About Me ＞ </h2>
        </div>
        <Grid className="about-content">
          <Cell col={4} tablet={8} phone={8}>
            <div className="left-content" style={{ textAlign: 'center'}}>
              <img 
                src="https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortCurly&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=Hoodie&clotheColor=Black&eyeType=Surprised&eyebrowType=Default&mouthType=Default&skinColor=Light"
                alt="avatar"
              />
              <br/>
              <h2 className="myname">Takuro Yakubo</h2>
              <hr/>
              <p>I'm a unexperienced web developer. Currently looking for jobs for developing UI/UX.</p>
              <p>I can also use Ruby on Rails for backend. </p>
            </div>
          </Cell>

          <Cell col={8} className="right-content">
            
              <Skills
                skill="HTML/CSS"
                progress={95}
                buffer={95}
                />
                <Skills
                  skill="JavaScript"
                  progress={70}
                  buffer={70}
                  />
                  <Skills
                    skill="React"
                    progress={40}
                    buffer={40}
                    />
                    <Skills
                      skill="Ruby/Rails"
                      progress={80}
                      buffer={80}
                      />
                      <Skills
                        skill="Swimming"
                        progress={80}
                        buffer={80}
                        />
                        
            </Cell>
          </Grid>

        
      </div>
    )
  }
}
export default AboutMe;
