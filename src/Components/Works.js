import React, { Component } from 'react';
import './Works.css';
import { Grid, Cell, Card, CardActions } from 'react-mdl';

class Works extends Component {
  render() {
    return (
      <div className="works">
        <div className="wrapper-title" style={{ textAlign: 'center', color: '#fff', opacity: '.6', paddingBottom: '200px'}}>
          <h2> ＜ Apps ＞ </h2>
        </div>
        <div class="work-cards">
          <Card className="card" shadow={2} style={{ width: '200px', height: '200px', background: 'url(https://i.gyazo.com/c88098378cd6277176045087df898556.jpg) center / cover', margin: 'auto'}}>  
            <CardActions className="card-action" style={{ width: '200px', height: '300px', background: 'rgba(0,0,0,0.9)'}}> 
                <h3>Pizza Base</h3>
                <br/>
                <p style={{ fontSize: '10px'}}>My first 'Original' Application made out of Ruby on Rails.</p>
            </CardActions>
          </Card>

          <Card className="card"  shadow={2} style={{ width: '200px', height: '200px', background: 'url(https://i.gyazo.com/f7c8279c5207cae672250153c9d188a0.png) center / cover', margin: 'auto'}}>  
            <CardActions className="card-action" style={{ width: '200px', height: '300px', background: 'rgba(0,0,0,0.9)'}}> 
                <h3>Chat-Space</h3>
                <br/>
                <p style={{ fontSize: '10px'}}>Chat App. Deployed pn AWS. Build by JQuery, Ruby on Rails.</p>
            </CardActions>
          </Card>

          <Card className="card" shadow={2} style={{ width: '200px', height: '200px', background: 'url(https://i.gyazo.com/69791296a5e74a8fcb22d9b5170082c1.png) center / cover', margin: 'auto'}}>  
            <CardActions className="card-action" style={{ width: '200px', height: '300px', background: 'rgba(0,0,0,0.9)'}}> 
                <h3>Todo App</h3>
                <br/>
                <p style={{ fontSize: '10px'}}>React app for making an easy Todo list.</p>
            </CardActions>
          </Card>

        </div>
        
      </div>
      
    )
  }
}
export default Works;
