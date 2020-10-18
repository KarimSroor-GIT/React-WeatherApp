import React from 'react';
import {mount} from 'enzyme';
import App from '../../App.js';
import Searchbar from '../../components/searchbar/searchbar.component';
import Location from '../../components/location/location.component';
import DisplayWeather from '../../components/displayWeather/displayWeather.component';
import DisplayWeatherDetails from '../../components/displayWeather/displayWeatherDetails.component';

let wrapper;
beforeEach(()=>{
 //wrapper = shallow( <App/> ); shallow will not load any child components props
 wrapper = mount( <App/> );
});

it ('shows one instance of Location component',()=>{
 expect(wrapper.find(Location).length).toEqual(1);
});

it ('will not render instance of  DisplayWeather component', ()=>{
  expect(wrapper.find(DisplayWeather).length).toEqual(0);
  
  });
  
  it ('will not render instance of DisplayWeatherDetails component',()=>{
   expect(wrapper.find(DisplayWeatherDetails).length).toEqual(0);
  });

  it ('will not render instance of search bar component',()=>{
    expect(wrapper.find(Searchbar).length).toEqual(1);
   });

   it('when provided a location value , will update state with new location and show weather components', () => {
   
    expect(wrapper.state().location).toEqual('');
    wrapper.instance().LocationFound('1000');
    expect(wrapper.state().location).toEqual('1000');
    wrapper.update();
    expect(wrapper.find(DisplayWeather).length).toEqual(1);
    });

afterEach(()=>{
      wrapper.unmount();
    })
  