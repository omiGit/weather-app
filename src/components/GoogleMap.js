import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
export default class GoogleMaps extends Component {
    // componentDidMount(){
    //     GoogleMapsLoader.load((google)=>{return new google.maps.Map(this.refs.map,{
    //         zoom:12,
    //         center:{lat:this.props.lat,
    //         lng:this.props.lng}
    //     });
    // });
    // }
    render() {
    return (
       <div style={{height:"100%",width:"100%",position:"relative"}}> 
       <span onClick={this.props.clicked} style={{position:"absolute",zIndex:"9999",top:10,left:10}}>&#x2718;</span>
        <GoogleMapReact
        defaultCenter={{lat:this.props.lat,
                     lng:this.props.lng}}
        defaultZoom={12}
      />
     
      
      </div>
    )
  }
}
