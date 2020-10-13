import React from 'react'
import SearchBar from '../searchbar/searchbar.component'
import metaweatherApi from '../../API/metaweatherApi'
import checkByKey from '../../util.js'

class Location extends React.Component  {

    // initialize state object 
    state = { woeid:''}

    // fn called from child component search bar , returns location if found
  onSearchSubmit= async (woeid)=> {
    
    if ( woeid !== '')
          { 
            console.log('iniside onsearchsubmit')
            this.setState({woeid:woeid}) 
            this.props.getLocation(this.state.woeid);
          }
    }

  // get location by longtitude & Lattitude
  getLocationByLatt = async (lattlong)=>{
    try{
        const response = await metaweatherApi.get('/api/location/search/',
                             {params:{lattlong : lattlong}}  ); 
        const result = await response.data;
        
        //console.log('the new woeid from geolocation coords',result[0].woeid)
        await this.setState({woeid:result[0].woeid} );
        await this.props.getLocation(this.state.woeid);
         
    }catch(err) {
        console.log('request to fetch location failed, ',err.message)
    }
  }
  // get device location when app loads 
  componentDidMount(){
    // check if gelocation supported in device browser
    const geolocation=  (navigator.geolocation)? true : false;

    //if gelocation supported retrive location info
    if (geolocation){
        window.navigator.geolocation.getCurrentPosition(position=>{
        const lattlong = `${position.coords.latitude},${position.coords.longitude}`
        //console.log('geolocation coords detected',lattlong)
       
        //if same as stored location , no need to fetch a new woeid location
        //if new location coords detected , make api request to fetch new woeid location
     
        if (!checkByKey('latt_longt',lattlong))
            {
              this.getLocationByLatt(lattlong);
            }else{
              //if first time application is loaded location is empty
              if (this.state.woeid==='') 
              this.getLocationByLatt(lattlong);
              else
              this.props.getLocation(this.state.woeid);
            }
       
        },
        err=>console.log(err.message)
     );
     //use coords to get current location

    } else {
      console.log('unable to detect current location gelocation is not supported on this or is being disabled ')
    }
  }
  render(){
  return (
    <div>
      <SearchBar placeholderMessage= 'type a city name to view  weather forcasts..'
      onSubmit={this.onSearchSubmit}/>
    </div>
  )}
}

export default Location;

