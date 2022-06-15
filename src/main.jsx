import React from 'react'
import ReactDOM from 'react-dom'
import "./config"; // must come before @carbon/ibm-cloud-cognitive... imports
import App from './App'
import './index.css'

const rootNode = document.getElementById('root');
ReactDOM.render(<App />, rootNode);
