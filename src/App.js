import React, { Component } from 'react';
import {
  HashRouter,
  Route,
  Link,
  NavLink
} from 'react-router-dom';
import {LinkContainer} from 'react-router-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

// import Scripts from './Scripts';
import Blocks from './Blocks';
import EmojiList from  './Emojis';
import {CharacterPage} from './Characters';
import './App.css';

class App extends Component {
  render() {
    return(
      <HashRouter>
        <div>
          <Navbar inverse fixedTop>
            <Navbar.Header>
              <LinkContainer to="/">
                <Navbar.Brand>
                  Unicode Explorer
                </Navbar.Brand>
              </LinkContainer>
            </Navbar.Header>
            <Nav>
              <LinkContainer to="/blocks">
                <NavItem>
                  Character Blocks
                </NavItem>
              </LinkContainer>
              <LinkContainer to="/emoji">
                <NavItem>
                  Emoji
                </NavItem>
              </LinkContainer>
            </Nav>
          </Navbar>

          <hr/>

          <div className="container">
            <Route exact path="/" component={Home}/>
            {/* <Route path="/scripts" component={Scripts}/> */}
            <Route path="/blocks" component={Blocks}/>
            <Route path="/emoji" component={EmojiList}/>
            <Route path="/characters/:name" component={CharacterPage}/>
          </div>
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