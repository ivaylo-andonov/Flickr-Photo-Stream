import {Navbar, FormGroup, FormControl, Glyphicon, Nav, NavItem} from 'react-bootstrap';
import React from 'react';

const HeaderNavigation = (props) => (
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="#">Flickr Photo Stream</a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Navbar.Form pullLeft>
          <FormGroup>
            <FormControl type="text" placeholder="Search"/>
          </FormGroup>
        </Navbar.Form>
        <Nav pullRight>
          <NavItem eventKey={1} href="#"><Glyphicon glyph="glyphicon glyphicon-refresh"/>{' '}Refresh</NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>  
  )

  export default HeaderNavigation