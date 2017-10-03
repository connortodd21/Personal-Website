import React, { Component } from 'react';
import { Switch, Route, NavLink } from 'react-router-dom'
import linkedin from './goToLinkedIn'
import Resume from './Resume.js'
import Tennis from './Tennis'
import Projects from './Projects'
import Github from './github'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <div className="App-headings">
            <h3>Welcome!</h3>
            <h1>Connor Todd</h1>
            <img src="'file:///C://Users/connortodd/personalProjects/personal-website/src/profilePic.jpg'" alt="Face" width="300" height="300"/>
          </div>
          <ul className="nav-links">
            <li>
              <NavLink to={'/Projects'}>Projects</NavLink>
            </li>
            <li>
              <NavLink to={'/Tennis'}>Tennis</NavLink>
            </li>
            <li>
              <NavLink to={'/Resume'}>Resume</NavLink>
            </li>
            <li>
              <NavLink to={'/goToLinkedIn'}>LinkedIn</NavLink>
            </li>
            <li>
              <NavLink to={'/github'}>GitHub</NavLink>
            </li>
          </ul>
        </div>
        
        <h2>Current Sophomore at Purdue University pursuing a B.S. in Computer Science.</h2>
        <br/>
        <p>I am passionate about programming, with considerable knowledge using Java, C, C++, JavaScript, HTML, CSS, and React.js</p>
        <p>My other passions include mathematics, tennis, and sports.</p>
        <p>Click around to disconver more about me!</p>
        <Switch>
          <Route path='/Resume' component={Resume} />
          <Route path='/goToLinkedIn' component={linkedin} />
          <Route path='/Tennis' component={Tennis}></Route>
          <Route path='/Projects' component={Projects} />
          <Route path='/github' component={Github}></Route>
          <Route render={() => <p></p>} />
         
          
        
        </Switch>
      </div>
    );
  }
}
export default App;