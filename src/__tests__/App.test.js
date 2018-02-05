import { shallow , mount,configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import App from '../App';
import mockData from './mockResponse';
import HeaderNavigation from '../components/HeaderNavigation';

configure({ adapter: new Adapter() });

const appComponent = shallow(<App />);
const headerNavigationComponent = shallow(<HeaderNavigation search={()=> {}}/>);


describe('<App />', () => {
  it('<App /> should be defined', () => {
    const instance = appComponent.instance();
    expect(instance).toBeDefined();
  });
 
  // it('<App /> [loadPhotos] works fine', () => {
  //   const instance = appComponent.instance();
  //   const jsonMockData = JSON.parse(mockData);
  //   instance.loadPhotos(mockData);
    
  //   expect(instance.state.photosArray.length).toEqual(jsonMockData.length)
  //   expect(instance.state.isFetching).toEqual(false)
  // });

  // it('<HeaderNavigationComponent> simulates click Search', () => {
  //   const instance = headerNavigationComponent.instance();
  //   instance.handleSubmit = jest.fn(() => mockData);
  //   headerNavigationComponent.find('#search-btn').simulate('click');
  //   expect(instance.handleSubmit).toBeCalled();
  // });
});
});