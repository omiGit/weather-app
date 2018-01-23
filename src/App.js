import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import WheatherAppBuilder from './containers/WheatherAppBuilder';
import {Provider} from 'react-redux';
import store from './store/store';
//const st = store.getState();
store.subscribe(()=>console.log(store.getState()))
class App extends Component {
  render() {
    return (
      <div className="App">
       
          <Provider store={store}>
            <WheatherAppBuilder/>
          </Provider>  
       
      </div>
    );
  }
}

export default App;
