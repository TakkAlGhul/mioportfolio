import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import App from './App';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(
<App />
, document.getElementById('root'));


serviceWorker.unregister();
