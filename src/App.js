import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import './App.css';
import CharDetails from './CharDetails';
import EmojiList from  './Emojis';

class App extends Component {
  render() {
    return(
      <Router>
        <div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/chars">Characters</Link></li>
            <li><Link to="/emoji">Emoji</Link></li>
            <li><Link to="/topics">Topics</Link></li>
          </ul>

          <hr/>

          <Route exact path="/" component={Home}/>
          <Route path="/chars" component={CharDetails}/>
          <Route path="/emoji" component={EmojiList}/>
        </div>
      </Router>
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