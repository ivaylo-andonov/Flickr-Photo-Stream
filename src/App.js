import React, { Component } from 'react';
import $ from 'jquery'
import PhotoGallery from './components/PhotoGallery';
import HeaderNavigation from './components/HeaderNavigation';
import LoaderIndicator from './components/LoaderIndicator'
import PropTypes from 'prop-types';

const flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";

class App extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          photosArray: [],
          isFetching : false,
          hasError : false
        };

        this.handleScroll = this.handleScroll.bind(this);
        this.onSearchSubmit = this.onSearchSubmit.bind(this);
        this.getFlickrPhotos = this.getFlickrPhotos.bind(this);
    }

    componentDidMount() {
        this.getFlickrPhotos(); 
    }

    getFlickrPhotos(){
        this.setState({isFetching : true});
        this.fetchFlickrPhotos();
        this.attachScrollHandler();
    }

    fetchFlickrPhotos() {        
        $.ajax({
            url: flickerAPI,
            dataType: 'jsonp',
            data: { "format": "json" }
          })
          .then(result => this.loadPhotos(result.items))
          .catch(e => this.handleErrorResponse(e));
    }

    loadPhotos(flickrPhotosResponse) {       
        let newPhotos = this.filterDublicatePhotos(flickrPhotosResponse);
        let newPhotosFormatted = this.formatFlickrResponse(newPhotos);

        this.setState((prevState) => {
            return {photosArray: prevState.photosArray.concat(newPhotosFormatted)};
          });
          
        this.setState({isFetching : false});
    }

    onSearchSubmit(searchedItems){        
        let newPhotosFormatted = this.formatFlickrResponse(searchedItems);
        this.setState({photosArray : newPhotosFormatted});
        this.dettachScrollHandler();
    }  

    filterDublicatePhotos(newPhotos){
        var res = [];
        for (var photoItem of newPhotos) {
            if (!this.state.photosArray.some(e => e.title === photoItem.title)) {
               res.push(photoItem)
            }
        }
        return res;
    }

    formatFlickrResponseItem({title, link, author, author_id, description, tags, media:{m:thumbnail}}) {
        const startIndex = author.indexOf("(");
        const endIndex = author.indexOf(")");
        author = author.substring(startIndex + 2 ,endIndex - 1)
        tags = tags.split(" ")

        return {title, link, thumbnail, tags, author, author_id, description}  
    }
              
    formatFlickrResponse(items) {
        if(items.length){
            return items.map(this.formatFlickrResponseItem)
        }
        return [];
    }

    handleErrorResponse(e){
        this.setState({hasError : true});
        console.log(e);
    }

    dettachScrollHandler(){
        window.removeEventListener('scroll', this.handleScroll);
    }

    attachScrollHandler(){
        window.addEventListener('scroll', this.handleScroll);
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
        return (window.pageYOffset !== undefined) ? window.pageYOffset : 
        (document.documentElement || document.body.parentNode || document.body).scrollTop;
    }
    
    handleScroll(event) {
        if (this.getScrollTop() < this.getDocumentHeight() - window.innerHeight) return;

        this.setState({isFetching : true});
        this.fetchFlickrPhotos();
    }
        
    render() {
        return (
        <div className="App">
            <HeaderNavigation search={this.onSearchSubmit}/>
            <LoaderIndicator error={this.state.hasError} isLoading={this.state.isFetching}/>
            <div className="photo-container">
            {this.state.photosArray.length ?
            <PhotoGallery onSelectTag={this.onSearchSubmit} photos={this.state.photosArray}/> : ''}
            </div>
        </div>
        );
    }      
}

App.propTypes = {
    isFetching: PropTypes.bool,
    hasError : PropTypes.bool,
    photosArray : PropTypes.array,
    fetchFlickrPhotos : PropTypes.func,
    getFlickrPhotos : PropTypes.func,
    getDocumentHeight : PropTypes.func,
    getScrollTop : PropTypes.func,
    loadPhotos: PropTypes.func,
    formatFlickrResponse : PropTypes.func,
    filterDublicatePhotos:PropTypes.func,
    flickerAPI : PropTypes.string
}

export default App