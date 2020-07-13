/* eslint-disable no-useless-constructor */
import React from "react";
import convert from "convert-units";
import Location from "./Location";
import WeatherData from "./WeatherData/index";
import { SUN, WINDY } from "./../../constants/weather";

const location = "Buenos Aires,ar"
const api_key = "c1ace047ec1be4a59f2cbd54c6e2db8e"
const url = "http://api.openweathermap.org/data/2.5/weather"

const api_weather = `${url}?q=${location}&appid=${api_key}`;

const data = {
  temperature: 5,
  weatherState: SUN,
  humidity: 10,
  wind: "10 m/s",
};

class WeatherLocation extends React.Component {
  constructor() {
    super();
    this.state = {
      city: "Buenos Aires",
      dataComponent: data,
    };
  }

  getWeatherData = weather =>{
      const { humidity, temp } = weather.main;
      const { speed } = weather.wind;
      const weatherState = this.getWeatherState(weather);
      const data = {
          humidity,
          temperature: temp,
          weatherState,
          wind:`${speed} m/s`
      }
      return data;
  }

  getWeatherState = weather =>{
      return SUN;
  }

  updateState = () => {
    fetch(api_weather)
        .then(res => res.json()).then( data => {
            const newWeather = this.getWeatherData(data);
            this.setState({
                dataComponent: newWeather,
            })
        })
        .catch(err =>{
            console.log(err)
        });
  };

  render() {
    const { city, dataComponent } = this.state;
    return (
      <div className="col-sm-12 py-3">
        <div className="card card-body rounded-xl shadow border-0">
          <Location city={city} />
          <WeatherData data={dataComponent} />
          <a
            href="#asd"
            onClick={this.updateState}
            className="btn btn-secondary"
          >
            Actualizar
          </a>
        </div>
      </div>
    );
  }
}

export default WeatherLocation;
