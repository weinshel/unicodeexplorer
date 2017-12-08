import React, { Component } from 'react';
import {
  HashRouter,
  Route,
  Link
} from 'react-router-dom';
import {LinkContainer} from 'react-router-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
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
          <Navbar  fixedTop>
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
            <Nav pullRight>
              <NavItem href="https://github.com/weinshel/unicodeexplorer" target="_blank">About</NavItem>
              <NavItem href="https://github.com/weinshel/unicodeexplorer" target="_blank">GitHub</NavItem>
            </Nav>
          </Navbar>

          <br/><br/><br/>

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
    <h1>Unicode Explorer</h1>
    <div className="homeText">
      <p>Explore the Unicode character set!</p>
      <p>See all the the characters in a specific block, such as <Link to={{pathname: '/blocks/cuneiform'}}>Cuneiform</Link> or <Link to={{pathname: '/blocks/cherokee'}}>Cherokee</Link>. Learn about a specific character such as <Link to={{pathname: '/characters/77952'}}>𓂀</Link>. See <Link to={{pathname: '/emoji'}}>all the emoji</Link>, or view details about <Link to={{pathname: '/emoji/smiling-face-with-horns'}}>😈</Link>.</p>
    </div>
  </div>
)

export default App;