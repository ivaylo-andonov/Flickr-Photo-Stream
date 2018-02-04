import {Navbar, FormGroup, FormControl, Button, Glyphicon, Nav, Label, NavItem} from 'react-bootstrap';
import $ from 'jquery'
import React from 'react';

  class HeaderNavigation extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      event.preventDefault();
      $.ajax({
        url: "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?",
        dataType: 'jsonp',
        data: { "format": "json" , "tags" : this.state.value}
      })
      .then(result => this.loadPhotos(result.items))
      .catch(e => console.log(e));

      this.setState({value: ''});
      this.refs.inputSearch.value = '';
    }

    loadPhotos(flickrPhotosResponse) {
        this.props.search(flickrPhotosResponse);     
    }
  
    render() {
      return (
        <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="javascript:window.location.href=window.location.href">Flickr Photo Stream</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Navbar.Form pullLeft>
            <form onSubmit={this.handleSubmit}>
            <FormGroup>
            <Label>Search by tag name:</Label>
              <input className="form-control" type="text" ref={"inputSearch"} onChange={this.handleChange} placeholder="Search"/>     
            </FormGroup>
            <Button type="submit">Submit</Button>
            </form>
          </Navbar.Form>
          <Nav pullRight>
            <NavItem eventKey={1} href="javascript:window.location.href=window.location.href"><Glyphicon glyph="glyphicon glyphicon-refresh"/>{' '}Reload random flickrs</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar> 
      );
    }
  }

  export default HeaderNavigation