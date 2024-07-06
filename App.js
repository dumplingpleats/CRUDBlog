// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import PostManager from './components/PostManager';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Blog Posts</Link></li>
          </ul>
        </nav>
        <Switch>
          <Route path="/" component={PostManager} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;

