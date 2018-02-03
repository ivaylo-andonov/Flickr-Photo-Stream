import React, { Component } from 'react';
import PhotoGallery from './components/PhotoGallery';
import HeaderNavigation from './components/HeaderNavigation';
import PropTypes from 'prop-types';
import $ from 'jquery'

const flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";

class App extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          photosArray: [],
          isFetching : false
        };

        this.handleScroll = this.handleScroll.bind(this);
    }
       
    fetchFlickrPhotos() {    
        this.setState({isFetching : true})
        $.ajax({
            url: flickerAPI,
            dataType: 'jsonp',
            data: { "format": "json" }
          })
          .then(result => this.loadMorePhotos(result.items))
          .catch(e => console.log(e));
    }

    loadMorePhotos(flickrPhotosResponse) {
        this.setState({isFetching : false});
        this.setState((prevState) => {
            return {photosArray: prevState.photosArray.concat(this.filterEqualPhotos(flickrPhotosResponse))};
          });       
    }

    componentDidMount() {
        this.fetchFlickrPhotos();
        window.addEventListener('scroll', this.handleScroll);    
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    filterEqualPhotos(newPhotos){
        var res = [];
        for (var photoItem of newPhotos) {
            if (!this.state.photosArray.some(e => e.title === photoItem.title)) {
               res.push(photoItem)
            }
        }
        return res;
    }

    getDocumentHeight() {
        const body = document.body;
        const html = document.documentElement;
        
        return Math.max(
            body.scrollHeight, body.offsetHeight,
            html.clientHeight, html.scrollHeight, html.offsetHeight
        );
    };
    
    getScrollTop() {
        return (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
    }
    
    handleScroll(event) {
        if (this.getScrollTop() < this.getDocumentHeight() - window.innerHeight - 50) return;

        this.fetchFlickrPhotos();
    }

    onSearchSubmit(){
        
    }

    onSearchChange(){

    }  
        
    render() {
        return (
        <div className="App">
            <HeaderNavigation/>
            <div className="photo-container">
            {this.state.photosArray.length?<PhotoGallery photos={this.state.photosArray} isFetch={this.state.isFetching}/>:''}
            </div>
        </div>
        );
    }      
}

App.propTypes = {
    isFetching: PropTypes.bool
}

export default App