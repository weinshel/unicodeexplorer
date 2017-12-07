import React, { Component } from 'react';
import {
  HashRouter,
  Route,
  Link
} from 'react-router-dom';
import './App.css';
import Scripts from './Scripts';
import EmojiList from  './Emojis';

class App extends Component {
  render() {
    return(
      <HashRouter>
        <div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/scripts">Scripts</Link></li>
            <li><Link to="/emoji">Emoji</Link></li>
          </ul>

          <hr/>

          <Route exact path="/" component={Home}/>
          <Route path="/scripts" component={Scripts}/>
          <Route path="/emoji" component={EmojiList}/>
        </div>
      </HashRouter>
    );
  }
}

const Home = () => (
  <div>
    <h2>Home</h2>
    <p>hello world!</p>
  </div>
)

export default App;