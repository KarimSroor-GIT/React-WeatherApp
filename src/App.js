import React from 'react';
import Header from './components/header/header.component'
import Location from './components/location/location.component'
import DisplayWeather from './components/displayWeather/displayWeather.component'
import {Container} from 'react-bootstrap'

class App extends React.Component{

//initialize state 
state = { location:''}
//create a ref to weather details
weatherComponent = React.createRef();

LocationFound = (newlocation)=>
      {
        this.setState({location: newlocation}); 
        //console.log ('App component recieved new location: ',this.state.location);  
      }
  
componentDidUpdate(){
  //console.log('app component state updated')
  this.weatherComponent.current.getWeatherDataByLoc(this.state.location)
}


  render() {
    if (this.state.location !== ''){
      return (

            <Container fluid='true'>
            <div><Header/></div>
            <div><Location getLocation={this.LocationFound} /> </div>  
            <div><DisplayWeather newLocation={this.state.location}
                    ref = {this.weatherComponent} /></div>
            </Container>
              
      )}else {
        return (
          <Container fluid='true'>
            <div><Header/></div>
            <div><Location getLocation={this.LocationFound} /> </div>  
            <div><h1>Loading ....</h1></div>
            </Container>
        )
      }
  } 
}

export default App;
