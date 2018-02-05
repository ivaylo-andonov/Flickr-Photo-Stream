import { shallow , mount,configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import App from '../App';
import HeaderNavigation from '../components/HeaderNavigation';

configure({ adapter: new Adapter() });

const appComponent = shallow(<App />);
const headerNavigationComponent = shallow(<HeaderNavigation search={()=> {}}/>);


describe('<App />', () => {
  it('<App /> should be defined', () => {
    const instance = appComponent.instance();
    expect(instance).toBeDefined();
  });

  // it('<App /> should loadPhotos call filterDublicatePhotos', () => {
  //   const instance = appComponent.instance();
  //   instance.loadPhotos();
  //   expect(instance.filterDublicatePhotos).toBeCalled();
  // });

  // it('<HeaderNavigationComponent> simulates click Search', () => {
  //   const instance = headerNavigationComponent.instance();
  //   var mockEvent = jest.fn();
  //   headerNavigationComponent.find('#search-btn').simulate('click');
  //   expect(instance.handleSubmit(mockEvent)).toBeCalled();
  // });
});