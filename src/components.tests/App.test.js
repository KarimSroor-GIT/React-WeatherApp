import React from 'react';
import {shallow} from 'enzyme';
import App from '../App.js';
import Searchbar from '../components/searchbar/searchbar.component';
import Location from '../components/location/location.component';
import DisplayWeather from '../components/displayWeather/displayWeather.component';
import DisplayWeatherDetails from '../components/displayWeather/displayWeatherDetails.component';

let wrapper;
beforeEach(()=>{
  wrapper = shallow( <App/> );
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

  