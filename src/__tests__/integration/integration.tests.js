import React from 'react';
import {mount} from 'enzyme';
import moxios from 'moxios';
import  App from '../../App';
import DisplayWeather from '../../components/displayWeather/displayWeather.component'
import DisplayWeatherDetails from '../../components/displayWeather/displayWeatherDetails.component'

let wrapped;

beforeEach(()=>{
  //attempt to render full app and all components 
 wrapped = mount (<App/>);

 moxios.install();
 moxios.stubRequest('',{
   status:200,
   response:[{"id":6571951688515584,"weather_state_name":"Heavy Cloud","weather_state_abbr":"hc","wind_direction_compass":"NW","created":"2020-10-18T06:20:02.288663Z","applicable_date":"2020-10-18","min_temp":8.649999999999999,"max_temp":12.635000000000002,"the_temp":12.65,"wind_speed":1.8253881292054404,"wind_direction":318.235553953922,"air_pressure":1024.5,"humidity":68,"visibility":7.398977471566054,"predictability":71},{"id":4974301737385984,"weather_state_name":"Heavy Cloud","weather_state_abbr":"hc","wind_direction_compass":"S","created":"2020-10-18T06:20:02.008825Z","applicable_date":"2020-10-19","min_temp":7.8,"max_temp":14.01,"the_temp":14.344999999999999,"wind_speed":7.5303040678384905,"wind_direction":178.3445800071615,"air_pressure":1016.0,"humidity":63,"visibility":12.036892050425514,"predictability":71},{"id":4777419161468928,"weather_state_name":"Light Rain","weather_state_abbr":"lr","wind_direction_compass":"SSW","created":"2020-10-18T06:20:02.288277Z","applicable_date":"2020-10-20","min_temp":12.055,"max_temp":17.39,"the_temp":17.240000000000002,"wind_speed":11.85972171287945,"wind_direction":201.83374458484627,"air_pressure":1000.0,"humidity":72,"visibility":13.066504115962776,"predictability":75},{"id":6320155777826816,"weather_state_name":"Heavy Rain","weather_state_abbr":"hr","wind_direction_compass":"SW","created":"2020-10-18T06:20:02.057787Z","applicable_date":"2020-10-21","min_temp":11.49,"max_temp":15.594999999999999,"the_temp":15.405000000000001,"wind_speed":9.26277514806066,"wind_direction":230.977885764264,"air_pressure":996.0,"humidity":74,"visibility":7.308567963095522,"predictability":77},{"id":6068087771103232,"weather_state_name":"Light Cloud","weather_state_abbr":"lc","wind_direction_compass":"W","created":"2020-10-18T06:20:02.099458Z","applicable_date":"2020-10-22","min_temp":8.09,"max_temp":12.879999999999999,"the_temp":12.855,"wind_speed":5.367068974954267,"wind_direction":273.4424158614505,"air_pressure":1014.0,"humidity":66,"visibility":12.605136005726557,"predictability":70},{"id":5148906452156416,"weather_state_name":"Showers","weather_state_abbr":"s","wind_direction_compass":"SW","created":"2020-10-18T06:20:04.777624Z","applicable_date":"2020-10-23","min_temp":7.035,"max_temp":13.665,"the_temp":13.16,"wind_speed":5.8662970253718285,"wind_direction":231.0,"air_pressure":1012.0,"humidity":66,"visibility":9.999726596675416,"predictability":73}] 
 });
});

afterEach(()=>{
  moxios.uninstall();
  wrapped.unmount();
});

it ('it will load weather data from api',()=>{
  
  wrapped.instance().LocationFound('1000');

 moxios.wait(()=>{
 wrapped.update();
 expect(wrapped.find(DisplayWeather).length).toEqual(1);
 expect(wrapped.find(DisplayWeatherDetails).length).toEqual(5);
 });

});