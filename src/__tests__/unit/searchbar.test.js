import React from 'react';
import {mount} from 'enzyme';
import Searchbar  from  '../../components/searchbar/searchbar.component';


// apply before all tests
const baseProps = {
  placeholderMessage: '',
  options: [
    { label: 'one', value: 'one' },
    { label: 'two', value: 'two' }  ]  ,
  onSubmit:jest.fn()
};
let wrapped;

beforeEach(()=>{ wrapped = mount(<Searchbar name='Select' options={baseProps.options} 
{...baseProps}/>) })
//----------------------------------------------------------------------

it ('will not render instance of  AsyncSelect  component', ()=>{
  expect(wrapped.find(Searchbar).length).toEqual(1);
  });
  


describe('validate behaviour of the search bar',()=>{
  beforeEach(()=>{
    wrapped.find('Select').simulate('keyDown', { key: 'ArrowDown', keyCode: 40 });
  });

  it('should render dropdown on keyDown', () => {
    expect(wrapped.find('MenuList').length).toEqual(1);
});

it('should render the correct amount of options', () => {
    expect(wrapped.find('Option').length).toEqual(0);
});

});

// react event library can be used to simulate events and add more tests
//https://www.npmjs.com/package/react-select-event 


//apply after all tests 
//-------------------------------------
afterEach(()=>{
  wrapped.unmount();
})


/*
it ('user can select and option and will update dropdwon value with selected option',()=>{ 
  wrapped.find('Select').simulate('change', {value: 1, label: 'label' });
  wrapped.find('Select').simulate('click', {value: 1, label: 'label' });
  wrapped.update();
  //console.log(wrapped.debug());
  expect (wrapped.find(Searchbar).prop('Value')).toEqual('');
  expect (wrapped.state().selectedValue).toEqual('');
*/