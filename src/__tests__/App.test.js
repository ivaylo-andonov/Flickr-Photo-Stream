import { shallow , mount,configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import App from '../App';
import mockData from '../mock/mockResponse';
import HeaderNavigation from '../components/HeaderNavigation';

configure({ adapter: new Adapter() });

const appComponent = shallow(<App />);
const appInstance = appComponent.instance();

const handleSearch = jest.fn(() => {});
const headerNavigationComponent = shallow(<HeaderNavigation handleSearch={handleSearch}/>);
const headerNavInstance = headerNavigationComponent.instance();

const mockFormatedItem = {
  "title": "Great crested grebe",
  "link": "https://www.flickr.com/photos/143458341@N05/28578725986/",
  "thumbnail" : "https://farm8.staticflickr.com/7541/28578725986_197e48c7ed_m.jpg",
  "description": " <p><a href=\"https://www.flickr.com/people/143458341@N05/\">David and Lisa Mowbray<\/a> posted a photo:<\/p> <p><a href=\"https://www.flickr.com/photos/143458341@N05/28578725986/\" title=\"Great crested grebe\"><img src=\"https://farm8.staticflickr.com/7541/28578725986_197e48c7ed_m.jpg\" width=\"157\" height=\"240\" alt=\"Great crested grebe\" /><\/a><\/p> ",
  "author": "avid and Lisa Mowbra",
  "author_id": "143458341@N05",
  "tags": ["waterbird", "grebe", "greatcrestedgrebe", "loch", "lake", "wildlife", "nature"]
}

describe('<App />', () => {
  it('<App /> should be defined', () => {
    expect(appInstance).toBeDefined();
  });
 
  it('<App /> [formatFlickrResponse] return properly items count', () => {
    let formatedItems = appInstance.formatFlickrResponse(mockData.items);
    expect(formatedItems.length).toEqual(mockData.items.length)
  });

  it('<App /> [formatFlickrResponse] foormat needed props', () => {
    let formatedItems = appInstance.formatFlickrResponse(mockData.items);
    expect(formatedItems[0]).toEqual(mockFormatedItem)
  });

  it('<HeaderNavigation /> istance should be defined', () => {
    expect(headerNavInstance).toBeDefined();
  });

  // it('<HeaderNavigationComponent> simulates click Search', () => {
    
  //   headerNavigationComponent.find('#search-btn').simulate('click');
  //   expect(handleSearch).toHaveBeenCalled ();
  //});
});