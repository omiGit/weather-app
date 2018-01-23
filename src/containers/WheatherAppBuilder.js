import React, { Component } from 'react';
import SearchBar from '../components/SearchBar';
import {connect} from 'react-redux';
import * as actions from '../store/actions';
import WhetherList from '../components/WhetherList';
class WhetherApp extends Component {
    state={
        city:'',
        error:false
    }
    
    setCity=e=>this.setState({city:e.target.value,error:false});
    getInfo=e=>{
        e.preventDefault();
        //this.props.fetchInfo(this.state.city);
       // {this.props.fetchInfo(this.state.city);}
        
       if(this.props.data.length){
        const list = this.props.data.filter(data => {
            return data.city.name.toLowerCase() === this.state.city.toLowerCase()
            });
            if(list.length){
                this.props.setError("City already listed");
                this.setState({error:true});
                return;
            }
            else{
                this.props.fetchInfo(this.state.city);
                this.setState({error:false});
            }
        }
        else{
            this.props.fetchInfo(this.state.city);
        }
        // this.props.data.forEach(data => {
        //         if(data.city.name.toLowerCase() === this.state.city.toLowerCase()){
        //             console.log("city Exist")
        //             return ;
        //         }
        //         else{
        //             console.log("city does not Exist", data.city.name.toLowerCase() ,this.state.city)
        //             //this.props.fetchInfo(this.state.city);
        //         }
        //     });
       
    }
  render() {
      let error= null;
      if(this.state.error){
        error =  <div className="alert alert-danger" role="alert">{this.props.error}</div>
      }
    return (
      <div>
        <header className="App-header">  
            <SearchBar getResult={this.getInfo} handleInput={this.setCity} value={this.state.city}/>
            {this.props.error? <div className="alert alert-danger" style={{margin:"25px"}} role="alert">{this.props.error}</div>:null}
            {this.props.loading?<div style={{margin:"25px"}}>Loading...</div>:null}
        </header>
        <WhetherList/>
      </div>
    )
  }
}
export default connect(state=>({data:state.info.data,error:state.info.error,loading:state.info.loading}),actions)(WhetherApp);