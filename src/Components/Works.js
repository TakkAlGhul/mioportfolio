import React, { Component } from 'react';
import './Works.css';

class Works extends Component {
  render() {
    return (
      <div className="works" id="works">
        <div className="wrapper-title" style={{ textAlign: 'center', color: '#fff', opacity: '.6', paddingBottom: '200px'}}>
          <h2> ＜ Works ＞ </h2>
        </div>
        <div className="work-app" >
          <div className="apps">
            <img className="app-image"
              src="https://i.gyazo.com/c88098378cd6277176045087df898556.jpg"
              alt="Pizza Base"  
            />
            <div className="mask">  
              <h3 className="app-title">Pizza Base</h3>
              <div className="app-text">My first "original" rails App. Share your Pizza.</div>
              <br/>
              <a href="https://github.com/TakkAlGhul/pizzapp">github</a>
            </div>
          </div>
           
          <div className="apps">
            <img className="app-image"
              src='https://i.gyazo.com/f7c8279c5207cae672250153c9d188a0.png'
              alt="Chat-Space"
            />
            <div className="mask">  
              <h3 className="app-title">Chat-Space</h3>
              <div className="app-text">The chat application made out of Rails.</div>
              <br/>
              <a href="https://github.com/TakkAlGhul/chat-space">github</a>
            </div>
          </div>
            
          <div className="apps">
          <img className="app-image"
              src='https://i.gyazo.com/69791296a5e74a8fcb22d9b5170082c1.png'
              alt='Todo_React'
            />
            <div className="mask">  
              <h3 className="app-title">Todo App</h3>
              <div className="app-text">React app for making todo list.</div>
            </div>
          </div>
            
        </div>
      </div>
      
    );
  }
}
export default Works;
