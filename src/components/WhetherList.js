import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as actions from '../store/actions';
import Trow from './Trow';
 class WheatherList extends Component {
  getList = ()=>{
    return ;
  }

  

  render() {
    
    const list = this.props.data.map(data=>{
    const temp = data.list.map(weather => weather.main.temp-273.15);
    const pressures = data.list.map(weather => weather.main.pressure);
    const humidities = data.list.map(weather => weather.main.humidity);
     console.log(temp);
     return <Trow data={data}  
              temp={temp}
              pressures={pressures}
              humidities={humidities}
              key={data.city.id} 
              lat={data.city.coord.lat}
              lng={data.city.coord.lon}
              removeCity={this.props.removeCity}/>
    })
    return (
     
        <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (C)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {list}
        </tbody>
      </table>
    )
  }
}
export default connect((state)=>({data:state.info.data}),actions)(WheatherList);