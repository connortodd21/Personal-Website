import React, { Component } from 'react';
import { Switch, Route, NavLink } from 'react-router-dom'
import tennis from './Tennis'
import projects from './Projects'
import aboutMe from './aboutMe'
import resume from './Resume'
import './App.css';

class App extends Component {
  render() {
    return (
       <div className="App">
        <div className="App-header">
          <div className="App-headings">
            <h1><b>Connor Todd</b></h1>
            <h3>Click around to view my projects and documents</h3>
          </div>
          <ul className="nav-links">
            <li>
              <NavLink to={'/aboutMe'}>About Me</NavLink>
             </li>
            <li>
              <NavLink to={'/resume'}>Resume</NavLink>
            </li>
            <li>
              <NavLink to={'/projects'}>Projects</NavLink>
            </li>
            <li>
              <NavLink to={'/tennis'}>Tennis</NavLink>
            </li>
          </ul>
        </div>
        <Switch>
          <Route path='/aboutMe' component={aboutMe} />
          <Route path='/resume' component={resume} />
          <Route path='/projects' component={projects}></Route>
          <Route path='/tennis' component={tennis} />
          <Route render={() => <p>To get started, click one of the links above</p>} />
        </Switch>
      </div>
    );
  }
}

export default App;
