// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CreatePost from './components/CreatePost';
import ListPosts from './components/ListPosts';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><a href="/create">Create Post</a></li>
            <li><a href="/">List Posts</a></li>
          </ul>
        </nav>
        <Switch>
          <Route path="/create" component={CreatePost} />
          <Route path="/" component={ListPosts} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
