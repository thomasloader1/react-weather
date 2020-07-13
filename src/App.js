import React from 'react';
import './App.css';
import WeatherLocation from "./components/WeatherLocation/";

class App extends React.Component {
  render(){
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <WeatherLocation city={"Buenos Aires"}/> 
          </div>
        </div>
      </div>
  )};
}

export default App;
