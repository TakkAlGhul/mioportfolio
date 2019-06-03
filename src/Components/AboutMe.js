import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import './About.css';
import Skills from './Skills';

class AboutMe extends Component {
  render() {
    return (
      <div className="about-grid">
        <div className="wrapper-title" style={{ textAlign: 'center', opacity: '.6'}}>
          <h2> ＜ About Me ＞ </h2>
        </div>
        <Grid className="about-content">
          <Cell col={4}>
            <div className="left-content" style={{ textAlign: "center"}}>
              <img 
                src="https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortCurly&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=Hoodie&clotheColor=Black&eyeType=Surprised&eyebrowType=Default&mouthType=Default&skinColor=Light"
                alt="avatar"
              />
              <br/>
              <h2 className="myname">Takuro Yakubo</h2>
              <hr/>
              <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore </p>


            </div>
          </Cell>

          <Cell col={8} className="right-content">
            
              <Skills
                skill="HTML/CSS"
                progress={95}
                buffer={5}
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
                        skill="AWS"
                        progress={40}
                        buffer={40}
                        />
            </Cell>
          </Grid>

        
      </div>
    )
  }
}
export default AboutMe;
