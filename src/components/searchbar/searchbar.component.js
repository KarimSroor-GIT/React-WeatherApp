import React,{PureComponent} from 'react'
import  AsyncSelect   from 'react-select/async'
import metaweatherApi from '../../API/metaweatherApi'
import './searchbar.style.css'


class SearchBar extends PureComponent {

  //initialize state object 
  state = {selectedValue:''}

  //handle searchbar text Onchange event
  onChange = (selectedValue) =>{
    this.setState({selectedValue : selectedValue.value ||''});
    this.props.onSubmit(this.state.selectedValue)
    }

  

  //load options ( populates drop down as user types with matching results)
  loadOptions = async (inputText,callback)=>{
  try {
  const response = await metaweatherApi.get('api/location/search/',{params:{query : inputText}});

  const results = await response.data;

  callback(results.map(i=> ({label:i.title,value:i.woeid}))) 
  } catch (err)
    {
      console.log('autocomplete search request failed , ',err.message)
    }
}


  render(){
    return(
      <AsyncSelect
      //isMulti => multi selection is not required
      Value= {this.state.selectedValue}
      onChange = {this.onChange}
      placeholder = {this.props.placeholderMessage}
      loadOptions = {this.loadOptions}
      openMenuOnClick = {this.props.onSubmit(this.state.selectedValue)}
      />
     
    )
  }

}
// set defaul values for props 
//default message assigned generic text for when component is reused in other place of the app
SearchBar.defaultProps = {placeholderMessage:'start typing  to begin search ...'}

export default SearchBar;