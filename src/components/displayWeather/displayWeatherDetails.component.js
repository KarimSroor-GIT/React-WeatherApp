import React from 'react'
import {Card,ListGroup} from 'react-bootstrap'

export default function DisplayWeatherDetails(props) {
  return (
    <div>
    <Card style={{ width: '15rem' }}>
     <Card.Img variant="top" 
     src={`https://www.metaweather.com/static/img/weather/${props.weatherDetail.weather_state_abbr}.svg`}  />
     <Card.Header>{props.weatherDetail.applicable_date}</Card.Header>
      <Card.Body>
         <Card.Title>{props.weatherDetail.weather_state_name}</Card.Title>
          <Card.Text>
          <ListGroup variant="flush">
          <ListGroup.Item>max : {props.weatherDetail.max_temp}</ListGroup.Item>
          <ListGroup.Item>min : {props.weatherDetail.min_temp}</ListGroup.Item>
          <ListGroup.Item>wind speed : {props.weatherDetail.wind_speed}</ListGroup.Item>
          </ListGroup>
          </Card.Text>
      </Card.Body>
  </Card>
  </div>
  )
}

