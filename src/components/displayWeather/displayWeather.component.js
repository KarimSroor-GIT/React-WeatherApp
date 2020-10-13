import React from 'react'
import {Container, Row,Col} from 'react-bootstrap'
import DisplayWeatherDetails  from './displayWeatherDetails.component'
import  metaweatherApi      from '../../API/metaweatherApi.js'
import checkByKey from '../../util.js' 

class DisplayWeather extends React.Component {

  // initialize state 
  state ={currentLocation:'',
    consolidated_weather:[]}

    // get weather data  by woeid location
    getWeatherDataByLoc = async (location)=>{
      if (location !== ''){
      try{
          const response = await metaweatherApi.get(`/api/location/${location}/`); 
          const result = await response.data;
          this.setState({currentLocation:location,consolidated_weather:result.consolidated_weather });
          return;  
      }catch(err) {
          console.log('request to fetch weather data failed, ',err.message)
      }
    }
  }

  componentDidMount(){
     if (this.state.consolidated_weather ===[])
     this.getWeatherDataByLoc (this.props.newLocation);
     else{
     if (!checkByKey('current_location',this.props.newLocation))
   //this is a new location => generate api call to fetch weather details'
        this.getWeatherDataByLoc (this.props.newLocation);
      }
  }

  render(){
    const weather = this.state.consolidated_weather.slice(0,5);
    
    if(weather.length>0){
      const weatherForcasts = weather.map(
            i=> (<Col> <DisplayWeatherDetails weatherDetail={i} Key={i.id}/></Col>)
      )
  return (
            <div>
            <Container fluid='true'>
             <Row>{weatherForcasts}</Row>
            </Container>
            </div>
      )}
      else
      return(<div> No weather data available to dipslay </div>)
    }
}


export default DisplayWeather 


