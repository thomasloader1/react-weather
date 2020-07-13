import React from "react";
import PropTypes from "prop-types";
import WeatherIcos from "react-weathericons";

const icons = {
    cloud: "cloud",
    cloudy: "cloudy",
    sun: "day-sunny",
    rain: "rain",
    snow: "snow",
    windy: "windy",
    fog: "day-fog",
}

const getWeatherIcon = weatherState =>{
    const icon = icons[weatherState];

    if(icon)
        return <WeatherIcos name={icon} size="2x"/>
    else
        return <WeatherIcos name={"day-sunny"} size="2x"/>
}

const WeatherTemperature = ({ temperature, weatherState }) => {
  return (
    <React.Fragment>
        {getWeatherIcon(weatherState)} 
        <p>{temperature} C°</p>
    </React.Fragment>
  );
};

WeatherTemperature.propTypes = {
    temperature: PropTypes.number,
    weatherState: PropTypes.string.isRequired,
}

export default WeatherTemperature;
