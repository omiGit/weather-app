import React, { Component } from 'react';
import GoogleMap from './GoogleMap';
import Chart from './Chart';
export default class Trow extends Component {
    state={
        clicked:false
    }
    clicked = ()=>this.setState(prevState=>({clicked:!prevState.clicked}));

  render() {
       const data=this.props.data;
       
    //   const MyMap = withGoogleMap(props=>{
    //    return  <GoogleMap
    //     defaultZoom={12}
    //     defaultCenter={{ lat:this.props.lat, lng:this.props.lng }}
    // />
    //});
    return (
        <tr>
        <td style={{cursor:"pointer"}}>{!this.state.clicked?<span onClick={this.clicked}>{this.props.data.city.name}</span>:
        <GoogleMap clicked={this.clicked} city={data.city.name} lat={this.props.lat} lng={this.props.lng}/>}</td>
        <td><Chart data={this.props.temp } color="orange" units="C"/></td>
        <td><Chart data={this.props.pressures} color="green" units="hPa" /></td>
        <td><Chart data={this.props.humidities} color="black" units="%"/></td>
        <td><span style={{cursor:"pointer"}} onClick={()=>{this.props.removeCity(data.city.name)}}>&#x2718;</span></td>
      </tr>
    )
  }
}
