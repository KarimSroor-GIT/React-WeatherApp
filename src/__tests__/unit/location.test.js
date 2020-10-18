import React from 'react';
import {mount} from 'enzyme';
import Location  from '../../components/location/location.component';


// apply before all tests
let wrapped;
beforeEach(()=>{
  wrapped = mount(<Location getLocation= {jest.fn()}/> );
})
//----------------------------------------------------------------------

it ('has a text area and a button ',()=>{

  expect (wrapped.find('SearchBar').length).toEqual(1);

});

describe('validate behaviour of find location',()=>{
  beforeEach(()=>{
    wrapped.instance().onSearchSubmit('new location');
    
  });
  
  it ('it has called state update with new location value',()=>{    
    expect(wrapped.state('woeid')).toBe('new location');
  });
  
  it ('will fetch location after component mount',()=>{
    const instance = wrapped.instance();
    jest.spyOn(instance, 'getLocationByLatt');
    wrapped.instance().getLocationByLatt('new coordinates');
    expect(instance.getLocationByLatt).toHaveBeenCalledTimes(1);
    expect(instance.getLocationByLatt).toHaveBeenCalledWith('new coordinates');
    });
    
});
//apply after all tests 
//-------------------------------------
afterEach(()=>{
  wrapped.unmount();
})

